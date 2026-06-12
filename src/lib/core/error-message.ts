// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

export function errorMessage(error: unknown): string {
  return (error as { message?: string } | null)?.message || String(error);
}
