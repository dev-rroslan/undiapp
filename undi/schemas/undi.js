

export default {
    name: 'undi',
    title: 'Undi',
    type: 'document',
    fields: [
        {
            name: 'pertayaan',
            title: 'Pertayaan',
            type: 'string'
        },
        {
            name: 'jawapan',
            title: 'Jawapan',
            type: 'array',
            of: [
                {
                    title: 'Jawapan',
                    type: 'jawapan',
                    
                    
                }
            ]

            


        }
    ]
}