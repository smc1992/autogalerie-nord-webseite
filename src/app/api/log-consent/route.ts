import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

// Definiert den Pfad zur Log-Datei. process.cwd() stellt sicher, dass der Pfad vom Projekt-Root aus korrekt ist.
const logFilePath = path.join(process.cwd(), 'consent-log.json');

// Hilfsfunktion, um die bisherigen Logs zu lesen oder eine leere Liste zurückzugeben.
async function getLog() {
    try {
        await fs.access(logFilePath);
        const data = await fs.readFile(logFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        // Wenn die Datei nicht existiert, wird ein leeres Array zurückgegeben.
        return [];
    }
}

export async function POST(request: NextRequest) {
    try {
        const consentState = await request.json();
        // Ermittelt die IP-Adresse des Benutzers aus dem Request-Header.
        const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'IP nicht gefunden';

        const logEntry = {
            timestamp: new Date().toISOString(),
            ip,
            consent: consentState,
        };

        const logs = await getLog();
        logs.push(logEntry);

        // Schreibt die aktualisierten Logs zurück in die Datei.
        await fs.writeFile(logFilePath, JSON.stringify(logs, null, 2));

        return NextResponse.json({ success: true, message: 'Consent logged.' });
    } catch (error) {
        console.error('Fehler beim Protokollieren der Einwilligung:', error);
        return NextResponse.json({ success: false, message: 'Failed to log consent.' }, { status: 500 });
    }
}
