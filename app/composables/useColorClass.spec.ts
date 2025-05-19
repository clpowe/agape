// test/useColorClass.spec.ts
import { describe, it, expect } from "vitest";
import { useColorClass } from "./useColorClass";

describe("useColorClass", () => {
	it("returns class for red", () => {
		const result = useColorClass("red");
		expect(result.value).toBe("bg-primary-900 text-white");
	});

	it("returns class for green", () => {
		const result = useColorClass("green");
		expect(result.value).toBe("bg-green-100");
	});

	it("returns empty string for invalid key", () => {
		const result = useColorClass("orange");
		expect(result.value).toBe("");
	});

	it("returns empty string when undefined", () => {
		const result = useColorClass(undefined);
		expect(result.value).toBe("");
	});
});
