import { Component, OnInit } from "@angular/core";
import {
  LogicError, TypeExpectError, UnsupportedError
} from "@slimebones/ngx-antievil";
import { AlertService } from "ngx-minithings/alert/alert.service";
import { AlertLevel } from "ngx-minithings/alert/models";
import { AlertUtils } from "ngx-minithings/alert/utils";
import { DatalistOption } from "ngx-minithings/datalist/datalist-option";
import { DatalistUtils } from "ngx-minithings/datalist/utils";
import { InputType } from "ngx-minithings/input/input-type";
import {
  PaginationItem,
  PaginationFilter,
  PaginationConfig,
  PaginationViewType
} from "ngx-minithings/pagination/models";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit
{
  public InputType = InputType;
  public readonly AlertLevel = AlertLevel;
  public levelOptions: DatalistOption<AlertLevel>[];

  public level: AlertLevel;
  public message: string;
  public livingTime: number = 5;

  public paginationItems: PaginationItem[] = [];
  public paginationFilters: PaginationFilter[] = [];
  public paginationConfig: PaginationConfig;

  public constructor(
    private alertService: AlertService,
  ) {}

  public ngOnInit(): void
  {
    this.levelOptions = [];

    // since we know enum iteration goes over keys first, we can safely store
    // their indexes as their actual values
    // for example for AlertLevel the array would be:
    // ["Info", "Warning", "Error", 0, 1, 2]
    Object.values(AlertLevel).forEach((
      level: string | number, index: number
    ) =>
    {
      if (isNaN(Number(level)))
      {
        this.levelOptions.push({
          value: level as string,
          obj: index
        });
      }
    });

    //////////////////////////////////////////////////////////////////////////
    ///////////////////////// Pagination settings ////////////////////////////
    //////////////////////////////////////////////////////////////////////////
    this.paginationConfig =
    {
      itemCntPerPage: 5,
      visiblePagesCnt: 5,
      viewType: PaginationViewType.Table
    };

    this.paginationFilters.push({
      id: "1",
      labelText: "Отдел",
      inputConfig: {
        type: InputType.Text,
        min: 1,
        max: 10,
        placeholder: "Введите название отдела..."
      },
    });

    this.paginationFilters.push({
      id: "2",
      labelText: "Количество страниц",
      inputConfig: {
        type: InputType.Number,
      },
    });

    this.paginationItems.push({
      text: "Журнал разработки Л904",
      route: "/another",
      filterValues: [
        {filterId: "1", filterValue: "IT"},
        {filterId: "2", filterValue: 200}
      ],
      attr: {
        "Размер": 200
      }
    });

    this.paginationItems.push({
      text: "Поваренная книга 1975",
      route: "/",
      filterValues: [
        {filterId: "1", filterValue: "Кухня"},
        {filterId: "2", filterValue: 200}
      ],
      attr: {
        "Тип": "Книга",
        "Размер": 200,
        "Переиздание": true
      }
    });

    this.paginationItems.push({
      text: "Руководство пользователя блоком АТ1",
      route: "/",
      filterValues: [
        {filterId: "1", filterValue: "IT"},
        {filterId: "2", filterValue: 20}
      ],
      attr: {
        "Тип": "Руководство",
        "Размер": 20
      }
    });

    this.paginationItems.push({
      text: "Рекомендации к разработке проектов",
      route: "/",
      filterValues: [
        {filterId: "1", filterValue: "IT"},
        {filterId: "2", filterValue: 10}
      ],
      attr: {
        "Тип": "Руководство",
        "Размер": 10,
        "Переиздание": false
      }
    });

    this.paginationItems.push({
      text: "Описание модуля для работы с wifi",
      route: "/",
      filterValues: [
        {filterId: "1", filterValue: "IT"},
        {filterId: "2", filterValue: 20}
      ],
      attr: {
        "Тип": "Руководство",
        "Размер": 20
      }
    });

    this.paginationItems.push({
      text: "Пособие по варке компотов 1999",
      route: "/",
      filterValues: [
        {filterId: "1", filterValue: "Кухня"},
        {filterId: "2", filterValue: 10}
      ],
      attr: {
        "Тип": "Руководство",
        "Размер": 10
      }
    });

    this.paginationItems.push({
      text: "Норма потребления сахара ГОСТ 09.87",
      route: "/",
      filterValues: [
        {filterId: "1", filterValue: "Кухня"},
        {filterId: "2", filterValue: 10}
      ],
      attr: {
        "Тип": "ГОСТ",
        "Размер": 10
      }
    });
  }

  public spawnAlert(level: AlertLevel, message: string): void
  {
    this.alertService.spawn({
      level: level,
      message: message
    });
  }

  public onInputValue(
    type: string,
    value: string | number | DatalistOption<AlertLevel>
  ): void
  {
    const numValue: number = Number(value);

    switch (type)
    {
      case "level":
        if (!DatalistUtils.isDatalistOption(value))
        {
          throw new TypeExpectError(
            {"title": "value"}, "DatalistOption", typeof value
          );
        }
        if (!AlertUtils.isAlertLevel(value.value))
        {
          throw new TypeExpectError(
            {"title": "value"}, "AlertLevel", typeof value
          );
        }
        if (value.obj === undefined)
        {
          throw new LogicError(
            "datalist option's obj field should be defined for the AlertLevel"
          );
        }
        this.level = value.obj;
        break;
      case "message":
        if (typeof value !== "string")
        {
          throw new TypeExpectError(
            {"title": "value"}, "string", typeof value
          );
        }
        this.message = value;
        break;
      case "livingTime":
        if (isNaN(numValue))
        {
          throw new TypeExpectError(
            {"title": "value"}, "number", typeof value
          );
        }
        this.livingTime = numValue;
        break;
      default:
        throw new UnsupportedError("input type", type);
    }
  }
}
