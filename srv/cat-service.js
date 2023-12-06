
module.exports = cds.service.impl(async function () {

    const { Books } = this.entities;
    this.before('READ', Books, async (req) => {
        const extensibilityService = cds.services['cds.xt.ExtensibilityService'];
        await extensibilityService.set(
            ["using my.bookshop.Books from '_base/db/data-model';\n\n extend my.bookshop.Books with { Z_ISBN: String };"],
            null,
            'test',
            'database',
            't1'
        );
        await DELETE.from(Books);
        await INSERT.into(Books).entries([{"title":"Wuthering Heights","stock":100,"Z_ISBN":""}]);
    })
})