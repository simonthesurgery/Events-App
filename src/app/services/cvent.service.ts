import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as xml2js from 'xml2js'

import { CventObject } from 'src/app/models/cvent-objects';

@Injectable({
	providedIn: 'root'
})
export class CventService {

	private SessionHeader: string;
	private ServerURL: string

	constructor(
		private _HttpClient: HttpClient,
	) {
		this.Login("Test", "Test", "Test").then().catch(error => console.error(error));
	}

	/**
	 * Attempts to log the user into Cvent
	 * 
	 * @param AccountNumber Your Cvent account number
	 * @param UserName Your Cvent acount username
	 * @param Password Your Cvent acount password
	 * 
	 * @returns Returns a Promise that will resolve if login successful and reject if login failed
	 */
	public Login(AccountNumber: string, UserName: string, Password: string): Promise<any> {
		return new Promise<any>((resolve, reject) => {
			let Response = this.PostRequest(this.CreateLoginRequest(AccountNumber, UserName, Password));
			if (Response) {
				let LoginResult = Response.loginresponse.loginresult;
				console.log(Response);

				if (LoginResult.LOGINSUCCESS == "true") {
					this.SessionHeader = LoginResult.CVENTSESSIONHEADER;
					this.ServerURL = LoginResult.SERVERURL;
					resolve();
				}
				else {
					reject(LoginResult.ERRORMESSAGE);
				}
			}
			else reject();
		})
	}

	/**
	 * Gets the current Session Header if logged in
	 * 
	 * @returns Session Header if it's set, else null
	 */
	public getSessionHeader(): string {
		return this.SessionHeader;
	}

	/**
	 * Gets the current Server URL
	 * 
	 * @returns Server URL if it's set, else null
	 */
	public getServerURL(): string {
		return this.ServerURL
	}

	/**
	 * Posts a request to the Cvent API
	 * 
	 * @param XML The request to POST in XML format
	 * 
	 * @returns The reponse from the server in JSON format
	 */
	public PostRequest(XML: string): any {

		const options = {
			headers: new HttpHeaders()
			.set("Content-Type", ["type/soap+xml", "charset=utf-8"])
		}

		this._HttpClient.post("https://api.cvent.com", XML, options).subscribe(Response => {
			console.log(Response)
			//return this.ParseResponse(JSON.stringify(Response));
		}, Err => {
			console.error(Err);
			//return null;
		});

		/* Test Code */
		let Response = "<?xml version='1.0' encoding='utf-8'?>\n" +
			"<soap12:Envelope xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:xsd='http://www.w3.org/2001/XMLSchema' xmlns:soap12='http://www.w3.org/2003/05/soap-envelope'>\n" +
			"<soap12:Body>\n" +
			"<LoginResponse xmlns='http://api.cvent.com/2006-11'>\n" +
			"<LoginResult LoginSuccess='true' ServerURL='string' CventSessionHeader='string' ErrorMessage='string' xmlns='http://schemas.cvent.com/api/2006-11' />\n" +
			"</LoginResponse>\n" +
			"</soap12:Body>\n" +
			"</soap12:Envelope>";

		return this.ParseResponse(Response);
	}

	/**
	 * Cleans up the XML response to make the JSON object more user friendly
	 * 
	 * @param Response The Response from the HTTP request
	 * 
	 * @returns Cleaned up XML string
	 */
	private CleanupResponse(Response: string): string {
		Response = Response.replace(/soap12:/g, "");

		return Response;
	}

	/** 
	 * Parses the XML response from Cvent into a JSON object
	 * 
	 * @param Response The Response from the HTTP request
	 * 
	 * @return A JSON object that contains the important information from the XML response
	 */
	private ParseResponse(Response: string): any {
		let Result: any;

		const Parser = new xml2js.Parser({ strict: false, trim: true, normalizeTags: true, mergeAttrs: true, explicitArray: false });
		Parser.parseString(this.CleanupResponse(Response), function (err, result) {
			if (err) console.error(err)
			else Result = result.envelope.body;
		})

		return Result;
	}

	/**
	 * Creates a string that contains a Login request for Cvent
	 * 
	 * @param AccountNumber Your Cvent account number
	 * @param UserName Your Cvent account username
	 * @param Password Your Cvent account password
	 * 
	 * @returns A string containing the request in XML format
	 */
	public CreateLoginRequest(AccountNumber: string, UserName: string, Password: string): string {
		let Body =
			"<Login xmlns='http://api.cvent.com/2006-11'>\n" +
			"<AccountNumber>" + AccountNumber + "</AccountNumber>\n" +
			"<UserName>" + UserName + "</UserName>\n" +
			"<Password>" + Password + "</Password>\n" +
			"</Login>\n";

		return this.CreateSoapXML(null, Body);
	}

	/**
	 * Creates a string that contains a Retrieve request for Cvent
	 *  
	 * @param SessionHeader Session Header from Login response
	 * @param ObjectType The type of object to retrieve, see CventObject
	 * @param IDs The IDs of the objects to retrieve
	 * 
	 * @returns A string containing the request in XML format
	 */
	public CreateRetrieveRequest(SessionHeader: string, ObjectType: CventObject, IDs: string[]): string {
		let IDsXML: string = "";

		IDs.forEach(ID => {
			IDsXML += "<Id>" + ID + "</Id>\n"
		})

		let Header =
			"<CventSessionHeader xmlns='http://api.cvent.com/2006-11'>\n" +
			"<CventSessionHeader>" + SessionHeader + "</CventSessionHeader>\n" +
			"</CventSessionHeader>\n";

		let Body =
			"<Retrieve xmlns='http://api.cvent.com/2006-11'>\n" +
			"<ObjectType>" + ObjectType + "</ObjectType>\n" +
			"<Ids xmlns='http://schemas.cvent.com/api/2006-11'>\n" +
			IDsXML +
			"</Ids>\n" +
			"</Retrieve>\n";

		return this.CreateSoapXML(Header, Body);
	}

	/**
	 * Takes XML data and puts it inside a SOAP wrapper
	 * 
	 * @param Header Data for the Header section
	 * @param Body Data for the Body section
	 * 
	 * @returns A SOAP request as a string
	 */
	private CreateSoapXML(Header: string, Body: string): string {
		let XML: string =
			"<?xml version='1.0' encoding='utf-8'?>\n" +
			"<soap12:Envelope xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:xsd='http://www.w3.org/2001/XMLSchema' xmlns:soap12='http://www.w3.org/2003/05/soap-envelope'>\n" +
			"<soap12:Header>\n" +
			Header +
			"</soap12:Header>\n" +
			"<soap12:Body>\n" +
			Body +
			"</soap12:Body>\n" +
			"</soap12:Envelope>\n";

		return XML;
	}


}
