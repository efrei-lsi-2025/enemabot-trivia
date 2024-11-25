import { expect } from 'chai';
import { readFile } from 'fs/promises';
import { describe, it } from 'mocha';
import { stdout } from 'test-console';
import { GameRunner } from '../src/game-runner';

describe('The test environment', () => {

    it('should pass', () => {
        expect(true).to.be.true;
    });

    it("should access game", function () {
        expect(GameRunner).to.not.be.undefined;
    });

    it('test game output', async () => {

        // When

        const output = stdout.inspectSync(() => {
            GameRunner.main("test");
        });

        const outputWithoutNewLines = output.map((s) => s.replace('\n', ''));

        // Then

        const file = await readFile('tests/test.txt', 'utf8');
        const fileContent = file.split('\n');

        expect(outputWithoutNewLines).to.deep.equal(fileContent);
    });

});
