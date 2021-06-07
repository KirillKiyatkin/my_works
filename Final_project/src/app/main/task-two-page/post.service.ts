import {Injectable} from '@angular/core';

interface Post {
  title: string;
  points: Point[];
}

interface Point {
  parameter: string;
  units: string;
  fact: string;
  model: string;
}

@Injectable({providedIn: 'root'})
export class PostService {
  Posts: Post[] = [
    {
      title: 'Сырьё',
      points: [
        {
          parameter: 'Загрузка печи по продукту',
          units: 'Ед.изм.',
          fact: '225',
          model: '224.9'
        },
        {
          parameter: 'Температура продукта на входе в печь',
          units: 'Ед.изм.',
          fact: '224.9',
          model: '224.9'
        },
        {
          parameter: 'Температура продукта на выходе из печи',
          units: 'Ед.изм.',
          fact: '224.9',
          model: '224.9'
        },
        {
          parameter: 'Доля отгона сырья',
          units: 'Ед.изм.',
          fact: '224.9',
          model: '224.9'
        },
      ]
    },
    {
      title: 'Топливо газообразное',
      points: [
        {
          parameter: 'Загрузка печи по продукту',
          units: 'Ед.изм.',
          fact: '500',
          model: '224.9'
        },
        {
          parameter: 'Температура продукта на входе в печь',
          units: 'Ед.изм.',
          fact: '224.9',
          model: '224.9'
        },
        {
          parameter: 'Температура продукта на выходе из печи',
          units: 'Ед.изм.',
          fact: '224.9',
          model: '224.9'
        },
        {
          parameter: 'Доля отгона сырья',
          units: 'Ед.изм.',
          fact: '500.9',
          model: '224.9'
        },
      ]
    },
    {
      title: 'Жидкое топливо',
      points: [
        {
          parameter: 'Загрузка печи по продукту',
          units: 'Ед.изм.',
          fact: '224.9',
          model: '224.9'
        },
        {
          parameter: 'Температура продукта на входе в печь',
          units: 'Ед.изм.',
          fact: '224.9',
          model: '224.9'
        },
        {
          parameter: 'Температура продукта на выходе из печи',
          units: 'Ед.изм.',
          fact: '224.9',
          model: '224.9'
        },
        {
          parameter: 'Доля отгона сырья',
          units: 'Ед.изм.',
          fact: '224.9',
          model: '224.9'
        },
      ]
    },
    {
      title: 'Дымовые газы',
      points: [
        {
          parameter: 'Загрузка печи по продукту',
          units: 'Ед.изм.',
          fact: '224.9',
          model: '224.9'
        },
        {
          parameter: 'Температура продукта на входе в печь',
          units: 'Ед.изм.',
          fact: '224.9',
          model: '224.9'
        },
        {
          parameter: 'Температура продукта на выходе из печи',
          units: 'Ед.изм.',
          fact: '224.9',
          model: '224.9'
        },
        {
          parameter: 'Доля отгона сырья',
          units: 'Ед.изм.',
          fact: '224.9',
          model: '224.9'
        },
      ]
    },
    {
      title: 'Воздух',
      points: [
        {
          parameter: 'Загрузка печи по продукту',
          units: 'Ед.изм.',
          fact: '224.9',
          model: '224.9'
        },
        {
          parameter: 'Температура продукта на входе в печь',
          units: 'Ед.изм.',
          fact: '224.9',
          model: '224.9'
        },
        {
          parameter: 'Температура продукта на выходе из печи',
          units: 'Ед.изм.',
          fact: '224.9',
          model: '224.9'
        },
        {
          parameter: 'Доля отгона сырья',
          units: 'Ед.изм.',
          fact: '224.9',
          model: '224.9'
        },
      ]
    }
  ];
}
