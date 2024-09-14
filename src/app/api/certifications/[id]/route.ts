// Importar dependencias
import { NextRequest, NextResponse } from 'next/server';
import Airtable from 'airtable';
import { StatusCodes } from 'http-status-codes';

const base = new Airtable({ apiKey: process.env.DB_API_KEY }).base(process.env.DB_BASE_ID);

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id;
    try {
        const record = await base('certificates').find(id);
        const fields = { ...record.fields };
        if (fields.image_url) {
            fields.image_url =  fields.image_url[0].url
        }
        if (fields.institution_logo) {
            fields.institution_logo =  fields.institution_logo[0].url
        }
        const response = {
            id: record.id,
            createdTime: record._rawJson.createdTime,
            fields: fields,
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