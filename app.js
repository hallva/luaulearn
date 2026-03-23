const lessons = [
    {
        id: "syntax-sprout",
        order: 1,
        title: "Syntax Sprout",
        subtitle: "print, strings, numbers, and local variables",
        overview:
            "Learn the smallest building blocks of Lua so you can read and write simple scripts with confidence.",
        goals: [
            "Store values with local variables",
            "Use print() to inspect output",
            "Tell strings, numbers, and booleans apart",
        ],
        previewCode: `local playerName = "Lina"
local coins = 12
local isReady = true

print(playerName)
print(coins + 3)`,
        questions: [
            {
                type: "choice",
                prompt: "Which line creates a local variable holding the number 42?",
                options: [
                    "local answer = 42",
                    "answer == 42",
                    'print("42")',
                    'local answer = "42"',
                ],
                answer: 0,
                explanation:
                    "Use `local` to create a variable in Lua. Numbers are written without quotes.",
            },
            {
                type: "fill",
                prompt: "Complete the print statement so it outputs the value stored in `name`.",
                before: 'local name = "Ada"\nprint(',
                after: ")",
                placeholder: "name",
                accepted: ["name"],
                comparison: "compact",
                explanation:
                    "If a variable already stores the value you want, pass that variable directly to `print()`.",
            },
            {
                type: "arrange",
                prompt: "Build the shortest snippet that stores `Lua` in a variable and prints it.",
                bank: [
                    'print(language)',
                    'local language = "Lua"',
                    "local version = 5.4",
                    "print(version)",
                ],
                solution: [
                    'local language = "Lua"',
                    "print(language)",
                ],
                explanation:
                    "First create the variable, then print it. This is the core read-write pattern in Lua.",
            },
            {
                type: "choice",
                prompt: "Which value is a boolean?",
                options: ['"false"', "0", "false", '"Lua"'],
                answer: 2,
                explanation:
                    "Lua booleans are the keywords `true` and `false`, not quoted strings.",
            },
        ],
    },
    {
        id: "logic-trail",
        order: 2,
        title: "Logic Trail",
        subtitle: "if, elseif, else, and comparison operators",
        overview:
            "Teach your script to choose between outcomes by checking conditions and comparing values.",
        goals: [
            "Write `if` and `else` blocks",
            "Use comparison operators like `==` and `>=`",
            "Read multi-branch logic with `elseif`",
        ],
        previewCode: `local energy = 7

if energy > 5 then
    print("Keep going")
else
    print("Rest")
end`,
        questions: [
            {
                type: "choice",
                prompt: "Which operator checks whether two values are equal in Lua?",
                options: ["=", "==", "!=", ":="],
                answer: 1,
                explanation:
                    "Use `==` to compare values. A single `=` assigns a new value to a variable.",
            },
            {
                type: "arrange",
                prompt: "Arrange the code so it prints `Win` when `points` is at least 10.",
                bank: [
                    '    print("Win")',
                    "end",
                    "local points = 12",
                    "if points >= 10 then",
                ],
                solution: [
                    "local points = 12",
                    "if points >= 10 then",
                    '    print("Win")',
                    "end",
                ],
                explanation:
                    "Set the value first, then open the `if` block, run the line inside it, and close with `end`.",
            },
            {
                type: "fill",
                prompt: "Complete the branch that runs when the condition is false.",
                before: 'if isMember then\n    print("discount")\n',
                after: '\n    print("full price")\nend',
                placeholder: "else",
                accepted: ["else"],
                comparison: "compact",
                explanation:
                    "Use `else` when you want a fallback branch after the main condition fails.",
            },
            {
                type: "choice",
                prompt: "Which keyword lets you test another condition after the first `if`?",
                options: ["elseif", "continue", "repeat", "local"],
                answer: 0,
                explanation:
                    "`elseif` adds another condition without starting a brand new `if` block.",
            },
        ],
    },
    {
        id: "function-forge",
        order: 3,
        title: "Function Forge",
        subtitle: "parameters, return values, and reusable logic",
        overview:
            "Wrap behavior into functions so you can call it with different inputs instead of rewriting the same code.",
        goals: [
            "Define functions with parameters",
            "Send results back with `return`",
            "Reuse the same logic with different values",
        ],
        previewCode: `local function add(a, b)
    return a + b
end

print(add(2, 3))`,
        questions: [
            {
                type: "choice",
                prompt: "What does `return` do inside a function?",
                options: [
                    "Sends a value back to the caller",
                    "Stops all code in the file forever",
                    "Creates a new table automatically",
                    "Prints the answer to the screen",
                ],
                answer: 0,
                explanation:
                    "`return` hands the result back to the place where the function was called.",
            },
            {
                type: "fill",
                prompt: "Finish the call so `total` becomes 9.",
                before: "local total = add(",
                after: ")",
                placeholder: "4, 5",
                accepted: ["4, 5", "4,5"],
                comparison: "compact",
                explanation:
                    "The `add` function needs two numbers. `4` and `5` add up to `9`.",
            },
            {
                type: "arrange",
                prompt: "Build a function that prints a greeting for any name.",
                bank: [
                    '    print("Hi " .. name)',
                    "local function greet(name)",
                    "end",
                    'print(greet("Mia"))',
                ],
                solution: [
                    "local function greet(name)",
                    '    print("Hi " .. name)',
                    "end",
                ],
                explanation:
                    "Define the function header, put the body inside it, and close the block with `end`.",
            },
            {
                type: "choice",
                prompt: "In `local function greet(name)`, what is `name`?",
                options: ["A parameter", "A table", "A loop counter", "A comment"],
                answer: 0,
                explanation:
                    "A parameter is an input variable that a function can use inside its body.",
            },
        ],
    },
    {
        id: "loop-lift",
        order: 4,
        title: "Loop Lift",
        subtitle: "for loops, while loops, and repeated work",
        overview:
            "Automate repetition by letting Lua run a block multiple times instead of copying lines by hand.",
        goals: [
            "Use `for` when the number of repeats is known",
            "Read and write simple `while` loops",
            "Recognize how blocks start and end",
        ],
        previewCode: `for i = 1, 3 do
    print(i)
end`,
        questions: [
            {
                type: "choice",
                prompt: "Which loop is best when you already know how many times to run something?",
                options: ["for", "while", "if", "return"],
                answer: 0,
                explanation:
                    "A numeric `for` loop is built for counted repetition like 1 to 10 or 1 to `#items`.",
            },
            {
                type: "arrange",
                prompt: "Arrange the loop that prints the numbers 1 through 3.",
                bank: [
                    "    print(i)",
                    "for i = 1, 3 do",
                    "end",
                    "local i = 3",
                ],
                solution: [
                    "for i = 1, 3 do",
                    "    print(i)",
                    "end",
                ],
                explanation:
                    "Open the loop with `for`, run the body inside it, and close the block with `end`.",
            },
            {
                type: "fill",
                prompt: "Type the keyword that closes this loop block.",
                before: "while lives > 0 do\n    print(lives)\n",
                after: "",
                placeholder: "end",
                accepted: ["end"],
                comparison: "compact",
                explanation:
                    "Lua closes `if`, `for`, `while`, and function blocks with the same keyword: `end`.",
            },
            {
                type: "choice",
                prompt: "What must become true for a `while` loop to stop?",
                options: [
                    "The condition becomes false",
                    "The loop reaches the last table item automatically",
                    "A function is declared",
                    "A string is printed",
                ],
                answer: 0,
                explanation:
                    "A `while` loop keeps running only while its condition stays true.",
            },
        ],
    },
    {
        id: "table-trek",
        order: 5,
        title: "Table Trek",
        subtitle: "tables, indexing, and reading structured data",
        overview:
            "Use Lua's most important data structure to group values and store named fields.",
        goals: [
            "Create tables with list-style values",
            "Read named fields and indexed items",
            "Use `#` to check the size of a list-like table",
        ],
        previewCode: `local inventory = {"key", "map", "torch"}

print(inventory[1])`,
        questions: [
            {
                type: "choice",
                prompt: "What data structure does Lua use for lists and key-value records?",
                options: ["table", "class", "array object", "package"],
                answer: 0,
                explanation:
                    "Tables are Lua's all-purpose data structure. They can act like arrays, dictionaries, or both.",
            },
            {
                type: "fill",
                prompt: "Complete the expression that prints the player's name field.",
                before: 'local player = {name = "Kai", level = 3}\nprint(player',
                after: ")",
                placeholder: ".name",
                accepted: [".name", '["name"]', "['name']"],
                comparison: "compact",
                explanation:
                    "Named fields can be read with dot notation like `player.name` or bracket notation like `player[\"name\"]`.",
            },
            {
                type: "arrange",
                prompt: "Build the snippet that stores two colors and prints the second one.",
                bank: [
                    "print(colors[2])",
                    'local colors = {"red", "blue"}',
                    "print(colors[1])",
                    'local shade = "blue"',
                ],
                solution: [
                    'local colors = {"red", "blue"}',
                    "print(colors[2])",
                ],
                explanation:
                    "Lua tables are 1-indexed, so the second item lives at position `2`.",
            },
            {
                type: "choice",
                prompt: "What does `#inventory` usually give you?",
                options: [
                    "The number of items in the list part of the table",
                    "A copy of the table",
                    "The first item only",
                    "A boolean",
                ],
                answer: 0,
                explanation:
                    "The `#` operator is commonly used to get the length of a list-like table.",
            },
        ],
    },
];

const legacyStorageKey = "lua-quest-progress-v1";
const authStorageKey = "lua-quest-accounts-v1";
const sessionStorageKey = "lua-quest-session-v1";
const themeStorageKey = "lua-quest-theme-v1";
const mascotName = "Luno";
const avatarThemes = [
    { id: "aurora", label: "Aurora" },
    { id: "ember", label: "Ember" },
    { id: "grove", label: "Grove" },
    { id: "royal", label: "Royal" },
];

function isValidAvatarTheme(theme) {
    return avatarThemes.some((item) => item.id === theme);
}

function getDefaultBio(focusArea) {
    return `Working through ${focusArea.toLowerCase()} one focused run at a time.`;
}

function createDefaultProfile(identityOverrides = {}) {
    const focusArea = identityOverrides.focusArea || "Core Syntax";

    return {
        displayName: identityOverrides.displayName || "Guest Explorer",
        email: identityOverrides.email || "",
        title: identityOverrides.title || "Lua Pathfinder",
        focusArea,
        bio: identityOverrides.bio || getDefaultBio(focusArea),
        avatarTheme: isValidAvatarTheme(identityOverrides.avatarTheme) ? identityOverrides.avatarTheme : "aurora",
        joinedAt: identityOverrides.joinedAt || new Date().toISOString(),
        unlockedLessons: [lessons[0].id],
        totalXp: 0,
        bestCombo: 0,
        lessonScores: {},
    };
}

