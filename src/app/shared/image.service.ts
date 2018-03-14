import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ImageService { 


    url = 'https://picsum.photos/list';
    
    constructor(private _http: Http) {

    }

    getImage() {
        return this._http.get(this.url).map(res => res.json());
    }
}