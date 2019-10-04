const fs = require('fs')
const path = require('path')
const mustache = require('mustache')

main()
async function main() {
  // comes from request
  const masterPages = [
    {
      id: 1,
      name: 'Default',
      section_ids: [1, 2],
    },
    {
      id: 2,
      name: 'Product',
      section_ids: [1, 3, 2],
    },
    {
      id: 4,
      name: 'Foobar',
      section_ids: [1, 2, 3],
    },
  ]

  const template = await fs.promises.readFile(path.join(__dirname, './MasterPageTemplate.mustache'))
  await Promise.all(
    masterPages.map(async masterPage => {
      const rendered = mustache.render(template.toString(), {
        sections: getMasterPageSections(masterPage),
      })
      await fs.promises.writeFile(
        path.join(__dirname, `../pages/MasterPage_${masterPage.id}.vue`),
        rendered,
      )
    }),
  )

  console.log('written')
}

function getMasterPageSections(masterPage) {
  const sectionsMap = [
    {
      id: 1,
      name: 'Header',
    },
    {
      id: 2,
      name: 'Footer',
    },
    {
      id: 3,
      name: 'Content',
    },
  ]

  return masterPage.section_ids.map(id => sectionsMap.find(section => section.id === id))
}
