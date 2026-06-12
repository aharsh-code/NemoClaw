// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import { describe, it, expect } from "vitest";
import { errorMessage } from "./error-message";

describe("errorMessage", () => {
  it("returns the message of an Error instance", () => {
    expect(errorMessage(new Error("something went wrong"))).toBe("something went wrong");
  });

  it("returns the message of a TypeError", () => {
    expect(errorMessage(new TypeError("invalid type"))).toBe("invalid type");
  });

  it("coerces a string to string", () => {
    expect(errorMessage("oops")).toBe("oops");
  });

  it("coerces a number to string", () => {
    expect(errorMessage(42)).toBe("42");
  });

  it("handles null", () => {
    expect(errorMessage(null)).toBe("null");
  });

  it("handles undefined", () => {
    expect(errorMessage(undefined)).toBe("undefined");
  });

  it("handles an object without a message property", () => {
    expect(errorMessage({ code: "ENOENT" })).toBe("[object Object]");
  });

  it("handles an Error with an empty message", () => {
    expect(errorMessage(new Error(""))).toBe("");
  });
});
