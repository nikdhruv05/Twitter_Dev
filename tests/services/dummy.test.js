import { execute } from "../../src/services/dummy-service.js";
import { helper } from "../../src/services/helper-service.js";

jest.mock('../../src/services/helper-service.js');

test('result is true and return learning JS', () => {
    //IMPL of test
        // const spy = jest.spyOn(dummyFunctions, 'helper').mockImplementation(() => true);
        helper.mockReturnValue(true);
        const result = execute();
        expect(result).toBe('Learning JS');
    });

test('result is false and return learning ReactJS', () => {
    //IMPL of test
        // const spy = jest.spyOn(dummyFunctions, 'helper').mockImplementation(() => false);
        helper.mockReturnValue(false);
        const result = execute();
        expect(result).toBe('Learning ReactJS');
    });