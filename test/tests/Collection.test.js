const { randomUUID } = require('crypto');
const { Collection } = require('../../dist/util/Collection');

describe('Collection', () => {
    const collection = new Collection();

    it('Collection add', () => {
        collection.set('test', 'test');
        expect(collection.get('test')).toBe('test');
    });
    it('Collection delete', () => {
        collection.set('test', 'test');
        collection.delete('test');
        expect(collection.get('test')).toBeFalsy();
    });
    it('Collection last item', () => {
        for(let i = 0; i < 10; i++) {
            collection.set(randomBytes)
        }
    })
});
