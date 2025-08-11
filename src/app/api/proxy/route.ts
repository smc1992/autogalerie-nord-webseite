import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const endpoint = searchParams.get('endpoint');
    const key = searchParams.get('key');
    const make = searchParams.get('make'); // Für die Modell-Abfrage

    if (!endpoint || !key) {
        return NextResponse.json({ message: 'Endpoint and key parameters are required' }, { status: 400 });
    }

    // Baue die URL und die Parameter manuell und sicher zusammen
    const targetParams = new URLSearchParams({ key });
    if (make) {
        targetParams.append('make', make);
    }

    const targetUrl = `https://api.pixel-base.de/marketplace/v3-11365/${endpoint}?${targetParams.toString()}`;

    try {
        const apiResponse = await fetch(targetUrl);

        if (!apiResponse.ok) {
            const errorText = await apiResponse.text();
            return NextResponse.json({ message: 'External API Error', details: errorText }, { status: apiResponse.status });
        }

        const data = await apiResponse.json();
        return NextResponse.json(data);

    } catch {
        return NextResponse.json({ message: 'Internal Proxy Error' }, { status: 500 });
    }
}