function getProfileIdentity(source = {}) {
    const focusArea = source.focusArea || "Core Syntax";

    return {
        displayName: source.displayName || "Guest Explorer",
        email: source.email || "",
        title: source.title || "Lua Pathfinder",
        focusArea,
        bio: source.bio || getDefaultBio(focusArea),
        avatarTheme: isValidAvatarTheme(source.avatarTheme) ? source.avatarTheme : "aurora",
        joinedAt: source.joinedAt || new Date().toISOString(),
    };
}

function createDefaultAuthStore() {
    return {
        accounts: [],
    };
}

function sanitizeLessonScores(rawLessonScores = {}) {
    if (!rawLessonScores || typeof rawLessonScores !== "object") {
        return {};
    }

    return Object.entries(rawLessonScores).reduce((scores, [lessonId, rawScore]) => {
        const lesson = lessons.find((item) => item.id === lessonId);
        if (!lesson || rawScore == null) {
            return scores;
        }

        const sourceScore = typeof rawScore === "object" ? rawScore : { xp: rawScore };
        const xp = Number.isFinite(Number(sourceScore.xp)) ? Math.max(0, Number(sourceScore.xp)) : 0;
        const heartsLeft = Number.isFinite(Number(sourceScore.heartsLeft))
            ? Math.max(0, Math.min(5, Number(sourceScore.heartsLeft)))
            : 0;
        const correctCount = Number.isFinite(Number(sourceScore.correctCount))
            ? Math.max(0, Math.min(lesson.questions.length, Number(sourceScore.correctCount)))
            : 0;
        const normalizedGrade = typeof sourceScore.grade === "string" ? sourceScore.grade.trim().toUpperCase() : "";

        scores[lessonId] = {
            xp,
            grade: ["S", "A", "B", "C"].includes(normalizedGrade) ? normalizedGrade : "C",
            heartsLeft,
            correctCount,
        };

        return scores;
    }, {});
}

function sanitizeProgressData(raw = {}) {
    const defaults = createDefaultProfile();
    const unlockedLessons =
        Array.isArray(raw.unlockedLessons) && raw.unlockedLessons.length
            ? raw.unlockedLessons.filter((lessonId) => lessons.some((lesson) => lesson.id === lessonId))
            : [...defaults.unlockedLessons];

    return {
        unlockedLessons: unlockedLessons.length ? unlockedLessons : [...defaults.unlockedLessons],
        totalXp: Number.isFinite(Number(raw.totalXp)) ? Number(raw.totalXp) : 0,
        bestCombo: Number.isFinite(Number(raw.bestCombo)) ? Number(raw.bestCombo) : 0,
        lessonScores: sanitizeLessonScores(raw.lessonScores),
    };
}

function loadLegacyProgress() {
    try {
        const raw = localStorage.getItem(legacyStorageKey);
        if (!raw) {
            return null;
        }

        return sanitizeProgressData(JSON.parse(raw));
    } catch (error) {
        return null;
    }
}

