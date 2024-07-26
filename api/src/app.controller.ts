import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpService } from '@nestjs/axios';
import {map, tap} from 'rxjs';
import {response} from "express";

@Controller('api')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly httpService: HttpService,
  ) {}

  @Get()
  getHello(): any {
    return this.httpService
      .get(
        'https://en.wiktionary.org/api/rest_v1/page/definition/here',
      )
      .pipe(
          map((response) => response.data),
        tap((val) => {
          console.log(val);
        }),
      );
  }
}
