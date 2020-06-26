import { Request, Response } from 'express'
import fs from 'fs'
import path from 'path'

export const welcome = (req: Request, res: Response) => {
    res.json({
        message: "Hola Mundo"
    });
}

export const getClients = (req: Request, res: Response) => {
    fs.readFile(path.join(__dirname, '..', 'clients.json'), (error: Error | null, data: Buffer | string) => {
        if (!error) {
            const clients = JSON.parse(data.toString());
            res.status(200).json(clients)
        } else {
            res.status(400).json({ Cve_Error: error, Cve_Mensaje: "No se pudo leer el archivo" });
        }
    });
}

export const postClient = (req: Request, res: Response) => {
    fs.readFile(path.join(__dirname, '..', 'clients.json'), (error: Error | null, data: Buffer | string) => {
        if (!error) {
            const clients = JSON.parse(data.toString());
            clients.push(req.body);
            fs.writeFile(path.join(__dirname, '..', 'clients.json'), JSON.stringify(clients), (error: Error | null) => {
                if (error) {
                    res.status(400).json({ Cve_Error: error, Cve_Mensaje: "No se pudo agregar el cliente" });
                }
                res.status(200).json({ message: "Se ha agregado el cliente", products: req.body });
            })
        } else {
            res.status(400).json({ Cve_Error: error, Cve_Mensaje: "No se pudo leer el archivo" });
        }
    });
}

export const putClient = (req: Request, res: Response) => {
    fs.readFile(path.join(__dirname, '..', 'clients.json'), (error: Error | null, data: Buffer | string) => {
        if (!error) {
            const clients = JSON.parse(data.toString());
            clients.push(req.body);
            fs.writeFile(path.join(__dirname, '..', 'clients.json'), JSON.stringify(clients), (error: Error | null) => {
                if (error) {
                    res.status(400).json({ Cve_Error: error, Cve_Mensaje: "No se pudo agregar el cliente" });
                }
                res.status(200).json({ message: "Se ha agregado el cliente", products: req.body });
            })
        } else {
            res.status(400).json({ Cve_Error: error, Cve_Mensaje: "No se pudo leer el archivo" });
        }
    });
}