function createAccountRecord({ displayName, email, password, avatarTheme, focusArea, title, bio, legacyProgress }) {
    const trimmedName = displayName.trim();
    const normalizedEmail = email.trim().toLowerCase();
    const identity = {
        displayName: trimmedName,
        email: normalizedEmail,
        title: title || "Lua Pathfinder",
        focusArea: focusArea || "Core Syntax",
        bio: bio || getDefaultBio(focusArea || "Core Syntax"),
        avatarTheme,
        joinedAt: new Date().toISOString(),
    };

    return {
        id: `acct-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        email: normalizedEmail,
        password,
        createdAt: identity.joinedAt,
        profile: normalizeStoredProfile({
            ...identity,
            ...(legacyProgress || {}),
        }),
    };
}

function loadAuthStore() {
    const defaults = createDefaultAuthStore();

    try {
        const raw = localStorage.getItem(authStorageKey);
        if (!raw) {
            return defaults;
        }

        const parsed = JSON.parse(raw);
        const accounts = Array.isArray(parsed.accounts)
            ? parsed.accounts
                  .map((account) => {
                      if (!account || typeof account !== "object") {
                          return null;
                      }

                      const sourceProfile = account.profile && typeof account.profile === "object" ? account.profile : {};
                      const normalizedEmail = String(account.email || sourceProfile.email || "").trim().toLowerCase();
                      const identity = getProfileIdentity({
                          displayName:
                              typeof sourceProfile.displayName === "string" && sourceProfile.displayName.trim()
                                  ? sourceProfile.displayName.trim()
                                  : normalizedEmail || "Guest Explorer",
                          email: normalizedEmail,
                          title:
                              typeof sourceProfile.title === "string" && sourceProfile.title.trim()
                                  ? sourceProfile.title.trim()
                                  : "Lua Pathfinder",
                          focusArea:
                              typeof sourceProfile.focusArea === "string" && sourceProfile.focusArea.trim()
                                  ? sourceProfile.focusArea.trim()
                                  : "Core Syntax",
                          bio:
                              typeof sourceProfile.bio === "string" && sourceProfile.bio.trim()
                                  ? sourceProfile.bio.trim()
                                  : "",
                          avatarTheme: sourceProfile.avatarTheme,
                          joinedAt: sourceProfile.joinedAt || account.createdAt || new Date().toISOString(),
                      });

                      return {
                          id: String(account.id || `acct-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`),
                          email: normalizedEmail,
                          password: String(account.password || ""),
                          createdAt: account.createdAt || identity.joinedAt,
                          profile: {
                              ...createDefaultProfile(identity),
                              ...sanitizeProgressData(sourceProfile),
                              ...identity,
                          },
                      };
                  })
                  .filter(Boolean)
            : [];

        return {
            accounts,
        };
    } catch (error) {
        return defaults;
    }
}

function saveAuthStore() {
    try {
        localStorage.setItem(authStorageKey, JSON.stringify(authStore));
    } catch (error) {
        // Ignore storage failures so the app still works in stricter browser modes.
    }
}

function loadSession() {
    try {
        return localStorage.getItem(sessionStorageKey) || "";
    } catch (error) {
        return "";
    }
}

function getCurrentAccount() {
    return authStore.accounts.find((account) => account.id === currentAccountId) || null;
}

function refreshActiveAccount() {
    currentAccount = getCurrentAccount();

    if (!currentAccount) {
        currentAccountId = "";
    }

    profile = loadProfile();
}

function saveSession(accountId) {
    try {
        if (accountId) {
            localStorage.setItem(sessionStorageKey, accountId);
        } else {
            localStorage.removeItem(sessionStorageKey);
        }
    } catch (error) {
        // Ignore storage failures so the app still works in stricter browser modes.
    }

    currentAccountId = accountId || "";
    refreshActiveAccount();
}

function clearSession() {
    saveSession("");
}

let authStore = loadAuthStore();
let currentAccountId = loadSession();
let currentAccount = null;
let profile = createDefaultProfile();
refreshActiveAccount();

let lastBoardMotionKey = "";
let lastLessonPathKey = "";

const state = {
    selectedLessonId: profile.unlockedLessons[0] || lessons[0].id,
    phase: "overview",
    activeNav: "dashboard",
    activeLessonId: null,
    questionIndex: 0,
    hearts: 5,
    lessonXp: 0,
    combo: 0,
    answers: [],
    currentArrangement: [],
    feedback: null,
    authMode: authStore.accounts.length ? "login" : "signup",
    authError: "",
    profileNotice: "",
    authDraft: {
        loginEmail: "",
        signupDisplayName: "",
        signupEmail: "",
        signupPassword: "",
        signupTitle: "Lua Pathfinder",
        signupFocusArea: "Core Syntax",
        signupAvatarTheme: "aurora",
    },
};

const elements = {
    appShell: document.querySelector(".app-shell"),
    authScreen: document.getElementById("auth-screen"),
    lessonPath: document.getElementById("lesson-path"),
    board: document.getElementById("board"),
    activityFeed: document.getElementById("activity-feed"),
    userCard: document.getElementById("user-card"),
    userAvatar: document.getElementById("user-avatar"),
    userDisplayName: document.getElementById("user-display-name"),
    userMeta: document.getElementById("user-meta"),
    openProfileBtn: document.getElementById("open-profile-btn"),
    logoutBtn: document.getElementById("logout-btn"),
    openProfileNav: document.getElementById("open-profile-nav"),
    navDashboard: document.getElementById("nav-dashboard"),
    navLessons: document.getElementById("nav-lessons"),
    navActivity: document.getElementById("nav-activity"),
    totalXp: document.getElementById("total-xp"),
    bestStreak: document.getElementById("best-streak"),
    skillsCleared: document.getElementById("skills-cleared"),
    hearts: document.getElementById("hearts-count"),
    lessonXp: document.getElementById("lesson-xp"),
    combo: document.getElementById("combo-count"),
    questTitle: document.getElementById("quest-title"),
    questCopy: document.getElementById("quest-copy"),
    stageTitle: document.getElementById("stage-title"),
    stageBadge: document.getElementById("stage-badge"),
    stageCopy: document.getElementById("stage-copy"),
    progressBar: document.getElementById("progress-bar"),
    themeToggle: document.getElementById("theme-toggle"),
    themeLabel: document.getElementById("theme-label"),
    mascotCard: document.getElementById("mascot-card"),
    mascotAvatar: document.getElementById("mascot-avatar"),
    mascotName: document.getElementById("mascot-name"),
    mascotMood: document.getElementById("mascot-mood"),
    mascotLine: document.getElementById("mascot-line"),
    mascotTip: document.getElementById("mascot-tip"),
};

function loadTheme() {
    try {
        const savedTheme = localStorage.getItem(themeStorageKey);
        return savedTheme === "light" ? "light" : "dark";
    } catch (error) {
        return "dark";
    }
}

function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;

    if (elements.themeLabel) {
        elements.themeLabel.textContent = theme === "dark" ? "Dark UI" : "Light UI";
    }

    if (elements.themeToggle) {
        elements.themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
        elements.themeToggle.setAttribute(
            "aria-label",
            theme === "dark" ? "Switch to light theme" : "Switch to dark theme",
        );
    }
}

function saveTheme(theme) {
    try {
        localStorage.setItem(themeStorageKey, theme);
    } catch (error) {
        // Ignore storage failures so the app still works in stricter browser modes.
    }
}

function toggleTheme() {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    saveTheme(nextTheme);
}

function findAccountByEmail(email) {
    const normalizedEmail = email.trim().toLowerCase();
    return authStore.accounts.find((account) => account.email === normalizedEmail) || null;
}

function getAvatarInitials(name) {
    return name
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0].toUpperCase())
        .join("") || "LQ";
}

function formatDateLabel(dateString) {
    try {
        return new Date(dateString).toLocaleDateString(undefined, {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    } catch (error) {
        return "Today";
    }
}

function getClearedLessonCount() {
    return Object.keys(profile.lessonScores).length;
}

function getUnlockedLessonCount() {
    return profile.unlockedLessons.length;
}

function getPerfectClearCount() {
    return Object.values(profile.lessonScores).filter((score) => score.heartsLeft === 5).length;
}

function getAchievementList() {
    const clearedCount = getClearedLessonCount();
    const unlockedCount = getUnlockedLessonCount();
    const perfectCount = getPerfectClearCount();

    return [
        {
            id: "first-clear",
            title: "First Clear",
            description: "Finish your first lesson run.",
            unlocked: clearedCount >= 1,
            status: clearedCount >= 1 ? "Unlocked" : `${clearedCount}/1`,
        },
        {
            id: "combo-keeper",
            title: "Combo Keeper",
            description: "Reach a combo streak of 3.",
            unlocked: profile.bestCombo >= 3,
            status: profile.bestCombo >= 3 ? `Best ${profile.bestCombo}` : `${profile.bestCombo}/3`,
        },
        {
            id: "hundred-xp",
            title: "100 XP Club",
            description: "Earn 100 total XP on this account.",
            unlocked: profile.totalXp >= 100,
            status: profile.totalXp >= 100 ? `${profile.totalXp} XP` : `${profile.totalXp}/100 XP`,
        },
        {
            id: "pathfinder",
            title: "Pathfinder",
            description: "Unlock at least three lessons in the path.",
            unlocked: unlockedCount >= 3,
            status: unlockedCount >= 3 ? `${unlockedCount} unlocked` : `${unlockedCount}/3`,
        },
        {
            id: "perfect-flight",
            title: "Perfect Flight",
            description: "Clear a lesson with all five hearts intact.",
            unlocked: perfectCount >= 1,
            status: perfectCount >= 1 ? `${perfectCount} perfect` : `${perfectCount}/1`,
        },
        {
            id: "foundation-complete",
            title: "Foundation Complete",
            description: "Clear every lesson in the Lua Quest path.",
            unlocked: clearedCount === lessons.length,
            status: clearedCount === lessons.length ? "Complete" : `${clearedCount}/${lessons.length}`,
        },
    ];
}

function getUnlockedAchievementCount() {
    return getAchievementList().filter((achievement) => achievement.unlocked).length;
}

function resetRunState() {
    state.activeLessonId = null;
    state.questionIndex = 0;
    state.hearts = 5;
    state.lessonXp = 0;
    state.combo = 0;
    state.answers = [];
    state.currentArrangement = [];
    state.feedback = null;
}

function syncSelectedLessonState() {
    const fallbackLessonId = profile.unlockedLessons[0] || lessons[0].id;

    if (!lessons.some((lesson) => lesson.id === state.selectedLessonId) || !isLessonUnlocked(state.selectedLessonId)) {
        state.selectedLessonId = fallbackLessonId;
    }

    if (state.activeLessonId && !isLessonUnlocked(state.activeLessonId)) {
        state.activeLessonId = null;
    }
}

function activateNav(navKey) {
    state.activeNav = navKey;
}

function openOverview(lessonId = state.selectedLessonId, navKey = "dashboard") {
    syncSelectedLessonState();

    state.selectedLessonId = isLessonUnlocked(lessonId) ? lessonId : profile.unlockedLessons[0] || lessons[0].id;
    state.phase = "overview";
    state.profileNotice = "";
    resetRunState();
    activateNav(navKey);
    render();
}

function openProfilePage() {
    if (!currentAccount) {
        state.authMode = authStore.accounts.length ? "login" : "signup";
        state.authError = "";
        render();
        return;
    }

    state.phase = "profile";
    state.profileNotice = "";
    resetRunState();
    activateNav("profile");
    render();
}

function syncAccountSessionState() {
    syncSelectedLessonState();
    state.phase = "overview";
    state.authError = "";
    state.profileNotice = "";
    activateNav("dashboard");
    resetRunState();
    lastBoardMotionKey = "";
    lastLessonPathKey = "";
}

function clearSavedAuthData() {
    try {
        localStorage.removeItem(authStorageKey);
        localStorage.removeItem(sessionStorageKey);
        localStorage.removeItem(legacyStorageKey);
    } catch (error) {
        // Ignore storage failures so recovery still tries to continue.
    }

    authStore = createDefaultAuthStore();
    currentAccountId = "";
    currentAccount = null;
    profile = createDefaultProfile();
    state.authMode = "signup";
    state.authError = "";
    state.profileNotice = "";
    state.authDraft = {
        loginEmail: "",
        signupDisplayName: "",
        signupEmail: "",
        signupPassword: "",
        signupTitle: "Lua Pathfinder",
        signupFocusArea: "Core Syntax",
        signupAvatarTheme: "aurora",
    };
    lastBoardMotionKey = "";
    lastLessonPathKey = "";
}

function renderRecoveryOverlay(error) {
    if (!elements.authScreen || !elements.appShell) {
        return;
    }

    const message = error instanceof Error ? error.message : "Unknown rendering error";

    console.error("Lua Quest render failure", error);
    document.body.dataset.auth = "locked";
    elements.appShell.setAttribute("aria-hidden", "true");
    elements.authScreen.hidden = false;
    elements.authScreen.innerHTML = `
        <div class="auth-shell">
            <article class="auth-card auth-card--recovery">
                <div class="auth-brand">
                    <div class="brand-mark">LQ</div>
                    <div>
                        <p class="eyebrow">Recovery Mode</p>
                        <h2>The login flow hit a snag</h2>
                        <p class="auth-copy">
                            Lua Quest caught a rendering error instead of leaving you with a blank blurred screen.
                            You can retry the render or clear saved local account data if an older broken save is stuck.
                        </p>
                    </div>
                </div>
                <p class="auth-feedback is-error">Error: ${escapeHtml(message)}</p>
                <div class="auth-actions">
                    <button class="primary-btn" id="retry-render-btn" type="button">Retry Render</button>
                    <button class="secondary-btn" id="clear-auth-data-btn" type="button">Reset Saved Account Data</button>
                </div>
            </article>
        </div>
    `;

    document.getElementById("retry-render-btn")?.addEventListener("click", () => {
        refreshActiveAccount();
        state.authMode = authStore.accounts.length ? "login" : "signup";
        render();
    });

    document.getElementById("clear-auth-data-btn")?.addEventListener("click", () => {
        clearSavedAuthData();
        render();
    });
}

function renderAvatarThemePicker(selectedTheme, fieldId, scopeClass = "") {
    const gridClassName = ["avatar-theme-grid", scopeClass].filter(Boolean).join(" ");
    const previewName =
        fieldId === "signup-avatar-theme"
            ? state.authDraft.signupDisplayName || "Lua Quest"
            : profile.displayName || "Lua Quest";

    return `
        <div class="${gridClassName}">
            ${avatarThemes
                .map(
                    (theme) => `
                        <button
                            class="avatar-theme-option ${theme.id === selectedTheme ? "is-selected" : ""}"
                            type="button"
                            data-avatar-select="${theme.id}"
                            data-avatar-target="${fieldId}"
                        >
                            <span class="avatar-badge avatar-theme-preview" data-avatar-theme="${theme.id}">${getAvatarInitials(previewName)}</span>
                            <span class="avatar-theme-copy">
                                <strong>${escapeHtml(theme.label)}</strong>
                                <span>${theme.id === "aurora" ? "Blue neon" : theme.id === "ember" ? "Warm ember" : theme.id === "grove" ? "Fresh grove" : "Royal arc"}</span>
                            </span>
                        </button>
                    `,
                )
                .join("")}
        </div>
    `;
}

function updateAvatarThemeSelection(targetInputId, theme) {
    const input = document.getElementById(targetInputId);
    if (!input || !isValidAvatarTheme(theme)) {
        return;
    }

    input.value = theme;

    document
        .querySelectorAll(`[data-avatar-target="${targetInputId}"]`)
        .forEach((button) => button.classList.toggle("is-selected", button.dataset.avatarSelect === theme));
}

function getLessonRankMeta(lesson) {
    const score = profile.lessonScores[lesson.id];

    if (!isLessonUnlocked(lesson.id)) {
        return {
            label: "Locked",
            note: "Clear the previous skill first.",
            stateClass: "is-locked",
        };
    }

    if (!score) {
        return {
            label: "Ready",
            note: `${lesson.questions.length} challenge cards waiting.`,
            stateClass: "is-ready",
        };
    }

    return {
        label: `Rank ${score.grade}`,
        note: `${score.correctCount}/${lesson.questions.length} correct / ${score.xp} XP`,
        stateClass: score.grade === "S" ? "is-proud" : "is-complete",
    };
}

function updateUserCard() {
    if (!elements.userCard) {
        return;
    }

    const isSignedIn = Boolean(currentAccount);
    const displayName = isSignedIn ? profile.displayName : "Explorer Required";
    const meta = isSignedIn
        ? `${profile.title} / ${profile.focusArea} / ${profile.totalXp} XP`
        : authStore.accounts.length
          ? "Log in to resume your profile, achievements, and saved course progress."
          : "Create a local account to unlock your profile, achievements, and saved course progress.";

    elements.userCard.dataset.signedIn = isSignedIn ? "true" : "false";
    elements.userAvatar.textContent = getAvatarInitials(displayName);
    elements.userAvatar.dataset.avatarTheme = profile.avatarTheme || "aurora";
    elements.userDisplayName.textContent = displayName;
    elements.userMeta.textContent = meta;
    elements.openProfileBtn.textContent = isSignedIn ? "Open Profile" : authStore.accounts.length ? "Sign In" : "Create Account";
    elements.logoutBtn.hidden = !isSignedIn;
    elements.logoutBtn.disabled = !isSignedIn;
}

function syncRailState() {
    const activeKey = currentAccount && state.phase === "profile" ? "profile" : state.activeNav;

    [
        [elements.navDashboard, "dashboard"],
        [elements.navLessons, "lessons"],
        [elements.navActivity, "activity"],
        [elements.openProfileNav, "profile"],
    ].forEach(([element, key]) => {
        if (!element) {
            return;
        }

        element.classList.toggle("is-active", activeKey === key);
    });
}

function renderAuthScreen() {
    if (!elements.authScreen || !elements.appShell) {
        return;
    }

    try {
        document.body.dataset.auth = "ready";
        elements.appShell.setAttribute("aria-hidden", "false");
        elements.authScreen.hidden = true;

        const hasSession = Boolean(currentAccount);

        if (hasSession) {
            elements.authScreen.innerHTML = "";
            return;
        }

        const importedProgress = authStore.accounts.length === 0 ? loadLegacyProgress() : null;
        const mode = state.authMode === "signup" ? "signup" : "login";
        const authErrorMarkup = state.authError ? `<p class="auth-feedback is-error">${escapeHtml(state.authError)}</p>` : "";

        const authMarkup = `
            <div class="auth-shell">
                <article class="auth-card">
                    <div class="auth-brand">
                        <div class="brand-mark">LQ</div>
                        <div>
                            <p class="eyebrow">Local Browser Login</p>
                            <h2>${mode === "signup" ? "Create your coder profile" : "Welcome back"}</h2>
                            <p class="auth-copy">
                                ${mode === "signup"
                                    ? "Set up a local account so your name, achievements, streaks, and progress stay together."
                                    : "Log in to your saved Lua Quest profile and jump back into your lessons."}
                            </p>
                        </div>
                    </div>

                    <div class="auth-mode-row" role="tablist" aria-label="Authentication mode">
                        <button class="auth-mode-toggle ${mode === "login" ? "is-active" : ""}" type="button" data-auth-mode="login" role="tab" aria-selected="${String(mode === "login")}">Log In</button>
                        <button class="auth-mode-toggle ${mode === "signup" ? "is-active" : ""}" type="button" data-auth-mode="signup" role="tab" aria-selected="${String(mode === "signup")}">Create Account</button>
                    </div>

                    ${authErrorMarkup}

                    ${
                        mode === "login"
                            ? `
                                <form class="auth-form" id="login-form">
                                    <label class="auth-field">
                                        <span>Email</span>
                                        <input class="answer-input" type="email" name="email" value="${escapeHtml(state.authDraft.loginEmail)}" autocomplete="email" placeholder="you@example.com" required>
                                    </label>
                                    <label class="auth-field">
                                        <span>Password</span>
                                        <input class="answer-input" type="password" name="password" autocomplete="current-password" placeholder="Enter your password" required>
                                    </label>
                                    <div class="auth-actions">
                                        <button class="primary-btn" type="submit">Log In</button>
                                        <span class="auth-inline-note">Accounts live only in this browser for this demo.</span>
                                    </div>
                                </form>
                            `
                            : `
                                <form class="auth-form" id="signup-form">
                                    <div class="auth-grid">
                                        <label class="auth-field">
                                            <span>Display Name</span>
                                            <input class="answer-input" type="text" name="displayName" value="${escapeHtml(state.authDraft.signupDisplayName)}" autocomplete="name" placeholder="Kai Builder" required>
                                        </label>
                                        <label class="auth-field">
                                            <span>Email</span>
                                            <input class="answer-input" type="email" name="email" value="${escapeHtml(state.authDraft.signupEmail)}" autocomplete="email" placeholder="you@example.com" required>
                                        </label>
                                        <label class="auth-field">
                                            <span>Password</span>
                                            <input class="answer-input" type="password" name="password" value="${escapeHtml(state.authDraft.signupPassword)}" autocomplete="new-password" placeholder="At least 4 characters" required>
                                        </label>
                                        <label class="auth-field">
                                            <span>Profile Title</span>
                                            <input class="answer-input" type="text" name="title" value="${escapeHtml(state.authDraft.signupTitle)}" placeholder="Lua Pathfinder">
                                        </label>
                                        <label class="auth-field auth-field--full">
                                            <span>Focus Area</span>
                                            <input class="answer-input" type="text" name="focusArea" value="${escapeHtml(state.authDraft.signupFocusArea)}" placeholder="Core Syntax">
                                        </label>
                                    </div>

                                    <input type="hidden" id="signup-avatar-theme" name="avatarTheme" value="${escapeHtml(state.authDraft.signupAvatarTheme)}">
                                    <div class="auth-field auth-field--full">
                                        <span>Choose Avatar Glow</span>
                                        ${renderAvatarThemePicker(state.authDraft.signupAvatarTheme, "signup-avatar-theme", "auth-avatar-grid")}
                                    </div>

                                    ${
                                        importedProgress
                                            ? `<p class="auth-feedback is-info">Existing lesson progress from your earlier local run will be imported into this first account.</p>`
                                            : `<p class="auth-feedback is-info">This account stays in local browser storage, including your profile and lesson progress.</p>`
                                    }

                                    <div class="auth-actions">
                                        <button class="primary-btn" type="submit">Create Account</button>
                                        <span class="auth-inline-note">You can edit the rest of your profile after sign in.</span>
                                    </div>
                                </form>
                            `
                    }
                </article>
            </div>
        `;

        elements.authScreen.innerHTML = authMarkup;
        document.body.dataset.auth = "locked";
        elements.appShell.setAttribute("aria-hidden", "true");
        elements.authScreen.hidden = false;

        elements.authScreen.querySelectorAll("[data-auth-mode]").forEach((button) => {
            button.addEventListener("click", () => {
                state.authMode = button.dataset.authMode === "signup" ? "signup" : "login";
                state.authError = "";
                renderAuthScreen();
            });
        });

        elements.authScreen.querySelectorAll("[data-avatar-select]").forEach((button) => {
            button.addEventListener("click", () => {
                const theme = button.dataset.avatarSelect || "aurora";
                state.authDraft.signupAvatarTheme = isValidAvatarTheme(theme) ? theme : "aurora";
                updateAvatarThemeSelection("signup-avatar-theme", state.authDraft.signupAvatarTheme);
            });
        });

        const loginForm = document.getElementById("login-form");
        if (loginForm) {
            loginForm.querySelector('[name="email"]')?.addEventListener("input", (event) => {
                state.authDraft.loginEmail = event.target.value;
            });
            loginForm.addEventListener("submit", handleLogin);
        }

        const signupForm = document.getElementById("signup-form");
        if (signupForm) {
            signupForm.querySelector('[name="displayName"]')?.addEventListener("input", (event) => {
                state.authDraft.signupDisplayName = event.target.value;
            });
            signupForm.querySelector('[name="email"]')?.addEventListener("input", (event) => {
                state.authDraft.signupEmail = event.target.value;
            });
            signupForm.querySelector('[name="password"]')?.addEventListener("input", (event) => {
                state.authDraft.signupPassword = event.target.value;
            });
            signupForm.querySelector('[name="title"]')?.addEventListener("input", (event) => {
                state.authDraft.signupTitle = event.target.value;
            });
            signupForm.querySelector('[name="focusArea"]')?.addEventListener("input", (event) => {
                state.authDraft.signupFocusArea = event.target.value;
            });
            signupForm.addEventListener("submit", handleSignup);
        }
    } catch (error) {
        renderRecoveryOverlay(error);
    }
}

function handleLogin(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") || "").trim().toLowerCase();
    const password = String(formData.get("password") || "");
    const account = findAccountByEmail(email);

    state.authDraft.loginEmail = email;

    if (!account || account.password !== password) {
        state.authError = "That email and password combination did not match a saved local profile.";
        renderAuthScreen();
        return;
    }

    saveSession(account.id);
    syncAccountSessionState();
    render();
}

function handleSignup(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const displayName = String(formData.get("displayName") || "").trim();
    const email = String(formData.get("email") || "").trim().toLowerCase();
    const password = String(formData.get("password") || "");
    const title = String(formData.get("title") || "").trim() || "Lua Pathfinder";
    const focusArea = String(formData.get("focusArea") || "").trim() || "Core Syntax";
    const avatarTheme = isValidAvatarTheme(String(formData.get("avatarTheme") || "")) ? String(formData.get("avatarTheme")) : "aurora";

    state.authDraft.signupDisplayName = displayName;
    state.authDraft.signupEmail = email;
    state.authDraft.signupPassword = password;
    state.authDraft.signupTitle = title;
    state.authDraft.signupFocusArea = focusArea;
    state.authDraft.signupAvatarTheme = avatarTheme;

    if (displayName.length < 2) {
        state.authError = "Pick a display name with at least 2 characters so your profile feels real.";
        renderAuthScreen();
        return;
    }

    if (!email.includes("@")) {
        state.authError = "Enter a valid email address for this local account.";
        renderAuthScreen();
        return;
    }

    if (password.length < 4) {
        state.authError = "Use a password with at least 4 characters.";
        renderAuthScreen();
        return;
    }

    if (findAccountByEmail(email)) {
        state.authError = "An account with that email already exists in this browser.";
        renderAuthScreen();
        return;
    }

    const legacyProgress = authStore.accounts.length === 0 ? loadLegacyProgress() : null;
    const account = createAccountRecord({
        displayName,
        email,
        password,
        avatarTheme,
        focusArea,
        title,
        legacyProgress,
    });

    authStore.accounts = [...authStore.accounts, account];
    saveAuthStore();
    state.authDraft.signupPassword = "";
    saveSession(account.id);
    syncAccountSessionState();
    render();
}

function handleProfileSave(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const displayName = String(formData.get("displayName") || "").trim();
    const title = String(formData.get("title") || "").trim() || "Lua Pathfinder";
    const focusArea = String(formData.get("focusArea") || "").trim() || "Core Syntax";
    const bioInput = String(formData.get("bio") || "").trim();
    const avatarTheme = isValidAvatarTheme(String(formData.get("avatarTheme") || "")) ? String(formData.get("avatarTheme")) : "aurora";

    if (displayName.length < 2) {
        state.profileNotice = "Your profile name needs at least 2 characters.";
        render();
        return;
    }

    profile = {
        ...profile,
        displayName,
        title,
        focusArea,
        bio: bioInput || getDefaultBio(focusArea),
        avatarTheme,
    };

    saveProfile();
    state.profileNotice = "Profile saved. Your local account has been updated.";
    render();
}

function renderProfilePage() {
    const achievements = getAchievementList();
    const unlockedAchievements = achievements.filter((achievement) => achievement.unlocked).length;
    const lessonCards = lessons
        .map((lesson) => {
            const lessonMeta = getLessonRankMeta(lesson);
            return `
                <article class="lesson-rank-card ${lessonMeta.stateClass}">
                    <div>
                        <p class="eyebrow">Skill ${lesson.order}</p>
                        <h3>${escapeHtml(lesson.title)}</h3>
                    </div>
                    <strong>${escapeHtml(lessonMeta.label)}</strong>
                    <p>${escapeHtml(lessonMeta.note)}</p>
                </article>
            `;
        })
        .join("");

    elements.board.innerHTML = `
        <article class="profile-page">
            <section class="profile-hero-card">
                <div class="profile-hero-main">
                    <div class="avatar-badge profile-avatar" data-avatar-theme="${escapeHtml(profile.avatarTheme)}">${escapeHtml(
                        getAvatarInitials(profile.displayName),
                    )}</div>
                    <div class="profile-hero-copy">
                        <p class="eyebrow">Account Profile</p>
                        <div class="profile-title-row">
                            <h2>${escapeHtml(profile.displayName)}</h2>
                            <span class="live-badge">${escapeHtml(profile.title)}</span>
                        </div>
                        <p class="question-prompt">${escapeHtml(profile.bio)}</p>
                        <div class="hero-badge-row">
                            <span class="hero-badge">${escapeHtml(profile.focusArea)}</span>
                            <span class="hero-badge">${unlockedAchievements}/${achievements.length} achievements</span>
                            <span class="hero-badge">Joined ${escapeHtml(formatDateLabel(profile.joinedAt))}</span>
                        </div>
                    </div>
                </div>

                <div class="profile-stat-grid">
                    <div class="profile-stat-card">
                        <span>Total XP</span>
                        <strong>${profile.totalXp}</strong>
                    </div>
                    <div class="profile-stat-card">
                        <span>Best Combo</span>
                        <strong>${profile.bestCombo}</strong>
                    </div>
                    <div class="profile-stat-card">
                        <span>Skills Cleared</span>
                        <strong>${getClearedLessonCount()}</strong>
                    </div>
                    <div class="profile-stat-card">
                        <span>Perfect Clears</span>
                        <strong>${getPerfectClearCount()}</strong>
                    </div>
                </div>
            </section>

            <section class="profile-layout">
                <div class="profile-editor-card">
                    <div class="section-heading">
                        <span class="section-dot"></span>
                        <h3>Edit Identity</h3>
                    </div>
                    ${
                        state.profileNotice
                            ? `<p class="auth-feedback ${/saved|reset/i.test(state.profileNotice) ? "is-info" : "is-error"}">${escapeHtml(state.profileNotice)}</p>`
                            : ""
                    }
                    <form class="profile-form" id="profile-form">
                        <div class="profile-form-grid">
                            <label class="profile-field">
                                <span>Display Name</span>
                                <input class="answer-input" type="text" name="displayName" value="${escapeHtml(profile.displayName)}" required>
                            </label>
                            <label class="profile-field">
                                <span>Profile Title</span>
                                <input class="answer-input" type="text" name="title" value="${escapeHtml(profile.title)}">
                            </label>
                            <label class="profile-field profile-field--full">
                                <span>Focus Area</span>
                                <input class="answer-input" type="text" name="focusArea" value="${escapeHtml(profile.focusArea)}">
                            </label>
                            <label class="profile-field profile-field--full">
                                <span>Bio</span>
                                <textarea class="profile-textarea" name="bio" rows="4" placeholder="Tell your future self what you are learning.">${escapeHtml(
                                    profile.bio,
                                )}</textarea>
                            </label>
                        </div>
                        <input type="hidden" id="profile-avatar-theme" name="avatarTheme" value="${escapeHtml(profile.avatarTheme)}">
                        <div class="profile-field profile-field--full">
                            <span>Avatar Glow</span>
                            ${renderAvatarThemePicker(profile.avatarTheme, "profile-avatar-theme")}
                        </div>
                        <div class="answer-actions">
                            <button class="primary-btn" type="submit">Save Profile</button>
                            <button class="secondary-btn" id="profile-back-btn" type="button">Back to Dashboard</button>
                            <button class="secondary-btn" id="profile-reset-progress-btn" type="button">Reset Progress Only</button>
                        </div>
                    </form>
                </div>

                <div class="profile-side-column">
                    <section class="profile-detail-card">
                        <div class="section-heading">
                            <span class="section-dot"></span>
                            <h3>Account Details</h3>
                        </div>
                        <div class="profile-detail-list">
                            <div class="profile-detail-item">
                                <span>Email</span>
                                <strong>${escapeHtml(profile.email || "No email saved")}</strong>
                            </div>
                            <div class="profile-detail-item">
                                <span>Joined</span>
                                <strong>${escapeHtml(formatDateLabel(profile.joinedAt))}</strong>
                            </div>
                            <div class="profile-detail-item">
                                <span>Unlocked Lessons</span>
                                <strong>${getUnlockedLessonCount()} / ${lessons.length}</strong>
                            </div>
                            <div class="profile-detail-item">
                                <span>Best Rank Count</span>
                                <strong>${Object.values(profile.lessonScores).filter((score) => score.grade === "S").length} S-ranks</strong>
                            </div>
                        </div>
                    </section>

                    <section class="profile-detail-card">
                        <div class="section-heading">
                            <span class="section-dot"></span>
                            <h3>Achievements</h3>
                        </div>
                        <div class="achievement-grid">
                            ${achievements
                                .map(
                                    (achievement) => `
                                        <article class="achievement-card ${achievement.unlocked ? "is-unlocked" : "is-locked"}">
                                            <strong>${escapeHtml(achievement.title)}</strong>
                                            <p>${escapeHtml(achievement.description)}</p>
                                            <span>${escapeHtml(achievement.status)}</span>
                                        </article>
                                    `,
                                )
                                .join("")}
                        </div>
                    </section>
                </div>
            </section>

            <section class="profile-lessons-card">
                <div class="section-heading">
                    <span class="section-dot"></span>
                    <h3>Lesson Journey</h3>
                </div>
                <div class="lesson-rank-grid">${lessonCards}</div>
            </section>
        </article>
    `;

    document.getElementById("profile-form").addEventListener("submit", handleProfileSave);
    document.getElementById("profile-back-btn").addEventListener("click", () => openOverview(state.selectedLessonId, "dashboard"));
    document.getElementById("profile-reset-progress-btn").addEventListener("click", () => {
        resetProgress({
            keepPhase: true,
            notice: "Progress reset. Your account identity stayed intact.",
        });
    });

    elements.board.querySelectorAll("[data-avatar-select]").forEach((button) => {
        button.addEventListener("click", () => {
            updateAvatarThemeSelection("profile-avatar-theme", button.dataset.avatarSelect || "aurora");
        });
    });
}

function getQuestionTypeLabel(questionType) {
    if (questionType === "choice") {
        return "Pick the strongest match";
    }

    if (questionType === "fill") {
        return "Type the missing syntax";
    }

    return "Build the code in order";
}

function getQuestionTypeTip(questionType) {
    if (questionType === "choice") {
        return "Read every option once, then eliminate the answers that break the Lua pattern.";
    }

    if (questionType === "fill") {
        return "Aim for the smallest valid snippet. In Lua, a tiny keyword change can fix the whole line.";
    }

    return "Think in sequence: setup first, action second, closing line last.";
}

function getLessonGrade(hearts) {
    if (hearts === 5) {
        return "S";
    }

    if (hearts >= 4) {
        return "A";
    }

    if (hearts >= 2) {
        return "B";
    }

    return "C";
}

function getMascotReactionTone() {
    if (state.phase === "profile") {
        return getUnlockedAchievementCount() >= 3 ? "proud" : "happy";
    }

    if (state.phase === "failed") {
        return "sad";
    }

    if (state.phase === "complete") {
        return ["S", "A"].includes(getLessonGrade(state.hearts)) ? "proud" : "happy";
    }

    if (state.phase === "lesson" && state.feedback) {
        if (!state.feedback.isCorrect) {
            return "sad";
        }

        if (state.combo >= 3 || (isLastQuestion() && state.hearts >= 4)) {
            return "proud";
        }

        return "happy";
    }

    if (state.phase === "lesson" && state.combo >= 3) {
        return "proud";
    }

    const lesson = state.phase === "overview" ? getLesson(state.selectedLessonId) : getActiveLesson();
    const score = profile.lessonScores[lesson.id];
    if (score) {
        return ["S", "A"].includes(score.grade) ? "proud" : "happy";
    }

    return "ready";
}

function getMascotMoodLabel(mood) {
    if (mood === "happy") {
        return "Happy";
    }

    if (mood === "proud") {
        return "Proud";
    }

    if (mood === "sad") {
        return "Sad";
    }

    if (mood === "mentor") {
        return "Guide";
    }

    return "Ready";
}

function getMascotPayload() {
    if (state.phase === "profile") {
        const achievementCount = getUnlockedAchievementCount();
        const hasStrongProfile = achievementCount >= 3 || profile.totalXp >= 100;

        return {
            mood: hasStrongProfile ? "proud" : "mentor",
            status: hasStrongProfile ? "Profile Pride" : "Profile Guide",
            line: hasStrongProfile
                ? `${profile.displayName} is building a real track record. Luno looks proud of this profile.`
                : `${profile.displayName}'s profile is live. Luno is ready to help shape the next milestone.`,
            tip: hasStrongProfile
                ? "Keep polishing the profile and pushing clears. Your achievement board is starting to feel established."
                : "Save your title, focus area, and bio, then clear a few lessons to wake up more achievements.",
        };
    }

    const lesson = state.phase === "overview" ? getLesson(state.selectedLessonId) : getActiveLesson();
    const reactionTone = getMascotReactionTone();

    if (state.phase === "complete") {
        const nextLesson = getNextLesson(lesson.id);
        const grade = getLessonGrade(state.hearts);
        const isProudFinish = reactionTone === "proud";

        return {
            mood: isProudFinish ? "proud" : "happy",
            status: isProudFinish ? `Proud Rank ${grade}` : `Happy Rank ${grade}`,
            line: isProudFinish
                ? `${lesson.title} was excellent. I am proud of that clear.`
                : `${lesson.title} is cleared, and that was a solid finish.`,
            tip: nextLesson
                ? isProudFinish
                    ? `Take that blue-gold momentum into ${nextLesson.title} next.`
                    : `Queue up ${nextLesson.title} when you are ready for the next run.`
                : "You cleared the full path. Replay any lesson if you want an even cleaner rank.",
        };
    }

    if (state.phase === "failed") {
        return {
            mood: "sad",
            status: "Sad Sparks",
            line: `${lesson.title} hit a rough patch, and Luno feels it too.`,
            tip: "The red glow means slow down, read the correction, and try the pattern again with fresh hearts.",
        };
    }

    if (state.phase === "lesson") {
        const question = getCurrentQuestion();
        const questionNumber = state.questionIndex + 1;

        if (state.feedback) {
            if (state.feedback.isCorrect) {
                if (reactionTone === "proud") {
                    return {
                        mood: "proud",
                        status: state.combo >= 3 ? `Proud Combo x${state.combo}` : "Proud Finish",
                        line: "That was excellent. Luno is glowing blue and gold for that answer.",
                        tip: "Keep this rhythm. Your best answers should feel clean, calm, and intentional.",
                    };
                }

                return {
                    mood: "happy",
                    status: "Happy Cheer",
                    line: `Nice answer. ${getQuestionTypeLabel(question.type)} really clicked there.`,
                    tip: "That green glow means the pattern landed. Lock it in and carry it to the next card.",
                };
            }

            return {
                mood: "sad",
                status: state.hearts === 1 ? "Sad Last Heart" : "Red Reset",
                line: `That one stung a bit. Luno looks sad, but you still have ${state.hearts} ${state.hearts === 1 ? "heart" : "hearts"} left.`,
                tip:
                    state.hearts === 1
                        ? `Slow the pace down and reread every token. ${getQuestionTypeTip(question.type)}`
                        : `Use the correction as your clue, then reset fast. ${getQuestionTypeTip(question.type)}`,
            };
        }

        if (state.combo >= 3) {
            return {
                mood: "proud",
                status: `Proud Combo x${state.combo}`,
                line: `${lesson.title} is starting to feel natural. Luno is standing tall for this streak.`,
                tip: "The blue-gold state means you are doing more than fine. Stay sharp and keep the streak clean.",
            };
        }

        return {
            mood: "ready",
            status: `Card ${questionNumber}/${lesson.questions.length}`,
            line: `${getQuestionTypeLabel(question.type)} for ${lesson.title}. I am right here with you.`,
            tip: getQuestionTypeTip(question.type),
        };
    }

    const score = profile.lessonScores[lesson.id];

    if (score) {
        return {
            mood: reactionTone,
            status: reactionTone === "proud" ? `Proud Rank ${score.grade}` : `Happy Rank ${score.grade}`,
            line:
                reactionTone === "proud"
                    ? `${lesson.title} already has one of your best clears. Luno remembers it.`
                    : `${lesson.title} is ready for another clean run with your dragon guide nearby.`,
            tip:
                reactionTone === "proud"
                    ? "Push for another blue-gold finish or replay to keep the streak feeling effortless."
                    : "Start the lesson when you want another green-glow clear and a stronger rhythm.",
        };
    }

    return {
        mood: "ready",
        status: "Fresh Flight",
        line: `I am ${mascotName}, your quest dragon. I will cheer you through ${lesson.title}.`,
        tip: "Start the lesson and I will keep pointing at the syntax pattern that matters most.",
    };
}

