#!/usr/bin/env -S node -r esm

const dcmio = require('../lib/index.js')
const {ReadBufferStream } = require('../lib/BufferStream.js')

const fs = require('fs');

fs.mkdir('stages', () => undefined)

function readFileBuffer(path) {
  const b = fs.readFileSync(path)
  return b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength);
}

function readDcm(buf, stage) {
  let dcm = dcmio.Message.readFile(buf);
  let anon = dcmio.Anonymize(dcm.dict);
  let written = dcm.write(dcm.dict, );
  let writtenAnon = dcm.write(anon);
  fs.writeFileSync(`stages/${stage}-raw`, Buffer.from(written))
  fs.writeFileSync(`stages/${stage}-anon`, Buffer.from(writtenAnon))

  return {
    dcm, anon, written, writtenAnon
  }
}

let first = readDcm(readFileBuffer('./spec/fixture/mri/00000001'), 'first')
let secondOrig = readDcm(first.written, 'secondOrig')
let second = readDcm(first.writtenAnon, 'second')
let third = readDcm(second.writtenAnon, 'third')
let fourth = readDcm(third.writtenAnon, 'fourth')

debugger
console.log(first)
console.log(second)
console.log(third)
console.log(fourth)
