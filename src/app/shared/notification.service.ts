import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    readonly defaultDuration = 5000;

    constructor(private _snackBar: MatSnackBar) {}

    notify(message: string, action: string = 'OK', duration: number = this.defaultDuration) {
        this._snackBar.open(message, action, {duration});
    }
}