function renderTaskMascotCue() {
    const payload = getMascotPayload();

    return `
        <div class="task-mascot" data-mood="${payload.mood}">
            <div class="task-mascot-avatar" aria-hidden="true">
                <div class="mascot-avatar">
                    <span class="mascot-orbit orbit-one"></span>
                    <span class="mascot-orbit orbit-two"></span>
                    <div class="mascot-body">
                        <span class="mascot-tail"></span>
                        <span class="mascot-wing wing-left"></span>
                        <span class="mascot-wing wing-right"></span>
                        <span class="mascot-horn horn-left"></span>
                        <span class="mascot-horn horn-right"></span>
                        <span class="mascot-snout"></span>
                        <span class="mascot-belly"></span>
                        <span class="mascot-eye eye-left"></span>
                        <span class="mascot-eye eye-right"></span>
                        <span class="mascot-mouth"></span>
                        <span class="mascot-core">LQ</span>
                    </div>
                </div>
            </div>
            <div class="task-mascot-copy">
                <span class="task-mascot-kicker">Mascot Reaction</span>
                <div class="task-mascot-title-row">
                    <strong>${escapeHtml(payload.status)}</strong>
                    <span class="task-mascot-badge">${escapeHtml(getMascotMoodLabel(payload.mood))}</span>
                </div>
                <p>${escapeHtml(payload.line)}</p>
                <p class="task-mascot-tip">${escapeHtml(payload.tip)}</p>
            </div>
        </div>
    `;
}

