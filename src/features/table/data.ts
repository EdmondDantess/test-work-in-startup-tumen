export const statusWork = ['В работе', 'На паузе', 'Выполнена'];

export const generateData = () => {
  const priority = ['2', 'Вне очереди'];
  let data: string[][] = [];
  for (let i = 0; i <= 9; i++) {
    let randomizator = Math.floor(Math.random() * 3);
    data.push([
      '01.01.0001',
      'Шифр задачи',
      '48/21 -',
      'Позвонить Копьеву',
      statusWork[randomizator],
      'Иванов В.А.',
      'Свердлова А. И.',
      priority[Math.round(Math.random())],
      'Комментарий',
      '00:15:00',
      '00:00:14',
      '01/01/0001 \n' +
      '00:00:00',
      '01/24/2023 \n' +
      '10:23:17',
    ]);
  }
  return data;
};


export const dataForTableCategory = [
  {
    title: 'Выполненные задачи',
    status: false,
  },
  {
    title: 'Задачи на сегодня',
    status: true,
  },
  {
    title: 'Предстоящие задачи',
    status: false,
  },
];

