<!--
SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
SPDX-License-Identifier: Apache-2.0
-->

# Greptile Review Smoke Test

Temporary file used to validate the label-gated AI review flow:

1. Open a pull request without any label — no review should start.
2. Add the `enhancement` label — the trigger workflow comments `@greptileai`
   and Greptile reviews the pull request.

Safe to delete after testing.