function renderMascot() {
    if (!elements.mascotCard) {
        return;
    }

    const payload = getMascotPayload();

    elements.mascotCard.dataset.mood = payload.mood;
    elements.mascotAvatar.dataset.mood = payload.mood;
    elements.mascotName.textContent = mascotName;
    elements.mascotMood.textContent = payload.status;
    elements.mascotLine.textContent = payload.line;
    elements.mascotTip.textContent = payload.tip;
}

function getLessonPathRenderKey() {
    const unlockedKey = profile.unlockedLessons.join("|");
    const scoresKey = Object.entries(profile.lessonScores)
        .filter(([, score]) => score && typeof score === "object")
        .sort(([leftId], [rightId]) => leftId.localeCompare(rightId))
        .map(([lessonId, score]) => `${lessonId}:${score.grade || "C"}:${Number(score.xp) || 0}`)
        .join("|");

    return `${state.selectedLessonId}:${state.phase === "lesson" ? "locked" : "free"}:${unlockedKey}:${scoresKey}`;
}

function getBoardMotionKey() {
    const lessonId = state.activeLessonId || state.selectedLessonId || "overview";

    if (state.phase === "lesson") {
        return `${state.phase}:${lessonId}:${state.questionIndex}:${state.feedback ? (state.feedback.isCorrect ? "correct" : "wrong") : "prompt"}`;
    }

    return `${state.phase}:${lessonId}`;
}

