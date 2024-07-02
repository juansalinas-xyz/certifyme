import { NextRequest, NextResponse } from "next/server";
import { StatusCodes } from "http-status-codes";

export async function GET(req : NextRequest,{params}:{params: {id: string}}){
    const id = params.id
    try {
        return NextResponse.json(
            {
                "id": "recXWNpS7gNF8PFP8",
                "createdTime": "2024-07-02T23:08:58.000Z",
                "fields": {
                    "description": "Certificado de Marketing Digital",
                    "heading": "Certificado de Marketing Digital",
                    "detail": "Este certificado es prueba de haber completado el curso de marketing digital",
                    "image_url": "https://ipfs.io/ipfs/bafybeidl6yn42rwr67bhzv4sgq3kiidzfugl6fgzvnzfvlbha4fbpsun6i",
                    "blockchain_explorer_url": "https://allo.info/asset/1794400153/nft"
                }
            }
        );
    } catch (error) {
        return NextResponse.json(
            error.message,
            {status:StatusCodes.NOT_FOUND}
        )    
    }
    
}