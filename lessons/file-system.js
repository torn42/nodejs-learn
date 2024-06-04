const fs = require('fs');
const path = require('path')

// console.log('START');
//
// fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('Папка создана');
// })
//
// console.log('END')

// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//   if (err) {
//     throw err;
//   }
// })

// CALLBACK HELL
// fs.writeFile(path.resolve(__dirname, 'test.txt'), '5 qwerty 7 9 10', (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('файл записан')
//   fs.appendFile(path.resolve(__dirname, 'test.txt'), 'ДОБАВЛЕНО В КОНЕЦ', (err) => {
//     if (err) {
//       throw err;
//     }
//     fs.appendFile(path.resolve(__dirname, 'test.txt'), 'ДОБАВЛЕНО В КОНЕЦ', (err) => {
//       if (err) {
//         throw err;
//       }
//       console.log('файл записан')
//     })
//     console.log('файл записан')
//   })
// })

// USING FS WITH PROMISES

const writeFileAsync = async (path, data) => {
  return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
    if (err) {
      return reject(err.message)
    }
    resolve()
  }))
}

const appendFileAsync = async (path, data) => {
  return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
    if (err) {
      return reject(err.message)
    }
    resolve()
  }))
}

const readFileAsync = async (path) => {
  return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
    if (err) {
      return reject(err.message)
    }
    resolve(data);
  }))
}

const removeFileAsync = async (path) => {
  return new Promise((resolve, reject) => fs.rm(path, (err) => {
    if (err) {
      return reject(err.message)
    }
    resolve();
  }))
}

// writeFileAsync(path.resolve(__dirname, 'test.txt'), '123')
//   .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '456'))
//   .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '789'))
//   .then(() => readFileAsync(path.resolve(__dirname, 'test.txt')))
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// removeFileAsync(path.resolve(__dirname, 'test.txt'))
//   .then(() => console.log('файл удален'))

// Через переменную окружения передать строку, записать её имя в файл text.txt
// Прочитать файл, посчитать кол-во слов в файле
// Записать кол-во в новый файл count.txt, зачем удалить первый файл

// const text = process.env.TEXT || '';
//
// writeFileAsync(path.resolve(__dirname, 'test.txt'), text)
//   .then(() => readFileAsync(path.resolve(__dirname, 'test.txt')))
//   .then(data => data.split(' ').length)
//   .then(count => writeFileAsync((path.resolve(__dirname, 'count.txt')), `Кол-во слов: ${count}`))
//   .then(() => removeFileAsync(path.resolve(__dirname, 'test.txt')))
//   .catch(err => console.log(err))