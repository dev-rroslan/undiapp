export default {
    name: 'jawapan',
    title: 'Jawapan',
    type: 'object',
    fields: [
        {
            name: 'jawapan',
            title: 'Jawapan',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'votecount',
            title: 'Total Votes',
            type: 'number'
        }
    ]
}