function syncUiState() {
    document.body.dataset.phase = state.phase;

    const boardMotionKey = getBoardMotionKey();
    elements.board.dataset.animate = boardMotionKey !== lastBoardMotionKey ? "true" : "false";
    lastBoardMotionKey = boardMotionKey;
}

function normalizeStoredProfile(source = {}) {
    const identity = getProfileIdentity(source);

    return {
        ...createDefaultProfile(identity),
        ...sanitizeProgressData(source),
        ...identity,
    };
}

function loadProfile() {
    if (currentAccount && currentAccount.profile) {
        return normalizeStoredProfile(currentAccount.profile);
    }

    const legacyProgress = loadLegacyProgress();
    return legacyProgress ? normalizeStoredProfile(legacyProgress) : createDefaultProfile();
}

function saveProfile() {
    profile = normalizeStoredProfile(profile);

    try {
        if (!currentAccountId) {
            localStorage.setItem(legacyStorageKey, JSON.stringify(sanitizeProgressData(profile)));
            return;
        }
    } catch (error) {
        // Ignore storage failures so the app still works in stricter browser modes.
    }

    authStore.accounts = authStore.accounts.map((account) =>
        account.id === currentAccountId
            ? {
                  ...account,
                  email: profile.email || account.email,
                  profile: { ...profile },
              }
            : account,
    );

    saveAuthStore();
    refreshActiveAccount();
}

function getLesson(lessonId) {
    return lessons.find((lesson) => lesson.id === lessonId) || lessons[0];
}

function getActiveLesson() {
    return getLesson(state.activeLessonId || state.selectedLessonId);
}

function getCurrentQuestion() {
    const lesson = getActiveLesson();
    return lesson.questions[state.questionIndex];
}

function getNextLesson(lessonId) {
    const lessonIndex = lessons.findIndex((lesson) => lesson.id === lessonId);
    return lessonIndex >= 0 ? lessons[lessonIndex + 1] : null;
}

function isLessonUnlocked(lessonId) {
    return profile.unlockedLessons.includes(lessonId);
}

function getQuestionProgress() {
    const lesson = getActiveLesson();
    if (state.phase !== "lesson") {
        return 0;
    }

    return ((state.questionIndex + 1) / lesson.questions.length) * 100;
}

function updateHeader() {
    const selectedLesson = getLesson(state.selectedLessonId);
    const lesson = getActiveLesson();
    let progress = 0;

    if (state.phase === "lesson") {
        progress = getQuestionProgress();
    } else if (state.phase === "complete") {
        progress = 100;
    } else if (state.phase === "failed") {
        progress = ((state.questionIndex + 1) / lesson.questions.length) * 100;
    } else if (state.phase === "profile") {
        progress = (getUnlockedAchievementCount() / getAchievementList().length) * 100;
    }

    elements.totalXp.textContent = profile.totalXp;
    elements.bestStreak.textContent = profile.bestCombo;
    elements.skillsCleared.textContent = Object.keys(profile.lessonScores).length;
    elements.hearts.textContent = state.hearts;
    elements.lessonXp.textContent = state.lessonXp;
    elements.combo.textContent = state.combo;
    elements.progressBar.style.width = `${progress}%`;

    if (state.phase === "lesson") {
        elements.stageTitle.textContent = `${lesson.title} - Question ${state.questionIndex + 1} of ${lesson.questions.length}`;
        elements.stageBadge.textContent = "Run Live";
        elements.stageCopy.textContent = "Answer quickly, protect your hearts, and stack combo XP while the run is active.";
        elements.questTitle.textContent = `Keep all ${state.hearts} hearts alive in ${lesson.title}.`;
        elements.questCopy.textContent = lesson.subtitle;
        return;
    }

    if (state.phase === "complete") {
        elements.stageTitle.textContent = `${lesson.title} complete`;
        elements.stageBadge.textContent = "Quest Clear";
        elements.stageCopy.textContent = "The next lesson is waiting on the course map, or you can replay for a cleaner rank.";
        elements.questTitle.textContent = "Lesson cleared. Your path keeps moving.";
        elements.questCopy.textContent = "Replay for a cleaner streak or jump to the next skill on the map.";
        return;
    }

    if (state.phase === "failed") {
        elements.stageTitle.textContent = `${lesson.title} needs another run`;
        elements.stageBadge.textContent = "Try Again";
        elements.stageCopy.textContent = "Take another swing at the run or head back to the course map and reset your focus.";
        elements.questTitle.textContent = "You ran out of hearts, not momentum.";
        elements.questCopy.textContent = "Retry the lesson and lock in the syntax pattern that tripped you up.";
        return;
    }

    if (state.phase === "profile") {
        elements.stageTitle.textContent = `${profile.displayName}'s profile`;
        elements.stageBadge.textContent = "Account";
        elements.stageCopy.textContent = "Edit your profile, review achievements, and track how your Lua path is growing.";
        elements.questTitle.textContent = profile.title;
        elements.questCopy.textContent = profile.bio;
        return;
    }

    elements.stageTitle.textContent = "Choose a skill and start practicing.";
    elements.stageBadge.textContent = "Practice Mode";
    elements.stageCopy.textContent = "Quick coding rounds with streaks, hearts, and unlockable lessons.";
    elements.questTitle.textContent = selectedLesson.title;
    elements.questCopy.textContent = selectedLesson.overview;
}

function renderLessonPath() {
    elements.lessonPath.innerHTML = "";

    lessons.forEach((lesson) => {
        const button = document.createElement("button");
        const unlocked = isLessonUnlocked(lesson.id);
        const score = profile.lessonScores[lesson.id];
        const isSelected = state.selectedLessonId === lesson.id;
        const statusLabel = !unlocked ? "Locked" : score ? `Rank ${score.grade}` : "Ready";
        const lessonMeta = !unlocked
            ? "Finish the previous skill to unlock this."
            : score
              ? `${score.correctCount}/${lesson.questions.length} correct on your best run`
              : `${lesson.questions.length} challenge cards waiting`;

        button.type = "button";
        button.className = "lesson-card";
        if (isSelected) {
            button.classList.add("is-selected");
        }
        if (!unlocked) {
            button.classList.add("is-locked");
            button.disabled = true;
        }
        if (score) {
            button.classList.add("is-complete");
        }
        if (state.phase === "lesson") {
            button.disabled = true;
        }

        button.innerHTML = `
            <div class="lesson-card-header">
                <div>
                    <span class="small-copy">Skill ${lesson.order}</span>
                    <h3>${lesson.title}</h3>
                    <span>${lesson.subtitle}</span>
                </div>
                <span class="lesson-index">${statusLabel}</span>
            </div>
            <div class="lesson-card-meta">
                <span>${lessonMeta}</span>
            </div>
        `;

        if (unlocked) {
            button.addEventListener("click", () => {
                if (state.phase === "lesson") {
                    return;
                }
                state.selectedLessonId = lesson.id;
                state.activeLessonId = null;
                state.phase = "overview";
                state.profileNotice = "";
                activateNav("lessons");
                render();
            });
        }

        elements.lessonPath.appendChild(button);
    });
}

