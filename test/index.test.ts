import {describe, it, expect} from "vitest";
import env from "../src/index";

describe('env()', () => { 
    it("retrns env value", () => {
        process.env.TEST_ENV = "envgaurd";
        expect(env("TEST_ENV")).toBe("envgaurd");
    });

    it("returns fallback if env is not set", () => {
        delete process.env.TEST_ENV;
        expect(env("TEST_ENV","default")).toBe("default");
    });

    it("throws if env is not set and no fallback", () => {
        delete process.env.MISSING_ENV;
        expect(()=> env("MISSING_ENV")).toThrow();
    } )
 })