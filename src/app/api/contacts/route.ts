// Importar dependencias
import { NextRequest, NextResponse } from 'next/server';
import Airtable from 'airtable';
import { StatusCodes } from 'http-status-codes';

const base = new Airtable({ apiKey: process.env.DB_API_KEY }).base(process.env.DB_BASE_ID);

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id;
    try {
        const record = await base('certificates').find(id);
        const response = {
            id: record.id,
            createdTime: record._rawJson.createdTime,
            fields: record.fields,
        };
        return NextResponse.json(response);
    } catch (error) {
        console.error('Error fetching data:', error);
        return NextResponse.json(
            error.message,
            {status:StatusCodes.NOT_FOUND}
        )   
    }
}

export async function POST(req: NextRequest) {
    try {
      const contactRequest = await req.json();
      const record = await base('contacts').create({
        name: contactRequest.name,
        email: contactRequest.email,
        message: contactRequest.message
      });
      const response = {
        id: record.id,
        createdTime: record._rawJson.createdTime,
        name: record.fields.name,
        email: record.fields.email,
        message: record.fields.message
    };
      return NextResponse.json(response, { status: StatusCodes.CREATED });
    } catch (error) {
        console.error('Error saving data:', error);
        return NextResponse.json(
            error.message,
            {status:StatusCodes.INTERNAL_SERVER_ERROR}
        )   
    }
  }