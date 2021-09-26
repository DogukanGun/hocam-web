import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CaptionService {
    
    captionVisible = true;
    
    constructor() { }
    
    getCaptionStatus(): boolean {
        return this.captionVisible;
    }

    showCaption() {
        this.captionVisible = true;
    }

    hideCaption() {
        this.captionVisible = false;
    }
}