//от бэка должен прилетать id в item, отфильтрованный список и список  spotlight (если его нужно отрисовать при очистке строки поиска);
// для отрисовки ответа по поиску - согласно макету - есть недостаток материалов и данных в папке api
// компенсирующая заглушка:

import { IMovie } from "../models";

const channels = [
        {
          title: 'CNN',
          min_age: 18,
          description: 'News 24',
          poster: 'src/images/posterCNN.svg',
          keyframe: 'api/keyframe/cnn.jpg',
          id: '1',
        },
        {
          title: 'Animal Planet',
          min_age: 16,
          description: 'In the Animal World - Life of Tigers in the Wild',
          poster: 'src/images/posterAnimalPlanet1.svg',
          keyframe: 'src/images/posterAnimalPlanet.svg',
          id: '2',
        },
        {
          title: 'FX',
          min_age: 18,
          description: 'Now on air: News',
          poster: 'src/images/FX.svg',
          keyframe: 'src/images/posterFX.svg',
          id: '3',
        },
        {
          title: 'Syfy',
          min_age: 16,
          description: 'The 100',
          poster: 'api/logo/syfy.png',
          keyframe: 'src/images/posterSyfy.svg',
          id: '4',
        },
        {
          title: 'Comedy Center',
          min_age: 18,
          description: 'South park',
          poster: 'api/logo/comedy_central.png',
          keyframe: 'src/images/posterComedy.svg',
          id: '5',
        },
];

export function transformeResponse(items:IMovie[], searchValue:string, setSpotlightFlag:(firstValue:boolean)=>void) {
    let filterMovie: IMovie[] = [];
    let filterChannel: IMovie[] = [];
    if (searchValue) {
      filterMovie = items
        .map((el, i) => ({
          ...el,
          titleLoverCase: el.title.toLowerCase(),
          id: new Date().getTime().toString() + i,
        }))
        .filter(({ titleLoverCase }) => titleLoverCase.includes(searchValue));

      filterChannel = channels
        .map(el => ({
          ...el,
          titleLoverCase: el.title.toLowerCase(),
        }))
        .filter(({ titleLoverCase }) => titleLoverCase.includes(searchValue));

        setSpotlightFlag(false);
    }
    const res = items.map((el, i) => ({
      ...el,
      id: new Date().getTime().toString() + i,
    }));
    return [res, filterChannel, filterMovie];
}