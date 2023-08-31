import { NextResponse } from 'next/server';
import docusign from 'docusign-esign';

export async function POST(request: Request) {
    const baseUrl = 'https://demo.docusign.net/restapi/';
    const apiClient = new docusign.ApiClient({basePath: baseUrl, oAuthBasePath: "123"});
  
  
    return NextResponse.json({ message: apiClient });

}