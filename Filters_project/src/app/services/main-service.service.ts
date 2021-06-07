import { Injectable } from '@angular/core';

export interface pointData{
  id: number;
  subcategory: string;
  facility: string;
  date: Date;
  title: string;
  status: string;
  text: string;
  type: string;
  priority: string;
  kvitir: string;
}
export interface Statuses{
  name: string;
  current: number;
}
export interface Types{
  name: string;
  currentLeft: number;
  currentRight: number;
}

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  Data: pointData[] = [
    {
      id: 1,
      subcategory: 'Подкатегория',
      facility: 'МО-181',
      date: new Date(),
      title: 'Температура верха К-2. Переход на ручной режим управления',
      text: 'ляляляляляляляляляляляляляляляляляляляляля',
      status: 'Новое',
      type: 'СМОТР',
      priority: 'Стандартный',
      kvitir: 'Квитировано'
    },
    {
      id: 2,
      subcategory: 'Подкатегория',
      facility: 'ФИТ-181',
      date: new Date(),
      title: 'Температура верха К-2. Переход на ручной режим управления',
      text: 'ляляляляляляляляляляляляляляляляляляляляля',
      status: 'Завершено',
      type: 'Безопасность',
      priority: 'Средний',
      kvitir: 'Не квитировано'
    },
    {
      id: 3,
      subcategory: 'Подкатегория',
      facility: 'МО-181',
      date: new Date(),
      title: 'Температура верха К-2. Переход на ручной режим управления',
      text: 'ляляляляляляляляляляляляляляляляляляляляля',
      status: 'В работе',
      type: 'Производственные задания и распоряжения',
      priority: 'Высокий',
      kvitir: 'Не квитировано'
    },
    {
      id: 4,
      subcategory: 'Подкатегория',
      facility: 'ФИТ-181',
      date: new Date(),
      title: 'Температура верха К-2. Переход на ручной режим управления',
      text: 'ляляляляляляляляляляляляляляляляляляляляля',
      status: 'Новое',
      type: 'Состояние оборудования и отказы',
      priority: 'Стандартный',
      kvitir: 'Не квитировано'
    },
    {
      id: 5,
      subcategory: 'Подкатегория',
      facility: 'МО-181',
      date: new Date(),
      title: 'Температура верха К-2. Переход на ручной режим управления',
      text: 'ляляляляляляляляляляляляляляляляляляляляля',
      status: 'Завершено',
      type: 'Сбросы',
      priority: 'Средний',
      kvitir: 'Не квитировано'
    },
    {
      id: 6,
      subcategory: 'Подкатегория',
      facility: 'ФИТ-181',
      date: new Date(),
      title: 'Температура верха К-2. Переход на ручной режим управления',
      text: 'ляляляляляляляляляляляляляляляляляляляляля',
      status: 'В работе',
      type: 'СМОТР',
      priority: 'Высокий',
      kvitir: 'Не квитировано'
    },
    {
      id: 7,
      subcategory: 'Подкатегория',
      facility: 'МО-181',
      date: new Date(),
      title: 'Температура верха К-2. Переход на ручной режим управления',
      text: 'ляляляляляляляляляляляляляляляляляляляляля',
      status: 'Новое',
      type: 'Безопасность',
      priority: 'Стандартный',
      kvitir: 'Не квитировано'
    },
    {
      id: 8,
      subcategory: 'Подкатегория',
      facility: 'ФИТ-181',
      date: new Date(),
      title: 'Температура верха К-2. Переход на ручной режим управления',
      text: 'ляляляляляляляляляляляляляляляляляляляляля',
      status: 'Завершено',
      type: 'Производственные задания и распоряжения',
      priority: 'Средний',
      kvitir: 'Не квитировано'
    },
    {
      id: 9,
      subcategory: 'Подкатегория',
      facility: 'МО-181',
      date: new Date(),
      title: 'Температура верха К-2. Переход на ручной режим управления',
      text: 'ляляляляляляляляляляляляляляляляляляляляля',
      status: 'В работе',
      type: 'Состояние оборудования и отказы',
      priority: 'Высокий',
      kvitir: 'Не квитировано'
    },
    {
      id: 10,
      subcategory: 'Подкатегория',
      facility: 'ФИТ-181',
      date: new Date(),
      title: 'Температура верха К-2. Переход на ручной режим управления',
      text: 'ляляляляляляляляляляляляляляляляляляляляля',
      status: 'Новое',
      type: 'Сбросы',
      priority: 'Стандартный',
      kvitir: 'Не квитировано'
    },
  ];
  blocksStatuses: Statuses[] = [
    {
      name: 'Все',
      current: 0
    },
    {
      name: 'Новое',
      current: 0
    },
    {
      name: 'Завершено',
      current: 0
    },
    {
      name: 'В работе',
      current: 0
    },
    {
      name: 'Не квитировано',
      current: 0
    }
  ] ;
  blocksTypes: Types[] = [
    {
      name: 'СМОТР',
      currentLeft: 3,
      currentRight: 4
    },
    {
      name: 'Безопасность',
      currentLeft: 3,
      currentRight: 4
    },
    {
      name: 'Производственные задания и распоряжения',
      currentLeft: 3,
      currentRight: 4
    },
    {
      name: 'Состояние оборудования и отказы',
      currentLeft: 3,
      currentRight: 4
    },
    {
      name: 'Сбросы',
      currentLeft: 3,
      currentRight: 4
    }
  ] ;
  dropMenu: string[][] = [
    [...new Set(this.Data.map((elem) => elem.facility))],
    [...new Set(this.Data.map((elem) => elem.priority))]
  ];

  showBlocks: pointData[];

  statusFilter = 'Все';
  typeFilter: string[] = [];
  searchFilter = '';
  facilityFilter = 'Установки';
  priorityFilter = 'Приоритет';

  resetValues(): void{
    this.blocksStatuses.forEach((elem) => {elem.current = 0; });
    this.blocksStatuses[0].current = this.Data.length;
    this.Data.forEach((elem) => {
      if (elem.status === 'Новое') {
        this.blocksStatuses[1].current++;
      }
      if (elem.status === 'Завершено') {
        this.blocksStatuses[2].current++;
      }
      if (elem.status === 'В работе') {
        this.blocksStatuses[3].current++;
      }
      if (elem.kvitir === 'Не квитировано') {
        this.blocksStatuses[4].current++;
      }
    });
  }

  updateShowData(): void{
    this.showBlocks = [...this.Data]
      // Статус
      .filter((element) => this.statusFilter === 'Все' || this.statusFilter === element.status || this.statusFilter === element.kvitir)
      // Тип
      .filter((element) => this.typeFilter.length === 0 || this.typeFilter.some((type) => type === element.type))
      // Приоритет
      .filter((element) => this.priorityFilter === 'Приоритет' || this.priorityFilter === element.priority)
      // Установка
      .filter((element) => this.facilityFilter === 'Установки' || this.facilityFilter === element.facility)
      // Поиск
      .filter((element) => this.searchFilter === '' || element.title.toLowerCase().includes(this.searchFilter.toLowerCase())
        || element.text.toLowerCase().includes(this.searchFilter.toLowerCase()));
  }
}
