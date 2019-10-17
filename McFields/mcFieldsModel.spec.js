const Family = require('./mcFieldsModel');
const db = require('../data/dbConfig');
it('should set set testing environment', () => {
    expect(process.env.DB_ENV).toBe('testing');
});

describe('McFields Family', () =>{

    beforeEach(async () => {
        await db('McFields').truncate();
    });

    describe('insert()', () =>{
        it('should add a family member to database', async () => {

            const records = await db('McFields');
            expect(records).toHaveLength(0);

            await Family.insert({ name: 'Eric'});

            const fam = await db('McFields');
            expect(fam).toHaveLength(1);
        });
    });
    it('should add the provided family member to database', async () => {
        let me = await Family.insert({
            name: 'Isla'
        });
        expect(me.name).toBe('Isla');
        const fam = await db('McFields');
        expect(hobbits).toHaveLength(2);
    });
});