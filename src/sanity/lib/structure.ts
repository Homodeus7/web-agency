import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Контент')
    .items([
      // Настройки сайта (синглтон)
      S.listItem()
        .title('Настройки сайта')
        .id('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),

      // Главная страница (синглтон)
      S.listItem()
        .title('Главная страница')
        .id('homePage')
        .child(
          S.document()
            .schemaType('homePage')
            .documentId('homePage')
        ),

      S.divider(),

      // Заявки
      S.listItem()
        .title('Заявки')
        .schemaType('submission')
        .child(
          S.documentTypeList('submission')
            .title('Заявки с сайта')
        ),
    ])