function renderActivityFeed() {
    if (!elements.activityFeed) {
        return;
    }

    const highlightedLessonId = state.phase === "overview" ? state.selectedLessonId : getActiveLesson().id;

    elements.activityFeed.innerHTML = lessons
        .map((lesson) => {
            const unlocked = isLessonUnlocked(lesson.id);
            const score = profile.lessonScores[lesson.id];
            const canSelect = unlocked && state.phase !== "lesson";
            let statusLabel = "Ready";
            let note = lesson.subtitle;
            let stateClass = "is-ready";

            if (state.phase === "lesson" && lesson.id === highlightedLessonId) {
                statusLabel = `Live ${state.questionIndex + 1}/${lesson.questions.length}`;
                note = `${state.hearts} ${state.hearts === 1 ? "heart" : "hearts"} left with combo x${state.combo}.`;
                stateClass = "is-live";
            } else if (state.phase === "failed" && lesson.id === highlightedLessonId) {
                statusLabel = "Retry";
                note = "Last run ran out of hearts. Review the correction and jump back in.";
                stateClass = "is-alert";
            } else if (score) {
                statusLabel = `Rank ${score.grade}`;
                note = `${score.correctCount}/${lesson.questions.length} correct on your best clear.`;
                stateClass = "is-complete";
            } else if (!unlocked) {
                statusLabel = "Locked";
                note = "Clear the previous lesson to unlock this step in the path.";
                stateClass = "is-locked";
            } else if (lesson.id === state.selectedLessonId) {
                statusLabel = "Queued";
                stateClass = "is-selected";
            }

            return `
                <button
                    class="activity-item ${stateClass}"
                    type="button"
                    data-activity-lesson="${lesson.id}"
                    ${canSelect ? "" : "disabled"}
                >
                    <span class="activity-avatar">${String(lesson.order).padStart(2, "0")}</span>
                    <span class="activity-copy">
                        <strong>${escapeHtml(lesson.title)}</strong>
                        <span>${escapeHtml(note)}</span>
                        <span class="activity-meta">${escapeHtml(statusLabel)}</span>
                    </span>
                </button>
            `;
        })
        .join("");

    elements.activityFeed.querySelectorAll("[data-activity-lesson]").forEach((item) => {
        if (item.disabled) {
            return;
        }

        item.addEventListener("click", () => {
            const lessonId = item.dataset.activityLesson;
            if (!lessonId || !isLessonUnlocked(lessonId) || state.phase === "lesson") {
                return;
            }

            state.selectedLessonId = lessonId;
            state.activeLessonId = null;
            state.phase = "overview";
            state.feedback = null;
            state.currentArrangement = [];
            state.profileNotice = "";
            activateNav("activity");
            render();
        });
    });
}

function renderOverview() {
    const lesson = getLesson(state.selectedLessonId);
    const score = profile.lessonScores[lesson.id];
    const bestRankCopy = score ? `Best rank ${score.grade}` : "Fresh lesson";

    elements.board.innerHTML = `
        <article class="empty-card">
            <div class="hero-grid">
                <div class="hero-copy">
                    <p class="eyebrow">Skill ${lesson.order}</p>
                    <h2>${lesson.title}</h2>
                    <p class="question-prompt">${lesson.overview}</p>

                    <div class="hero-badge-row">
                        <span class="hero-badge">5 hearts per run</span>
                        <span class="hero-badge">Combo XP bonus</span>
                        <span class="hero-badge">${bestRankCopy}</span>
                    </div>

                    <div class="lesson-chip-row">
                        ${lesson.goals
                            .map(
                                (goal) => `
                                    <div class="lesson-chip">
                                        <strong>${goal}</strong>
                                        <span>Short practice rounds that reinforce real Lua syntax and coding habits.</span>
                                    </div>
                                `,
                            )
                            .join("")}
                    </div>

                    <div class="answer-actions">
                        <button class="primary-btn" id="start-lesson-btn">Start Lesson</button>
                        <button class="secondary-btn" id="reset-progress-btn">Reset Progress</button>
                    </div>
                </div>

                <div class="code-panel">
                    <p class="eyebrow">Preview Snippet</p>
                    <pre>${escapeHtml(lesson.previewCode)}</pre>
                </div>
            </div>

            <div class="stats-grid">
                <div class="stat-box">
                    <strong>Questions</strong>
                    <span>${lesson.questions.length} challenge cards</span>
                </div>
                <div class="stat-box">
                    <strong>Focus</strong>
                    <span>${lesson.subtitle}</span>
                </div>
                <div class="stat-box">
                    <strong>Clear Bonus</strong>
                    <span>20 XP for finishing the lesson</span>
                </div>
                <div class="stat-box">
                    <strong>Best Result</strong>
                    <span>${score ? `${score.grade} rank with ${score.xp} XP` : "No clear yet"}</span>
                </div>
            </div>
        </article>
    `;

    document.getElementById("start-lesson-btn").addEventListener("click", () => {
        startLesson(lesson.id);
    });

    document.getElementById("reset-progress-btn").addEventListener("click", resetProgress);
}

function renderChoiceQuestion(question, lesson) {
    const options = question.options
        .map(
            (option, index) => `
                <button
                    class="option-btn"
                    type="button"
                    data-option-index="${index}"
                    ${state.feedback ? "disabled" : ""}
                >
                    ${escapeHtml(option)}
                </button>
            `,
        )
        .join("");

    elements.board.innerHTML = `
        <article class="question-card">
            <div class="question-head">
                <div>
                    <p class="eyebrow">${lesson.title}</p>
                    <h2>${escapeHtml(question.prompt)}</h2>
                </div>
                <span class="question-tag">Pick One</span>
            </div>
            ${renderTaskMascotCue()}
            <div class="choice-grid">${options}</div>
            ${renderFeedbackBlock()}
        </article>
    `;

    elements.board.querySelectorAll("[data-option-index]").forEach((button) => {
        button.addEventListener("click", () => {
            if (state.feedback) {
                return;
            }

            const pickedIndex = Number(button.dataset.optionIndex);
            const isCorrect = pickedIndex === question.answer;
            settleAnswer(isCorrect, question.explanation, question.options[question.answer]);

            const buttons = elements.board.querySelectorAll("[data-option-index]");
            buttons.forEach((item, index) => {
                item.disabled = true;
                if (index === question.answer) {
                    item.classList.add("is-correct");
                } else if (index === pickedIndex && !isCorrect) {
                    item.classList.add("is-wrong");
                }
            });
        });
    });
}

function renderFillQuestion(question, lesson) {
    elements.board.innerHTML = `
        <article class="question-card">
            <div class="question-head">
                <div>
                    <p class="eyebrow">${lesson.title}</p>
                    <h2>${escapeHtml(question.prompt)}</h2>
                </div>
                <span class="question-tag">Type It</span>
            </div>
            ${renderTaskMascotCue()}

            <div class="code-panel">
                <pre>${escapeHtml(question.before || "")}<span id="fill-slot">${escapeHtml(question.placeholder || "your answer")}</span>${escapeHtml(question.after || "")}</pre>
            </div>

            <div class="fill-row">
                <input
                    id="answer-input"
                    class="answer-input"
                    type="text"
                    placeholder="${escapeHtml(question.placeholder || "Type your answer here")}"
                    autocomplete="off"
                    ${state.feedback ? "disabled" : ""}
                >
                <div class="answer-actions">
                    <button class="primary-btn" id="submit-answer-btn" type="button" ${state.feedback ? "disabled" : ""}>Check Answer</button>
                    <button class="secondary-btn" id="show-hint-btn" type="button">Show Expected Shape</button>
                </div>
            </div>
            ${renderFeedbackBlock()}
        </article>
    `;

    const input = document.getElementById("answer-input");
    const hintSlot = document.getElementById("fill-slot");

    document.getElementById("submit-answer-btn").addEventListener("click", () => {
        if (state.feedback) {
            return;
        }

        const value = input.value;
        const isCorrect = matchesFillAnswer(question, value);
        settleAnswer(isCorrect, question.explanation, question.accepted[0]);
    });

    document.getElementById("show-hint-btn").addEventListener("click", () => {
        input.value = question.accepted[0];
        hintSlot.textContent = question.accepted[0];
        input.focus();
    });

    input.addEventListener("input", () => {
        hintSlot.textContent = input.value || question.placeholder || "your answer";
    });

    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter" && !state.feedback) {
            event.preventDefault();
            document.getElementById("submit-answer-btn").click();
        }
    });

    input.focus();
}

function renderArrangeQuestion(question, lesson) {
    const availableLines = question.bank.filter((line) => !state.currentArrangement.includes(line));

    elements.board.innerHTML = `
        <article class="question-card">
            <div class="question-head">
                <div>
                    <p class="eyebrow">${lesson.title}</p>
                    <h2>${escapeHtml(question.prompt)}</h2>
                </div>
                <span class="question-tag">Build Code</span>
            </div>
            ${renderTaskMascotCue()}

            <div>
                <p class="small-copy">Tap lines from the bank to assemble the answer.</p>
                <div class="arrange-bank">
                    ${availableLines
                        .map(
                            (line, index) => `
                                <button
                                    class="line-chip"
                                    type="button"
                                    data-bank-index="${index}"
                                    ${state.feedback ? "disabled" : ""}
                                >${escapeHtml(line)}</button>
                            `,
                        )
                        .join("")}
                </div>
            </div>

            <div>
                <p class="small-copy">Your answer</p>
                <div class="assembled-stack">
                    ${
                        state.currentArrangement.length
                            ? state.currentArrangement
                                  .map(
                                      (line, index) => `
                                          <button
                                              class="line-chip"
                                              type="button"
                                              data-remove-index="${index}"
                                              ${state.feedback ? "disabled" : ""}
                                          >${escapeHtml(line)}</button>
                                      `,
                                  )
                                  .join("")
                            : '<div class="line-chip">Nothing placed yet.</div>'
                    }
                </div>
            </div>

            <div class="answer-actions">
                <button class="primary-btn" id="submit-arrange-btn" type="button" ${state.feedback ? "disabled" : ""}>Check Order</button>
                <button class="secondary-btn" id="clear-arrange-btn" type="button" ${state.feedback ? "disabled" : ""}>Clear</button>
            </div>
            ${renderFeedbackBlock()}
        </article>
    `;

    elements.board.querySelectorAll("[data-bank-index]").forEach((button) => {
        button.addEventListener("click", () => {
            const line = availableLines[Number(button.dataset.bankIndex)];
            state.currentArrangement.push(line);
            renderQuestion();
        });
    });

    elements.board.querySelectorAll("[data-remove-index]").forEach((button) => {
        button.addEventListener("click", () => {
            state.currentArrangement.splice(Number(button.dataset.removeIndex), 1);
            renderQuestion();
        });
    });

    document.getElementById("clear-arrange-btn").addEventListener("click", () => {
        state.currentArrangement = [];
        renderQuestion();
    });

    document.getElementById("submit-arrange-btn").addEventListener("click", () => {
        if (state.feedback) {
            return;
        }

        const isCorrect =
            state.currentArrangement.length === question.solution.length &&
            state.currentArrangement.every((line, index) => line === question.solution[index]);

        settleAnswer(isCorrect, question.explanation, question.solution.join("\n"));
    });
}

