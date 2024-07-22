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
        console.error('Error fetching data from Airtable:', error);
        return NextResponse.json(
            error.message,
            {status:StatusCodes.NOT_FOUND}
        )   
    }
}