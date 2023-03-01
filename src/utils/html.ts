export function html(value) {
  return new DOMParser().parseFromString(`<template>${value[0]}</template>`, 'text/html').querySelector('template').content;
}

export function parseTemplate(value: string) {
  return new DOMParser().parseFromString(value, 'text/html').querySelector('template').content;
}