function renderFeedbackBlock() {
    if (!state.feedback) {
        return "";
    }

    const reactionTone = getMascotReactionTone();
    const feedbackTitle = state.feedback.isCorrect ? (reactionTone === "proud" ? "Excellent" : "Correct") : "Not quite";

    return `
        <div class="feedback-box ${state.feedback.isCorrect ? "is-correct" : "is-wrong"} ${reactionTone === "proud" ? "is-proud" : ""}">
            <div class="feedback-head">
                <div>
                    <div class="feedback-title">${feedbackTitle}</div>
                    <p>${escapeHtml(state.feedback.explanation)}</p>
                </div>
                <span class="result-badge">${state.feedback.isCorrect ? `+${state.feedback.xpEarned} XP` : "Heart -1"}</span>
            </div>
            <p class="muted">Expected shape</p>
            <pre class="feedback-answer">${escapeHtml(state.feedback.correctAnswer)}</pre>
            <div class="answer-actions">
                <button class="primary-btn" id="continue-btn" type="button">
                    ${isLastQuestion() ? "Finish Lesson" : "Continue"}
                </button>
            </div>
        </div>
    `;
}

function renderQuestion() {
    const lesson = getActiveLesson();
    const question = getCurrentQuestion();

    if (!question) {
        finishLesson();
        return;
    }

    if (question.type === "choice") {
        renderChoiceQuestion(question, lesson);
    } else if (question.type === "fill") {
        renderFillQuestion(question, lesson);
    } else {
        renderArrangeQuestion(question, lesson);
    }

    const continueButton = document.getElementById("continue-btn");
    if (continueButton) {
        continueButton.addEventListener("click", advanceQuestion);
    }
}

function startLesson(lessonId) {
    state.selectedLessonId = lessonId;
    state.activeLessonId = lessonId;
    state.phase = "lesson";
    state.profileNotice = "";
    activateNav("dashboard");
    state.questionIndex = 0;
    state.hearts = 5;
    state.lessonXp = 0;
    state.combo = 0;
    state.answers = [];
    state.currentArrangement = [];
    state.feedback = null;
    render();
}

function settleAnswer(isCorrect, explanation, correctAnswer) {
    const xpEarned = isCorrect ? 12 + (state.combo >= 2 ? 3 : 0) : 0;

    if (isCorrect) {
        state.combo += 1;
        state.lessonXp += xpEarned;
        profile.bestCombo = Math.max(profile.bestCombo, state.combo);
        saveProfile();
    } else {
        state.hearts -= 1;
        state.combo = 0;
    }

    state.feedback = {
        isCorrect,
        explanation,
        correctAnswer,
        xpEarned,
    };

    state.answers.push({
        questionIndex: state.questionIndex,
        isCorrect,
    });

    if (state.hearts <= 0) {
        state.phase = "failed";
        render();
        return;
    }

    render();
}

function isLastQuestion() {
    const lesson = getActiveLesson();
    return state.questionIndex >= lesson.questions.length - 1;
}

function advanceQuestion() {
    if (state.phase !== "lesson") {
        return;
    }

    if (isLastQuestion()) {
        finishLesson();
        return;
    }

    state.questionIndex += 1;
    state.feedback = null;
    state.currentArrangement = [];
    render();
}

function finishLesson() {
    const lesson = getActiveLesson();
    const nextLesson = getNextLesson(lesson.id);
    const clearBonus = 20;
    const correctCount = state.answers.filter((answer) => answer.isCorrect).length;
    const totalXpAward = state.lessonXp + clearBonus;

    profile.totalXp += totalXpAward;

    const grade = getLessonGrade(state.hearts);
    const previous = profile.lessonScores[lesson.id];
    if (!previous || totalXpAward >= previous.xp) {
        profile.lessonScores[lesson.id] = {
            xp: totalXpAward,
            grade,
            heartsLeft: state.hearts,
            correctCount,
        };
    }

    if (nextLesson && !profile.unlockedLessons.includes(nextLesson.id)) {
        profile.unlockedLessons.push(nextLesson.id);
    }

    saveProfile();

    state.phase = "complete";
    state.feedback = null;
    state.selectedLessonId = nextLesson ? nextLesson.id : lesson.id;
    render();
}

function renderComplete() {
    const lesson = getActiveLesson();
    const totalQuestions = lesson.questions.length;
    const correctCount = state.answers.filter((answer) => answer.isCorrect).length;
    const clearBonus = 20;
    const totalXpAward = state.lessonXp + clearBonus;
    const nextLesson = getNextLesson(lesson.id);
    const grade = getLessonGrade(state.hearts);

    elements.board.innerHTML = `
        <article class="result-card">
            <div class="result-head">
                <div>
                    <p class="eyebrow">Lesson Cleared</p>
                    <h2>${lesson.title}</h2>
                    <p class="question-prompt">You cleared the run with hands-on Lua drills and locked in the core pattern.</p>
                </div>
                <span class="result-badge">Rank ${grade}</span>
            </div>
            ${renderTaskMascotCue()}

            <div class="result-stats">
                <div class="result-stat">
                    <span>Correct Answers</span>
                    <strong>${correctCount}/${totalQuestions}</strong>
                </div>
                <div class="result-stat">
                    <span>XP Gained</span>
                    <strong>${totalXpAward}</strong>
                </div>
                <div class="result-stat">
                    <span>Hearts Left</span>
                    <strong>${state.hearts}</strong>
                </div>
            </div>

            <p class="result-note">
                ${nextLesson ? `Next unlocked: ${nextLesson.title}.` : "You cleared the full foundation path. Replay for a cleaner rank or add more lessons next."}
            </p>

            <div class="answer-actions">
                <button class="primary-btn" id="next-lesson-btn" type="button">${nextLesson ? `Open ${nextLesson.title}` : "Replay Lesson"}</button>
                <button class="secondary-btn" id="retry-lesson-btn" type="button">Replay ${lesson.title}</button>
            </div>
        </article>
    `;

    document.getElementById("next-lesson-btn").addEventListener("click", () => {
        if (nextLesson) {
            state.phase = "overview";
            state.activeLessonId = null;
            state.selectedLessonId = nextLesson.id;
            render();
            return;
        }

        startLesson(lesson.id);
    });

    document.getElementById("retry-lesson-btn").addEventListener("click", () => {
        startLesson(lesson.id);
    });
}

function renderFailed() {
    const lesson = getActiveLesson();
    const lastFeedback = state.feedback;

    elements.board.innerHTML = `
        <article class="result-card">
            <div class="result-head">
                <div>
                    <p class="eyebrow">Run Ended</p>
                    <h2>${lesson.title}</h2>
                    <p class="question-prompt">You ran out of hearts on this attempt. The good news is you now know exactly which pattern to rehearse.</p>
                </div>
                <span class="result-badge">Retry</span>
            </div>
            ${renderTaskMascotCue()}

            <div class="feedback-box is-wrong">
                <div class="feedback-head">
                    <div>
                        <div class="feedback-title">Last correction</div>
                        <p>${lastFeedback ? escapeHtml(lastFeedback.explanation) : "Review the lesson and try again."}</p>
                    </div>
                    <span class="result-badge">0 hearts</span>
                </div>
                <p class="muted">Expected shape</p>
                <pre class="feedback-answer">${lastFeedback ? escapeHtml(lastFeedback.correctAnswer) : "Focus on the syntax pattern and try again."}</pre>
            </div>

            <div class="answer-actions">
                <button class="primary-btn" id="retry-run-btn" type="button">Retry Lesson</button>
                <button class="secondary-btn" id="back-to-map-btn" type="button">Back to Course Map</button>
            </div>
        </article>
    `;

    document.getElementById("retry-run-btn").addEventListener("click", () => {
        startLesson(lesson.id);
    });

    document.getElementById("back-to-map-btn").addEventListener("click", () => {
        state.phase = "overview";
        state.activeLessonId = null;
        state.feedback = null;
        state.currentArrangement = [];
        render();
    });
}

function resetProgress(options = {}) {
    const keepPhase = Boolean(options.keepPhase);
    const identity = getProfileIdentity(profile);
    profile = createDefaultProfile(identity);
    saveProfile();
    state.selectedLessonId = lessons[0].id;
    state.phase = keepPhase ? "profile" : "overview";
    activateNav(keepPhase ? "profile" : "dashboard");
    resetRunState();
    if (options.notice) {
        state.profileNotice = options.notice;
    } else if (!keepPhase) {
        state.profileNotice = "";
    }
    render();
}

function matchesFillAnswer(question, value) {
    const normalize =
        question.comparison === "compact"
            ? (input) => input.replace(/\s+/g, "").trim().toLowerCase()
            : (input) => input.trim().toLowerCase();

    return question.accepted.some((accepted) => normalize(accepted) === normalize(value));
}

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

function render() {
    try {
        syncSelectedLessonState();

        const lessonPathKey = getLessonPathRenderKey();
        if (lessonPathKey !== lastLessonPathKey) {
            renderLessonPath();
            lastLessonPathKey = lessonPathKey;
        }

        syncUiState();
        updateHeader();

        if (state.phase === "overview") {
            renderOverview();
        } else if (state.phase === "lesson") {
            renderQuestion();
        } else if (state.phase === "complete") {
            renderComplete();
        } else if (state.phase === "failed") {
            renderFailed();
        } else if (state.phase === "profile") {
            renderProfilePage();
        }

        updateUserCard();
        syncRailState();
        renderMascot();
        renderActivityFeed();
        renderAuthScreen();
    } catch (error) {
        renderRecoveryOverlay(error);
    }
}

applyTheme(loadTheme());

if (elements.themeToggle) {
    elements.themeToggle.addEventListener("click", toggleTheme);
}

if (elements.openProfileBtn) {
    elements.openProfileBtn.addEventListener("click", openProfilePage);
}

if (elements.openProfileNav) {
    elements.openProfileNav.addEventListener("click", openProfilePage);
}

if (elements.logoutBtn) {
    elements.logoutBtn.addEventListener("click", () => {
        clearSession();
        state.authMode = authStore.accounts.length ? "login" : "signup";
        syncAccountSessionState();
        render();
    });
}

if (elements.navDashboard) {
    elements.navDashboard.addEventListener("click", (event) => {
        event.preventDefault();
        openOverview(state.selectedLessonId, "dashboard");
        document.getElementById("stage-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
}

if (elements.navLessons) {
    elements.navLessons.addEventListener("click", (event) => {
        event.preventDefault();
        openOverview(state.selectedLessonId, "lessons");
        document.getElementById("lesson-path")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
}

if (elements.navActivity) {
    elements.navActivity.addEventListener("click", (event) => {
        event.preventDefault();
        openOverview(state.selectedLessonId, "activity");
        document.getElementById("activity-feed")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
}

render();
