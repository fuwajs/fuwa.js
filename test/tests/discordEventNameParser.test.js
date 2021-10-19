const { Client } = require('../../');
const { GatewayEventsConverter } = require('../../dist/interfaces/EventHandler');
const parser = Client.prototype.parseDiscordEventNames;
const events = GatewayEventsConverter;

describe('Discord type parser', () => {
    it('Parse every event', () => {
        Object.keys(events).forEach(key => {
            const parsed = parser(key);

            if (parsed !== 'new guild') expect(parsed).toBe(events[key]);
        });
    });
});
