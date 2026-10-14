module.exports = [
(()=>{"use strict";return[
"[project]/src/components/ProjectDetail.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectDetail",
    ()=>ProjectDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.mjs [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectMedia$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProjectMedia.tsx [app-ssr] (ecmascript)");
;
;
;
function ProjectDetail({ project, as: Heading = 'h1', headingId }) {
    const twoColumns = project.galleryColumns === 2;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-6 md:sticky md:top-10 md:self-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "eyebrow text-muted",
                        children: [
                            "Selected work / ",
                            project.number
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectDetail.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Heading, {
                        id: headingId,
                        className: "text-4xl leading-tight font-medium md:text-5xl",
                        children: project.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectDetail.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                        className: "grid grid-cols-2 gap-4 border-y border-line py-4 eyebrow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        className: "text-muted",
                                        children: "Discipline"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectDetail.tsx",
                                        lineNumber: 31,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        children: project.category
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectDetail.tsx",
                                        lineNumber: 32,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProjectDetail.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        className: "text-muted",
                                        children: "Year"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectDetail.tsx",
                                        lineNumber: 35,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        children: project.year
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectDetail.tsx",
                                        lineNumber: 36,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProjectDetail.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectDetail.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-base leading-relaxed md:text-lg",
                        children: project.description
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectDetail.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    project.url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: project.url,
                        target: "_blank",
                        rel: "noreferrer",
                        className: "inline-flex items-center gap-1 self-start eyebrow text-[11px] text-klein hover:underline hover:underline-offset-4",
                        children: [
                            "Visit site",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                "aria-hidden": "true",
                                className: "size-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectDetail.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectDetail.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProjectDetail.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: twoColumns ? 'gap-4 sm:columns-2' : undefined,
                children: project.gallery.map((media, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectMedia$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProjectMedia"], {
                        media: media,
                        priority: index === 0,
                        sizes: twoColumns ? '(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw' : '(min-width: 768px) 66vw, 100vw',
                        className: "mb-4 h-auto w-full reveal break-inside-avoid bg-wash"
                    }, media.src, false, {
                        fileName: "[project]/src/components/ProjectDetail.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectDetail.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProjectDetail.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ProjectMedia.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectMedia",
    ()=>ProjectMedia
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-ssr] (ecmascript) <export Image as default>");
;
;
function ProjectMedia({ media, sizes, priority, className }) {
    if (media.kind === 'video') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
            src: media.src,
            "aria-label": media.alt,
            autoPlay: true,
            muted: true,
            loop: true,
            playsInline: true,
            className: className
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectMedia.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
        src: media.src,
        alt: media.alt,
        width: media.width,
        height: media.height,
        sizes: sizes,
        preload: priority,
        fetchPriority: priority ? 'high' : undefined,
        placeholder: media.blur ? 'blur' : 'empty',
        blurDataURL: media.blur,
        className: className
    }, void 0, false, {
        fileName: "[project]/src/components/ProjectMedia.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/home/Contact.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Contact",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.mjs [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/site.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$emailService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/emailService.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
async function submit(_, form) {
    const fields = {
        name: String(form.get('name')),
        lastName: String(form.get('lastName')),
        email: String(form.get('email')),
        message: String(form.get('message'))
    };
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$emailService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendEmail"])(fields);
        return {
            status: 'ok'
        };
    } catch (err) {
        console.error('Contact form:', err);
        // React resets the form after the action; hand the values back as
        // defaultValue so a failed send doesn't wipe what the visitor wrote.
        return {
            status: 'error',
            fields
        };
    }
}
const field = 'w-full border-b border-line bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-muted focus:border-klein md:text-xl';
function Contact() {
    const [state, action, pending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActionState"])(submit, {
        status: 'idle'
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        "aria-labelledby": "contact-heading",
        className: "grid gap-10 pt-11 pb-14 md:grid-cols-[1fr_1.07fr] md:gap-10 md:pt-16 lg:gap-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "reveal",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "eyebrow",
                        children: "Have something in mind?"
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/Contact.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        id: "contact-heading",
                        className: "mt-5 text-[clamp(3.25rem,7vw,6.25rem)] leading-[1.05]",
                        children: "Let's make it."
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/Contact.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/Contact.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            state.status === 'ok' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "status",
                className: "animate-rise self-end text-xl md:text-2xl",
                children: "Thanks — your message is on its way. We'll get back to you soon."
            }, void 0, false, {
                fileName: "[project]/src/components/home/Contact.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                action: action,
                className: "flex flex-col gap-4 self-end",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 sm:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sr-only",
                                        children: "Name"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/Contact.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        name: "name",
                                        defaultValue: state.fields?.name,
                                        required: true,
                                        autoComplete: "given-name",
                                        placeholder: "Name",
                                        className: field
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/Contact.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/Contact.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sr-only",
                                        children: "Surname"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/Contact.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        name: "lastName",
                                        defaultValue: state.fields?.lastName,
                                        required: true,
                                        autoComplete: "family-name",
                                        placeholder: "Surname",
                                        className: field
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/Contact.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/Contact.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/Contact.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Email"
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/Contact.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "email",
                                defaultValue: state.fields?.email,
                                type: "email",
                                required: true,
                                autoComplete: "email",
                                placeholder: "Email",
                                className: field
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/Contact.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/Contact.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Message"
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/Contact.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                name: "message",
                                defaultValue: state.fields?.message,
                                required: true,
                                rows: 4,
                                placeholder: "What's on your mind?",
                                className: `${field} resize-none`
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/Contact.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/Contact.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex items-center justify-between gap-4",
                        children: [
                            state.status === 'error' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                role: "alert",
                                className: "max-w-xs animate-fade eyebrow text-red-700",
                                children: [
                                    "Something went wrong sending your message. Try again or write to us on",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SITE"].instagram,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "underline underline-offset-2",
                                        children: "Instagram"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/Contact.tsx",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, this),
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/Contact.tsx",
                                lineNumber: 107,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/src/components/home/Contact.tsx",
                                lineNumber: 124,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: pending,
                                className: "group inline-flex cursor-pointer items-center gap-2 rounded-full bg-klein px-6 py-3 font-mono text-xs text-white uppercase transition-[opacity,scale] duration-150 ease-out active:scale-[0.97] disabled:cursor-wait disabled:opacity-60",
                                children: [
                                    pending ? 'Sending…' : 'Send',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                        "aria-hidden": "true",
                                        className: "size-4 transition-[rotate] duration-200 ease-out group-hover:rotate-45"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/Contact.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/Contact.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/Contact.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/Contact.tsx",
                lineNumber: 56,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/home/Contact.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/home/ProjectExplorer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectExplorer",
    ()=>ProjectExplorer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down.mjs [app-ssr] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.mjs [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/projects.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectMedia$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProjectMedia.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ProjectModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/ProjectModal.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const FILTERS = [
    'All',
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CATEGORIES"]
];
/** Let cmd/ctrl/shift/middle clicks open the real project page */ const isPlainClick = (e)=>e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;
function ProjectExplorer({ projects }) {
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('All');
    const [activeSlug, setActiveSlug] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(projects[0]?.slug);
    // Only the active cover loads up front; the rest mount (and start loading)
    // once the visitor reaches for the list, so hovering then crossfades instantly.
    const [warm, setWarm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // The list staggers in on first paint; after a filter change only the
    // newly mounted items animate, and without the intro delay.
    const [filtered, setFiltered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const visible = projects.filter((p)=>filter === 'All' || p.category === filter);
    const active = visible.find((p)=>p.slug === activeSlug) ?? visible[0];
    // Open the quick view and reflect it in the URL (/work/slug/), so the
    // address is shareable and back closes it. A reload renders the full page.
    const openModal = (e, project)=>{
        if (!isPlainClick(e)) return;
        e.preventDefault();
        window.history.pushState(null, '', `/work/${project.slug}/`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        id: "work-heading",
                        className: "eyebrow",
                        children: [
                            "Selected work",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-muted",
                                children: [
                                    "[01—",
                                    String(projects.length).padStart(2, '0'),
                                    "]"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/ProjectExplorer.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/ProjectExplorer.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        role: "group",
                        "aria-label": "Filter projects",
                        className: "flex gap-5 md:gap-7",
                        children: FILTERS.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "aria-pressed": filter === item,
                                onClick: ()=>{
                                    setFilter(item);
                                    setFiltered(true);
                                },
                                className: "inline-flex cursor-pointer items-center gap-1.5 eyebrow text-[11px] transition-[color,scale] duration-150 ease-out hover:text-klein active:scale-[0.97] aria-pressed:text-klein",
                                children: [
                                    item,
                                    filter === item && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        className: "size-1.5 animate-fade rounded-full bg-klein [animation-duration:200ms]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/ProjectExplorer.tsx",
                                        lineNumber: 67,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item, true, {
                                fileName: "[project]/src/components/home/ProjectExplorer.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/ProjectExplorer.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/ProjectExplorer.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-8 pb-16 md:grid-cols-[1fr_1.07fr] md:gap-10 lg:gap-16 lg:pb-20",
                children: [
                    active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/work/${active.slug}`,
                                onClick: (e)=>openModal(e, active),
                                className: "group relative block aspect-[4/5] overflow-hidden bg-wash transition-[scale] duration-150 ease-out active:scale-[0.99] md:aspect-auto md:h-[clamp(28rem,40vw,42rem)]",
                                children: [
                                    projects.filter((p)=>warm || p.slug === active.slug).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectMedia$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProjectMedia"], {
                                            media: p.cover,
                                            priority: p === projects[0],
                                            sizes: "(min-width: 768px) 48vw, 100vw",
                                            className: `absolute inset-0 size-full object-cover transition-opacity duration-300 ${p.slug === active.slug ? 'opacity-100' : 'opacity-0'}`
                                        }, p.slug, false, {
                                            fileName: "[project]/src/components/home/ProjectExplorer.tsx",
                                            lineNumber: 88,
                                            columnNumber: 19
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute right-5 bottom-5 grid size-11 place-items-center rounded-full bg-paper transition-[rotate] duration-200 ease-out group-hover:rotate-45",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                "aria-hidden": "true",
                                                className: "size-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/ProjectExplorer.tsx",
                                                lineNumber: 99,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sr-only",
                                                children: [
                                                    "View ",
                                                    active.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/home/ProjectExplorer.tsx",
                                                lineNumber: 100,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home/ProjectExplorer.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/ProjectExplorer.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                className: "mt-3.5 flex justify-between gap-4 eyebrow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: active.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/ProjectExplorer.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-muted",
                                        children: active.category
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/ProjectExplorer.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/ProjectExplorer.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/ProjectExplorer.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                onPointerEnter: ()=>setWarm(true),
                                onFocus: ()=>setWarm(true),
                                children: visible.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "animate-rise border-b border-line last:border-0",
                                        style: {
                                            animationDelay: `${filtered ? i * 30 : 320 + i * 40}ms`
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/work/${p.slug}`,
                                            "aria-current": p.slug === active?.slug ? 'true' : undefined,
                                            onMouseEnter: ()=>setActiveSlug(p.slug),
                                            onFocus: ()=>setActiveSlug(p.slug),
                                            onClick: (e)=>openModal(e, p),
                                            className: "group grid min-h-14 grid-cols-[2rem_minmax(0,1fr)_1.5rem] items-center gap-3 py-3 transition-colors hover:text-klein aria-[current]:text-klein xl:min-h-17",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-[10px] text-muted",
                                                    children: p.number
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/ProjectExplorer.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-2xl leading-tight md:text-[27px] xl:text-[34px]",
                                                    children: p.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/ProjectExplorer.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                    "aria-hidden": "true",
                                                    className: "-translate-x-1 translate-y-1 opacity-0 transition-[opacity,translate] duration-200 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-aria-[current]:translate-x-0 group-aria-[current]:translate-y-0 group-aria-[current]:opacity-100"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/ProjectExplorer.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/home/ProjectExplorer.tsx",
                                            lineNumber: 123,
                                            columnNumber: 17
                                        }, this)
                                    }, p.slug, false, {
                                        fileName: "[project]/src/components/home/ProjectExplorer.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/ProjectExplorer.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-auto flex justify-between pt-6 eyebrow text-muted",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "A selection of things we've made."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/ProjectExplorer.tsx",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                                        "aria-hidden": "true",
                                        className: "size-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/ProjectExplorer.tsx",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/ProjectExplorer.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/ProjectExplorer.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/ProjectExplorer.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ProjectModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProjectModal"], {
                projects: projects
            }, void 0, false, {
                fileName: "[project]/src/components/home/ProjectExplorer.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/home/ProjectExplorer.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/home/ProjectModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectModal",
    ()=>ProjectModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectDetail$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProjectDetail.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function ProjectModal({ projects }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const dialogRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const slug = /^\/work\/([^/]+)/.exec(pathname)?.[1];
    const project = projects.find((p)=>p.slug === slug);
    // Keep rendering the last project while the dialog animates out,
    // otherwise the exit transition would show an empty box.
    const [shown, setShown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(project);
    if (project && project !== shown) setShown(project);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const dialog = dialogRef.current;
        if (!dialog) return;
        if (project && !dialog.open) {
            dialog.scrollTop = 0;
            dialog.showModal();
        }
        if (!project && dialog.open) dialog.close();
    }, [
        project
    ]);
    const close = ()=>router.back();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dialog", {
        ref: dialogRef,
        "aria-labelledby": shown ? `project-${shown.slug}` : undefined,
        onCancel: (e)=>{
            e.preventDefault();
            close();
        },
        onClick: (e)=>{
            if (e.target === e.currentTarget) close();
        },
        className: "project-dialog m-0 size-full max-h-none max-w-none bg-paper p-0 text-ink md:m-auto md:h-[90dvh] md:w-[min(1400px,92vw)]",
        children: shown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-page py-6 md:py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: `/work/${shown.slug}`,
                            className: "eyebrow text-[11px] text-muted hover:text-klein",
                            children: "Open project page"
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/ProjectModal.tsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: close,
                            className: "grid size-10 cursor-pointer place-items-center rounded-full border border-line transition-[color,border-color,scale] duration-150 ease-out hover:border-klein hover:text-klein active:scale-[0.95]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    "aria-hidden": "true",
                                    className: "size-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/ProjectModal.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sr-only",
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/ProjectModal.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/home/ProjectModal.tsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/home/ProjectModal.tsx",
                    lineNumber: 55,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectDetail$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProjectDetail"], {
                    project: shown,
                    as: "h2",
                    headingId: `project-${shown.slug}`
                }, void 0, false, {
                    fileName: "[project]/src/components/home/ProjectModal.tsx",
                    lineNumber: 71,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/ProjectModal.tsx",
            lineNumber: 54,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/home/ProjectModal.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/config/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// EmailJS keys are public by design (client-side SDK); they're inlined at build time.
__turbopack_context__.s([
    "EMAIL_CONFIG",
    ()=>EMAIL_CONFIG
]);
const EMAIL_CONFIG = {
    SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '',
    TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '',
    PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ''
};
}),
"[project]/src/config/site.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SITE",
    ()=>SITE
]);
const SITE = {
    name: 'Grain Studio',
    url: 'https://wearegrainstudio.com',
    title: 'Grain Studio — Digital experiences & photography',
    description: 'Independent creative studio by Héctor and Clara. Web design & development, brand strategy, photography and UGC content — grain by grain, with rhythm & precision.',
    instagram: 'https://www.instagram.com/wearegrainstudio/',
    themeColor: '#002fa7'
};
}),
"[project]/src/lib/image-loader.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>imageLoader
]);
function imageLoader({ src, width }) {
    if (!src.startsWith('/images/')) return src;
    const base = src.slice('/images/'.length).replace(/\.[^.]+$/, '');
    return `/img/${base}-${width}.avif`;
}
}),
"[project]/src/lib/projects.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CATEGORIES",
    ()=>CATEGORIES,
    "getProject",
    ()=>getProject,
    "projects",
    ()=>projects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$image$2d$manifest$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/image-manifest.json.[json].cjs [app-ssr] (ecmascript)");
;
const CATEGORIES = [
    'Web development',
    'Photography'
];
const sizes = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$image$2d$manifest$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
const media = (name, src, index)=>({
        src,
        alt: index === undefined ? name : `${name}, image ${index + 1}`,
        kind: /\.(webm|mp4)$/.test(src) ? 'video' : 'image',
        ...sizes[src]
    });
const PROJECTS = [
    {
        slug: 'columbia-zentir',
        name: 'Columbia × Zentir',
        category: 'Photography',
        year: '2025',
        description: 'Photography session for Columbia x Zentir. Outdoor adventure through Chorreras de San Mamés in the Sierra de Madrid, organized by Columbia and Grupo Zentir. Capturing the energy, landscapes, and authentic moments of the trail experience.',
        galleryColumns: 2,
        cover: '/images/columbia-zentir/columbia1.webp',
        gallery: Array.from({
            length: 12
        }, (_, i)=>`/images/columbia-zentir/columbia${i + 1}.webp`)
    },
    {
        slug: 'circa-waste',
        name: 'Circa Waste',
        category: 'Web development',
        year: '2025',
        // TODO: currently a copy of Orna Group's description — needs its own copy.
        description: "Full development of Orna Group's UK website, showcasing their circular process that transforms Christmas trees into eco-friendly products. Modern design with smooth animations and an intuitive user experience.",
        url: 'https://www.circawaste.com/',
        galleryColumns: 1,
        cover: '/images/circa-waste/circa5.webp',
        gallery: [
            3,
            1,
            2,
            6,
            7
        ].map((n)=>`/images/circa-waste/circa${n}.webp`)
    },
    {
        slug: 'tree-brothers',
        name: 'Tree Brothers',
        category: 'Web development',
        year: '2025',
        description: 'Developed the digital platform for Tree Brothers, highlighting their eco-friendly Christmas tree collection and recycling services. Focused on a warm, approachable design and a seamless customer journey.',
        url: 'https://www.treebrothersltd.com/',
        galleryColumns: 1,
        cover: '/images/tree-brothers/tree.webp',
        gallery: [
            '/images/tree-brothers/tree1.webp',
            '/videos/treebrothers.webm',
            '/images/tree-brothers/treeshop.webp',
            '/images/tree-brothers/tree.webp',
            '/images/tree-brothers/ornacirca.webp'
        ]
    },
    {
        slug: 'orna-group',
        name: 'Orna Group',
        category: 'Web development',
        year: '2025',
        description: "Full development of Orna Group's UK website, showcasing their circular process that transforms Christmas trees into eco-friendly products. Modern design with smooth animations and an intuitive user experience.",
        url: 'https://www.ornagroup.com/',
        galleryColumns: 1,
        cover: '/images/orna-group/orna_phone.webp',
        gallery: [
            'orna2',
            'orna_phone',
            'orna',
            'orna1'
        ].map((n)=>`/images/orna-group/${n}.webp`)
    },
    {
        slug: 'scandicgo',
        name: 'ScandicGo',
        category: 'Photography',
        year: '2025',
        description: "Content photography for Scandic Go Stockholm, reflecting the hotel's personality and the welcoming, contemporary style of the Scandic brand.",
        galleryColumns: 1,
        cover: '/images/scandic-go/scandic.webp',
        gallery: [
            1,
            2,
            3,
            4,
            5
        ].map((n)=>`/images/scandic-go/scandic${n}.webp`)
    },
    {
        slug: 'duplat',
        name: 'Duplat',
        category: 'Photography',
        year: '2025',
        description: 'Photography session for Duplat, capturing the artisanal process and exquisite details of their handcrafted new ceramic pieces. Emphasized the textures, colors, and unique characteristics that define Duplat’s brand identity.',
        galleryColumns: 2,
        cover: '/images/duplat/duplat1.webp',
        gallery: [
            1,
            2,
            5,
            7,
            4,
            3,
            6,
            8
        ].map((n)=>`/images/duplat/duplat${n}.webp`)
    },
    {
        slug: 'grosso-napoletano',
        name: 'Grosso Napoletano',
        category: 'Photography',
        year: '2025',
        description: "Event photography for Grosso Napoletano's unveiling of a limited-edition pizza. The session highlighted the craftsmanship, lively ambiance, and brand personality through candid and detail-rich shots.",
        galleryColumns: 1,
        cover: '/images/grosso-napoletano/grosso.webp',
        gallery: [
            1,
            2,
            3,
            4
        ].map((n)=>`/images/grosso-napoletano/grosso${n}.webp`)
    },
    {
        slug: 'appetit-candle-lab',
        name: 'Appetit Candle Lab',
        category: 'Photography',
        year: '2025',
        description: 'Photography session for Appetit Candle Lab, capturing the essence of their handcrafted candles. Focused on highlighting the textures, colors, and ambiance created by the candles to enhance brand storytelling.',
        galleryColumns: 2,
        cover: '/images/appetit/appetit.webp',
        gallery: [
            '',
            6,
            3,
            2,
            4,
            5,
            7,
            8,
            9,
            10
        ].map((n)=>`/images/appetit/appetit${n}.webp`)
    },
    {
        slug: 'donde-alex',
        name: 'Donde Álex',
        category: 'Photography',
        year: '2025',
        description: "Lifestyle photoshoot for a men's barbershop, capturing the textures, precision, and character of the space to build engaging social media content.",
        galleryColumns: 1,
        cover: '/images/donde-alex/alex.webp',
        gallery: [
            1,
            2,
            3,
            4
        ].map((n)=>`/images/donde-alex/alex${n}.webp`)
    }
];
const projects = PROJECTS.map((p, i)=>({
        ...p,
        number: String(i + 1).padStart(2, '0'),
        cover: media(p.name, p.cover),
        gallery: p.gallery.map((src, index)=>media(p.name, src, index))
    }));
function getProject(slug) {
    return projects.find((p)=>p.slug === slug);
}
}),
"[project]/src/services/emailService.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendEmail",
    ()=>sendEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/constants.ts [app-ssr] (ecmascript)");
;
async function sendEmail(data) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMAIL_CONFIG"].SERVICE_ID || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMAIL_CONFIG"].TEMPLATE_ID || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMAIL_CONFIG"].PUBLIC_KEY) {
        throw new Error('EmailJS configuration is missing');
    }
    const payload = {
        service_id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMAIL_CONFIG"].SERVICE_ID,
        template_id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMAIL_CONFIG"].TEMPLATE_ID,
        user_id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMAIL_CONFIG"].PUBLIC_KEY,
        template_params: data
    };
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    if (!response.ok) {
        const text = await response.text();
        throw new Error(text || 'Failed to send email');
    }
}
}),
]})(),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[project]/src/lib/image-manifest.json.[json].cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = JSON.parse("{\"/images/appetit/appetit.webp\":{\"width\":5152,\"height\":7728,\"blur\":\"data:image/webp;base64,UklGRmIAAABXRUJQVlA4IFYAAADQAwCdASoQABgAPu1Ct1apoqakGAEwHYlAACPJ2xqmeHM6fwOyIgAA/ucZF7ks3mFP4W9X78wCpGzvM0yXRdUW/AoScDPtf6yl7hOatWcueW6tQKQAAA==\"},\"/images/appetit/appetit10.webp\":{\"width\":5152,\"height\":7728,\"blur\":\"data:image/webp;base64,UklGRrIAAABXRUJQVlA4IKYAAABwBACdASoQABgAPu1iqU2ppaOiMAgBMB2JQBYja5Kw2VlEdN49jjF9MOq5AADgJEGsyaPV0IGpWPqM5zF4U5ZxW4hXaXJ+RGn3b2YY0Ef47vbz5RcO9PY/HOJ2I5eocV6VJsMk0+0qHjtaGhYowOCwh+uVqE9II+BYrjqBuYnAltcrx7nSY7tUe67zQK+/CU5pzXbyY96T59Z6AlCP0n+5wsnZQAAA\"},\"/images/appetit/appetit2.webp\":{\"width\":3456,\"height\":4608,\"blur\":\"data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAABQBACdASoQABUAPu1iqU2ppaOiMAgBMB2JQBOmUABYlTp8dbC2Is0pQLoAANoSpyneJgjf8SmJNw+ODa4TSDCGk22fj3BVp3+CzG/zE5+6QRtX7k+wlw59uEMz0x6G2I3iheuUUnTDLPo4NBxwkevh3AAAAA==\"},\"/images/appetit/appetit3.webp\":{\"width\":4184,\"height\":6276,\"blur\":\"data:image/webp;base64,UklGRrQAAABXRUJQVlA4IKgAAABQBACdASoQABgAPu1iqU2ppaOiMAgBMB2JQBOmUAS3YYHh0hNFj9bcrodgAP7TPsfkV73XSW59gODfJ/+hc2CW+KFw0VIzCkZDOUIjWLoH5d2ES8MOsPVVNkCy0rT3RL9ACKXaJN4/nixp3y0ZNRT+MkVo374+eSF+Skgp3Sh5fPbHvbANgLIzEHVxwzbZGZ/7629TfrAiFEqrZwnL3JVpj8RnAAYzwAA=\"},\"/images/appetit/appetit4.webp\":{\"width\":5152,\"height\":7728,\"blur\":\"data:image/webp;base64,UklGRpgAAABXRUJQVlA4IIwAAABwBACdASoQABgAPu1iqU2ppaOiMAgBMB2JYgCdMoRwACPV9bp47clrbM/pgAD+3r85rweyqmO+DKQPP+6Es/9fcHFvUISJBzmC7KmwOzyFhNgqyxFcaLP5TDr7II36PkhIM1UyWLrYKTEN96xX0XcHiZLXpHPo3RNo9snMmo0ICSQRilNfgUqPpAAAAA==\"},\"/images/appetit/appetit5.webp\":{\"width\":5152,\"height\":7728,\"blur\":\"data:image/webp;base64,UklGRpgAAABXRUJQVlA4IIwAAAAQBACdASoQABgAPu1iqU2ppaOiMAgBMB2JZQAIEC6QF1/hkrh2rdoAQAD+w/D8CgULm8i/kcqK4DW9wE/M2cGFLaGp9gx1FLEweJ9EkEO7LE1xgXRz9YC9S/z51pq8yB6Z5C4d2T96BojdIDsURRwjiTrcFQ6Ez7zZdctyXwzaq+sphJk77IfxHxoAAA==\"},\"/images/appetit/appetit6.webp\":{\"width\":5152,\"height\":7728,\"blur\":\"data:image/webp;base64,UklGRrIAAABXRUJQVlA4IKYAAAAwBACdASoQABgAPu1iqU2ppaOiMAgBMB2JYgCdMoAltQ5OiXGVzWA4DYAA/qZaK8IVYcQhMBkkZ3GQgGno1WK0C7ZFPWYkcobrpdMadngG/1HsO623C+2NIc2e+uJl30e0gJQ8aXdpCucKVP/fFJk8I0N3SkHqdS3GPdVYBb4olppFTM//qt5jS1eZrtYqpouXscrD/JC2DdvauASdubYEyoxH4AAA\"},\"/images/appetit/appetit7.webp\":{\"width\":5152,\"height\":7728,\"blur\":\"data:image/webp;base64,UklGRrgAAABXRUJQVlA4IKwAAACQBACdASoQABgAPu1iqU2ppaOiMAgBMB2JaACdL1yVg6o/eQuLHmghKJAqjjAA/loMe4eZ1UKZIEIlVRQfYotUzQTjjcKyST02kzScQlgaKvWo1wiYW0jhgv/WQNd8D/dgXSeujGbKKftk9rKaLv8TK9AltJmETIwbHkTDUP72EOC9pFXJEnh0TBFZ5Q7RthP8OhgsaI6lPcfFglebY5IAttW7yuKHrCYcAAAA\"},\"/images/appetit/appetit8.webp\":{\"width\":4616,\"height\":6924,\"blur\":\"data:image/webp;base64,UklGRr4AAABXRUJQVlA4ILIAAACwBACdASoQABgAPu1iqU2ppaOiMAgBMB2JZgCdMoMYBsADhfG8FIB+iip7u9dcAP7lxvgAdZ13EKW4I3jkLaU6SlGx9JSdAgraeKV7nSeIi1/4iiZWQWldksVMB/amxhKBw5Mi7i3BIWzVWrNacpvcO91Y3WRKgo4UbwQ7RMQVgRQduQ8hGh/8ldENdGGEUY0vIUfX4ENrduq4b/eVjJigeHmxRwNySuHMiOs+IUbHFHAA\"},\"/images/appetit/appetit9.webp\":{\"width\":3456,\"height\":4608,\"blur\":\"data:image/webp;base64,UklGRooAAABXRUJQVlA4IH4AAAAQBACdASoQABUAPu1iqU2ppaOiMAgBMB2JQBWEFThgYzoXzPCZvfECIAD+8McMPvg7Y6lATuiq9PuEa5b7hv55hyNm+/lNI46l2v8OqjOq1v9Lv1a5VsacNoCEj5g3zwHroYzskYKtsd35grbetFcfdqlK6O0Ns3jQTv4AAAA=\"},\"/images/circa-waste/circa1.webp\":{\"width\":1200,\"height\":678,\"blur\":\"data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAADwAQCdASoQAAkAA4BaJaQAD5AtTfyRwAAA/vNVUaorUqP1LBTeKFkw+eb/aHsXAHpHeFczo2C05Dt/vqKv5heaVoV0ud1FOO6gmYP+YAMR8tbfx6UOKe7R3Rixn+f5c+LV0s8AAAA=\"},\"/images/circa-waste/circa2.webp\":{\"width\":1200,\"height\":675,\"blur\":\"data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAADQAQCdASoQAAkAA4BaJbACdAEe5Ld/WAD+6ABRyPzHGm9fl8sX9fsdEpczPvjgrDjzYdsEifG6rLxwLhCUrRsG5zbf09u6d6I3gg7sHelsQTlago/O5QcBwAA=\"},\"/images/circa-waste/circa3.webp\":{\"width\":1200,\"height\":675,\"blur\":\"data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAAAQAgCdASoQAAkAA4BaJbACdAEPTzKi2XsAAP7KVwqy+JGti9+CPx/NYx2wA+fA15p2jTh2CS1Kyqu6lxtBddzJtWsrohGp404VaLA61QDqouAA\"},\"/images/circa-waste/circa5.webp\":{\"width\":1200,\"height\":675,\"blur\":\"data:image/webp;base64,UklGRpIAAABXRUJQVlA4WAoAAAAQAAAADwAACAAAQUxQSBEAAAABD9D/iAgIBAjO3VuI6H8aYwBWUDggWgAAABACAJ0BKhAACQADgFolAFh2xbS1/4YPRDAA/vZAFK3BunjhnLt39XbyLqEMFGtZYFgW9mcNcKBHH7wlPGdHcaaPzBpOxcVyIyidnn0ZMD4ysD/AT68QFgAAAA==\"},\"/images/circa-waste/circa6.webp\":{\"width\":1200,\"height\":675,\"blur\":\"data:image/webp;base64,UklGRogAAABXRUJQVlA4WAoAAAAQAAAADwAACAAAQUxQSBEAAAABD9D/iAgIBAjO3VuI6H8aYwBWUDggUAAAABACAJ0BKhAACQADgFollAAPj87RzInZHgAA/vPE3MurPqcC/2Ye+JgqScR2NwNwcZss1/pm8cMdJxVam4C9KwysQby945M7QsLHSb1s4AAA\"},\"/images/circa-waste/circa7.webp\":{\"width\":1200,\"height\":336,\"blur\":\"data:image/webp;base64,UklGRnYAAABXRUJQVlA4WAoAAAAQAAAADwAAAwAAQUxQSBgAAAABH3D//4iIBUEAyZnlu9keO0T0PzvMIQJWUDggOAAAANABAJ0BKhAABAADgFolsAJ0ANrrnOgAAPO+llqHsu3uK/89NXKrfTv2ZyluOIpLL7Bakl+VdCAA\"},\"/images/columbia-zentir/columbia1.webp\":{\"width\":1280,\"height\":1920,\"blur\":\"data:image/webp;base64,UklGRpIAAABXRUJQVlA4IIYAAADwAwCdASoQABgAPu1iqU2ppaOiMAgBMB2JZgCdMoABhZQf5rw0N84AAP6/NgO95Zt8bO4tSfR+uW/6qTjIsUZudiAAfPqU0lQm1UzBFr1nGNtCFfQ3i2aWcs12TXIa77sYJIi2JIIPhQmt8pEJ+kb+9VWO5C+DfhEqB7HrUKERjcoJ7rgAAA==\"},\"/images/columbia-zentir/columbia10.webp\":{\"width\":1280,\"height\":1920,\"blur\":\"data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAADQAwCdASoQABgAPu1mqk4ppaOiMAgBMB2JZQC7ACHfR/04t1rn3qAA/tjZ5p0t//9g1pLR/9ud7nxTBCdyVfIxlB5S5bn5DfeKlVpt9SuyNRQ9na8gTe+JVBfHd4qrtwoSn/RWzKzYl4bKO9KKl1ekGkoAAA==\"},\"/images/columbia-zentir/columbia11.webp\":{\"width\":1280,\"height\":1920,\"blur\":\"data:image/webp;base64,UklGRrQAAABXRUJQVlA4IKgAAAAwBACdASoQABgAPu1iqU2ppaOiMAgBMB2JagCdMoMgg0kAsziVVuIW18AA/a/Df2/q9sgy1iXz36CswAhmy18VeJTQcSs+8vrmbdjZrd+SSxa3krm/wioec1SZttVwmLaeOtzWbXkRRG5LvY7L7Jc8icPQhWx25wPTnHSmICv6jE5cc3ty4mqqS/I0pS72nP/7I8iFj/mo1W55SgrHU/KKXWhGJ5sQAAA=\"},\"/images/columbia-zentir/columbia12.webp\":{\"width\":1280,\"height\":1920,\"blur\":\"data:image/webp;base64,UklGRpYAAABXRUJQVlA4IIoAAAAwBACdASoQABgAPu1iqU2ppaOiMAgBMB2JYwDCgywBJs4J7wJFMqXh1AAAzjGm6bf6rPpEUR5Cg7uJaEOa/auOpIlu7X3vy9Bl9gpU8dhMxPep0elkRzALuyNIWVF2afHSXxDSPWG2XO9mjIQ3upniPG4rH8mbsjULgYQemTbLfGXES9lf9FKsAAA=\"},\"/images/columbia-zentir/columbia2.webp\":{\"width\":1280,\"height\":1920,\"blur\":\"data:image/webp;base64,UklGRpQAAABXRUJQVlA4IIgAAABQBACdASoQABgALrV2u12jqampiYC0SgCdAYvrvs/NmfnJM99cFIj3jXAAAP7lpBlUbWiYkiRL6GEfTtLOCx74lYmnS1XdW/p1zuRFFfqXdHi9TYYROrlNuJbPrPorx8Tv+UU00JvhwqX3CxS23CsBeK09OoQu3oPnySRI8G0lQ3AGoFpWEAAA\"},\"/images/columbia-zentir/columbia3.webp\":{\"width\":1279,\"height\":1920,\"blur\":\"data:image/webp;base64,UklGRowAAABXRUJQVlA4IIAAAACQBACdASoQABgAPu1iqU2ppaOiMAgBMB2JYwCdAB7HsHSAGMmT+EG03Q1PhwAA+pl4ZZ/E8WfucFM8j2KqD81p9WWMBO83nx9poMDNe23e+fDcMx6KfgxsKQhLxNdlBued5yDxVO9u2pZqPosIzwItAuR+Bs8vj9AT9f+FtSIAAA==\"},\"/images/columbia-zentir/columbia4.webp\":{\"width\":1280,\"height\":1920,\"blur\":\"data:image/webp;base64,UklGRqQAAABXRUJQVlA4IJgAAABQBACdASoQABgAPu1iqU2ppaOiMAgBMB2JQBOmUAS4QpbrGgC78kVcIuEAAP6BRQTbf9uGc7raB/EGA9pm1qzX05lOJBTYNe9+ro7yJlU/WNuyo2BMlixWuDcX/39316FVX8NplRpIoMAHmHVr7YSPR6FYU+RccsBPYPo8eHROtWbQ6pGLkbzo3zmi/afXIuW4ISWKRQAAAA==\"},\"/images/columbia-zentir/columbia5.webp\":{\"width\":1280,\"height\":1920,\"blur\":\"data:image/webp;base64,UklGRqIAAABXRUJQVlA4IJYAAACQBACdASoQABgAPu1iqU2ppaOiMAgBMB2JZQC3uywBoQKRaP2lsA+xY62/LAAA/ubmzhJwnhEjA2RJcwOihcrNQlJxClrJC4xcKrNIxhHFFoiQDjqT81ecBmS1rzfoY4MnOHvPPJXQYskgfzXWXGp04HJ8tOvqra0BA9i6a5bxqAfPTnZey/TjtN26yCenrEt82aOXAAA=\"},\"/images/columbia-zentir/columbia6.webp\":{\"width\":1280,\"height\":1920,\"blur\":\"data:image/webp;base64,UklGRlwAAABXRUJQVlA4IFAAAAAQBACdASoQABgAPu1mqk4ppaOiMAgBMB2JZwDE2CFp39pf9DkY4fGOAAD+sGlYEW6Um+vodh4aQKC0xxofezOj0EEBj/K7LhWMrkBSIKkAAA==\"},\"/images/columbia-zentir/columbia7.webp\":{\"width\":1280,\"height\":1920,\"blur\":\"data:image/webp;base64,UklGRqAAAABXRUJQVlA4IJQAAABwBACdASoQABgAPu1iqU2ppaOiMAgBMB2JQBOmUGMABiEvnkKhoFP74zy1AAD+FcaE2m0ayWohUFUjphS2E1DKyo/RhScw0HZbm53ST/i2wDqZI5c0fU8aTEKh+fyZx8DuXvK7qc7/IQHwfJO80h+gIYUfuldfDFRa6pyuoEmwQzyC2meJUl9HuCQPYMYaggCmAAAA\"},\"/images/columbia-zentir/columbia8.webp\":{\"width\":1280,\"height\":1920,\"blur\":\"data:image/webp;base64,UklGRp4AAABXRUJQVlA4IJIAAAAQBACdASoQABgAPu1iqU2ppaOiMAgBMB2JQBYdsYdYFUMKA7LIorCxAAD+IyN3BkADCAotV0q6SKO6zlW4DX38gGG3eRPeXTYn9Wc3gJoYsgH0gcn6RmjblVwSgRvcDzQcguxhTJJkEBU+to1k5z/WJIXXkMwlpsU73nAcBSb4f6Sl1GhxrLjHrkOzA0mEUYoAAA==\"},\"/images/columbia-zentir/columbia9.webp\":{\"width\":1280,\"height\":1920,\"blur\":\"data:image/webp;base64,UklGRpAAAABXRUJQVlA4IIQAAAAwBACdASoQABgAPu1iqU2ppaOiMAgBMB2JQBYdhBx/WZc4UeHrWEzYZgAA/sgY8u32Yu3vGdtrFj7gk9n7XNYyg4iV8HkhK7WcH9Qo6UU6p4jse2l3tcpuHSZTon0zMLY6FbRThJcpj9MDAtKX+gayBypHIjP3sS01uDZv7BeUl28AAAA=\"},\"/images/donde-alex/alex.webp\":{\"width\":533,\"height\":800,\"blur\":\"data:image/webp;base64,UklGRoQAAABXRUJQVlA4IHgAAADwAwCdASoQABgAPu1iqk2ppaQiMAgBMB2JbACdMoMljB4kuTkHcFQYAP45dDqwHISa8Ovx97z3P2N0DqRGQ5gnR/R4VuOtV1wYSjDyWvSyn7399Mz/c/Ic74wNBKCswQQPF8TInYJAdAbVu/uX+r+Oninh1V9gAAA=\"},\"/images/donde-alex/alex1.webp\":{\"width\":1067,\"height\":800,\"blur\":\"data:image/webp;base64,UklGRngAAABXRUJQVlA4IGwAAAAwAgCdASoQAAwAA4BaJQBOkBswV5H4FF+dAAD+7ddGznxjbs4i4Tdeveagh7XNb4/iT5t9T3REwzzXkzGafXgJH5KNOmWk6z7oWlzxIF/kheVOEr41GAWdP4qztzLBUmJUns1w+exwajeAAAA=\"},\"/images/donde-alex/alex2.webp\":{\"width\":1200,\"height\":601,\"blur\":\"data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAACwAQCdASoQAAgAA4BaJZgCdADOyG2QAP6qFOgkuMaLmG/rMBOEka48LY5U2S63ihzZUugO60xOf+1/nhXUGbvbI54J+mT13rZ0lYuFJ6U7BYAA\"},\"/images/donde-alex/alex3.webp\":{\"width\":1200,\"height\":611,\"blur\":\"data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAACQAQCdASoQAAgAA4BaJQBOgA6taYAA/tJlTPyNKyWr6mV9vBpJHcgneXJgJ8bxc3j8qtsl4K7WBaUCG1297vmg3hMyxfKFT3fw8XsCiSjSC5slU12YAAAA\"},\"/images/donde-alex/alex4.webp\":{\"width\":1200,\"height\":600,\"blur\":\"data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAADQAQCdASoQAAgAA4BaJZACdACqwvgeQADLCiqkpZRVUYNhyEC/wDTUA91iTdMFgWUN/27xdi+OSwNWtOZTU7X1xCiH+nA90AA=\"},\"/images/duplat/duplat1.webp\":{\"width\":3456,\"height\":4608,\"blur\":\"data:image/webp;base64,UklGRrIAAABXRUJQVlA4IKYAAAAwBACdASoQABUAPu1iqU2ppaOiMAgBMB2JbACdMoACkXdZeUV84d7xTwAA/qwW56e6pYaYq9Lm9w9eowT4vDmhUH+qkXnTqBqxtAPBw7YFX0/R3dm9CrQEL5wLOpKp70TILTGnj1foIOUEIJ/hdVGYmXFT2nU6IsWw3rwZSZwAxBeZKFMZOwhATmWJiqXjYJJqbNizk78jLE72EDzYDOzLtheq8UAA\"},\"/images/duplat/duplat2.webp\":{\"width\":2048,\"height\":3072,\"blur\":\"data:image/webp;base64,UklGRowAAABXRUJQVlA4IIAAAABwBACdASoQABgAPu1iqU2ppaOiMAgBMB2JZwAD5LIOGrDovstpkYtFZNl4AAD+2900ntwXndT1SFYpOXBulHhUPqBIt18GKmtGfiNr7yJ2eH8c/Oss2f2lj9a4QJ6wugY3wOY/+JHX/h14Q3G130j2R86eUyL4Zrn88lGoLeLgAA==\"},\"/images/duplat/duplat3.webp\":{\"width\":2048,\"height\":3072,\"blur\":\"data:image/webp;base64,UklGRsIAAABXRUJQVlA4ILYAAAAQBACdASoQABgAPu1iqU2ppaOiMAgBMB2JQBOgMZAYFoQou1k3jrkTVgD+4KC1Bldq+6B6tW+usrFG91gjaMq2c34Mub/NaCd+4ewpKRe6zQsXboE5OXh3t+86W4/+zfxSBoMUrISoGbvXqMP5+BpO7trtML+8UTDDeLdfZPiQ9O1CccIH2h1V9jbf56Ocqv2HvhuUsvcd4a7Ow1pX9nb+7GWkiMPD0MtEA9iDladJo8aBlQAAAA==\"},\"/images/duplat/duplat4.webp\":{\"width\":3456,\"height\":4608,\"blur\":\"data:image/webp;base64,UklGRqoAAABXRUJQVlA4IJ4AAABwBACdASoQABUAPu1iqU2ppaOiMAgBMB2JZACdAdwLhPVDe7J3tC5K/SEwgAD2NBazZw9H7yxdYRwCZCcN3ydqeuTp2XV5UCq4thZgOAP9pHqF6Uz3ORs/YLsO2AvMVLLp1SdAEjPd/kfkryIDRjnW183ATmDo+qrU70r5F7XFJwwVfyiad5qfaHWSIYvSSzn626RGjVTLsiaxvCgAAA==\"},\"/images/duplat/duplat5.webp\":{\"width\":2048,\"height\":3072,\"blur\":\"data:image/webp;base64,UklGRqYAAABXRUJQVlA4IJoAAAAwBACdASoQABgAPu1iqU2ppaOiMAgBMB2JagCdAYxYetI53YmJbnzHT9AAzgKj5mOkwZhcOrLZqFREoVuZA2rOILhEaSiQqQ0zhNpqO+zScXTxrfvgMC9JY/ZxcMy4E1twxbBJfgB2RiAN+mEICyN0TBwZIwDWihxjFDgRDEfxz8+UjquTD6Rg9ntHev5XwBpRXA2+ER6daAAA\"},\"/images/duplat/duplat6.webp\":{\"width\":2048,\"height\":3072,\"blur\":\"data:image/webp;base64,UklGRrIAAABXRUJQVlA4IKYAAABQBACdASoQABgAPu1iqU2ppaOiMAgBMB2JZgCdMoAluBBIVCR/+T32XvAiAMnztpEtsLj2qlD2MTVZqvnUwYRlFsMZ6b5tCOVe3CRhqaUlrnp6NgbMZO/uIG+xxxrVkxhMY8/O5hu5f6FbJrYW+5BBrmUGNkiP7aazjT7CilULpoozZ6GYzgUuHXpFs5i2nduuEybS51I7Mq+Lqji+Qr3k44nkQAAA\"},\"/images/duplat/duplat7.webp\":{\"width\":1070,\"height\":1605,\"blur\":\"data:image/webp;base64,UklGRtoAAABXRUJQVlA4IM4AAABQBQCdASoQABgAPu1iqU2ppaOiMAgBMB2JbACdMoMYHYAHYCt61adcbOtp8s89YI89tgAA8qQs3Mnm/qeGHK7Q3sgpPKTaCIo4LMKFdUpqWZqFmpi0YhPh05YoiR1hwzdGMLReqZt3DddO8TwCqdBqLlRCaEpa6xdQCqwXYdC2F70FmimxQWJqWO/pLKSHbc7jSNCvcSVmMuqaUttVEr3FhDFkOySBoSzMyQ5c8vexJjl4/KINeEuwKNTQAJVpVGXj+ZgAW9tEoO2JqAAAAA==\"},\"/images/duplat/duplat8.webp\":{\"width\":713,\"height\":1070,\"blur\":\"data:image/webp;base64,UklGRsgAAABXRUJQVlA4ILwAAACQBACdASoQABgAPu1iqU2ppaOiMAgBMB2JbACdMoR3AdCIi4sEiDZBLyjkmCgA/ulKQ6F2nj/1og+ESb2evWrT8T7PxBUSjJbeqWl5jt8JHBTU1Sp8SxnmQqEFd7Enl24YstB9vDnPsc3WbP/AoVyXlzJHIcssWzwgcCzaXxWiLpmYm3U6MM6i2OUSEYR6IxjMaCZEc2BJ2dlfJzbkft+sHK68YjLHiu/LUiNiHeuu3BujU1QBcdR5PjuAAA==\"},\"/images/grosso-napoletano/grosso.webp\":{\"width\":647,\"height\":800,\"blur\":\"data:image/webp;base64,UklGRqwAAABXRUJQVlA4IKAAAAAwBACdASoQABQAPu1iqU2ppaOiMAgBMB2JZgCdMoAltg08vo+jZ+oXhAAAziuGE6GN0LfskoQE7QGTrvm5bL1RMqVICOSxjcnVvWaF+kuq3N3HjAcMaHewY1JcSoya25kqGLKoeEhf2mY+CMWySEuo+ZGLP7WfETGtCCfe6HtzbJuctLS0/JghQ76zP46k/Y0K184xRxjOhJZG3ZpgAAAA\"},\"/images/grosso-napoletano/grosso1.webp\":{\"width\":1067,\"height\":800,\"blur\":\"data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAABwAgCdASoQAAwAA4BaJbACdAYrT27oPCDwSAgAAPsjdA5FLmpZdIH6rCZqAV6MYbYt/5Zu1Yw9qEnA4QMewOJFMNx5bjpNwGJI7eesaYreVjRguUWg0VXA26A5emMCcC1+vFPOCr4PIqvdggAAAA==\"},\"/images/grosso-napoletano/grosso2.webp\":{\"width\":1200,\"height\":600,\"blur\":\"data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAAAQAgCdASoQAAgAA4BaJbACdAEDZNHyJP4AAP6UyhnfQLyxfgaKlmPjRvXvnxqK89Lw/4ZANreSHvqOFasZtn3L9quiAGehtYFvxb9UEQvZnqgu/1cvbOmBQRDQAA==\"},\"/images/grosso-napoletano/grosso3.webp\":{\"width\":1200,\"height\":611,\"blur\":\"data:image/webp;base64,UklGRmIAAABXRUJQVlA4IFYAAACwAQCdASoQAAgAA4BaJbACdAC09tGUAM470B2XUSVAomn6KFNr3c7S3tQ0WnCXxznsSODqPeXLZY6Q9ofcBAXP3ZvYKyb8aUb2ZfMMS8k67X3NSQAAAA==\"},\"/images/grosso-napoletano/grosso4.webp\":{\"width\":983,\"height\":800,\"blur\":\"data:image/webp;base64,UklGRoQAAABXRUJQVlA4IHgAAAAwAgCdASoQAA0AA4BaJZACdAYr7LlxWsi4OAD+5pwtnR0YAH3BryOviUSTTd7i9R+LXjZZ46IvyX075cPeuPuiswANZDqP7aa9FWDzTXR39vX2VpxN2JQgI97AdWYIZe5hCfQRAns3o8tlEVffsNFv52vUz+8WQAA=\"},\"/images/orna-group/orna_phone.webp\":{\"width\":1200,\"height\":800,\"blur\":\"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoQAAsAA4BaJQbcIALoAAD+72vibKta3ezHx9qo4psyWi2e2y0UaAAA\"},\"/images/orna-group/orna.webp\":{\"width\":1200,\"height\":731,\"blur\":\"data:image/webp;base64,UklGRqQAAABXRUJQVlA4WAoAAAAQAAAADwAACQAAQUxQSCwAAAABL6CmbSTm+PMs/1vdn0ZEBP6yCANp28xCuIJ72f3ruoOI/gd28Lu22CT5A1ZQOCBSAAAAEAIAnQEqEAAKAAOAWiWwAnQBC2SkwfmEAAD+4JjR0ave8UBBIMuD3XlzwoVSh5G8jqwi1MH/PzggFkf/i23pyxq6bvnTq/04YWtsgleUhAAAAA==\"},\"/images/orna-group/orna1.webp\":{\"width\":1154,\"height\":532,\"blur\":\"data:image/webp;base64,UklGRo4AAABXRUJQVlA4WAoAAAAQAAAADwAABgAAQUxQSBQAAAABF/D3/4iIgkAQIpabb0JE/0NGX1ZQOCBUAAAA8AEAnQEqEAAHAAOAWiWwAuwAzoDJ+PWAAP62ycspasXGjU+aF7eIIwhB0KrdcIytbpyqvdg7TbXC/DUMQVFnpcVffzeas85vQupOPnHaTOuBiAAA\"},\"/images/orna-group/orna2.webp\":{\"width\":1200,\"height\":307,\"blur\":\"data:image/webp;base64,UklGRo4AAABXRUJQVlA4WAoAAAAQAAAADwAAAwAAQUxQSDAAAAABuTJE9D+gJLat6P75/hf4gKd/FRKgcBTY3NYgYgImYASKxKBSDl2TYVL4vZyIDQBWUDggOAAAAPABAJ0BKhAABAADgFollALsAPymO6y+4ADhXdwT3L4riYk2pC3w63rsW+ZZ9SdUZzHCVnuAgAAA\"},\"/images/scandic-go/scandic.webp\":{\"width\":1067,\"height\":800,\"blur\":\"data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAADQAQCdASoQAAwAA4BaJbACdADR3CtUwAD+Lo//+dicQGo2k6K1taVQjw2wZR6m6QBF2+mN8BbuE85Ny77A5eH1Dfp5WHekfMRnu/u+w0xmtlqzo1ui3pQHhCSE8AAA\"},\"/images/scandic-go/scandic1.webp\":{\"width\":1200,\"height\":533,\"blur\":\"data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAAAQAgCdASoQAAcAA4BaJbACdAEnjyyvzxJQAPwzG8WmEPvGmjrDTKLMLPaaUA6kUwmp7lsAl7eTUfJh5g1T1M71GXt5Rspv5lIv2TCHetUT5mYyzqJ2mpYoykLsedXBAUDKHaqQAAA=\"},\"/images/scandic-go/scandic2.webp\":{\"width\":1200,\"height\":799,\"blur\":\"data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAABwAgCdASoQAAsAA4BaJbACdAEfvZPM4Yfc09QAAP7m8gRUXEcwPmRNXNE5e5W89C7VXAFjBIv+rrz/DlPye1yD5n0KTUxgUJrR5xn0PX8LjjMjjBp9uO4kim5H/FOrtVN9QnAA\"},\"/images/scandic-go/scandic3.webp\":{\"width\":1200,\"height\":533,\"blur\":\"data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAADwAQCdASoQAAcAA4BaJYwCdADHaONSpAAA/u+og+/UpIGp962vOlUr8s76ehJp6hCbmdWiRDKan3Ord3XebWK2WND1Ecn+bwAVF6VzoFExwAAA\"},\"/images/scandic-go/scandic4.webp\":{\"width\":1200,\"height\":611,\"blur\":\"data:image/webp;base64,UklGRmIAAABXRUJQVlA4IFYAAAAwAgCdASoQAAgAA4BaJbACdLoAAubqgu3OwAD+3iAAm0Y+xTma0JBUPW1qL3Jt4o6PdEM0AgTcUeHtaB8E9ZYgf9soV2wYqOlANftziJ5m+Yf9G5a4AA==\"},\"/images/scandic-go/scandic5.webp\":{\"width\":1200,\"height\":799,\"blur\":\"data:image/webp;base64,UklGRnQAAABXRUJQVlA4IGgAAAAwAgCdASoQAAsAA4BaJbACdAEfbk6k4+ReoAD+3aFgQNZshWvvwWkqSeRekYqwfIoCAzwrds1QKxb1wZdDXLDovE2/XBYBW5Mwf/kCeXO9eFLs4YS6O/+IfFDSL9QM6hIyCv31SAAAAA==\"},\"/images/tree-brothers/ornacirca.webp\":{\"width\":1200,\"height\":793,\"blur\":\"data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAAAwAgCdASoQAAsAA4BaJQBdgB8x9z/lb5sZwAD+9w/1OZdyL6KwOlLmE780MCXlP9QFUIMuHi/uuaLf67wVsKCyluUEGyMJ1w6Yo6VGUl1JhrzJIwXhQ7WXB71HPfVvJnDAAA==\"},\"/images/tree-brothers/tree.webp\":{\"width\":1358,\"height\":780,\"blur\":\"data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAADQAQCdASoQAAkAA4BaJZwAAjdgk+tFAAD+6EVr8iAjQ8jw8pcW8bmYGywkBF5G81DPWWjkmvdIAboHLwWtvl2rbAA=\"},\"/images/tree-brothers/tree1.webp\":{\"width\":1920,\"height\":1080,\"blur\":\"data:image/webp;base64,UklGRo4AAABXRUJQVlA4WAoAAAAQAAAADwAACAAAQUxQSBEAAAABD9D/iAgIBAjO3VuI6H8aYwBWUDggVgAAAPABAJ0BKhAACQADgFolpAAC62nHAsKIeAD+imaxvnEss89qQxGEfC0yvOTV+Ai9rWdFW1mAVHf+UQ85s/kRn79veHBJHpz0unrtWj5DFv3YHwDmAAAA\"},\"/images/tree-brothers/treeshop.webp\":{\"width\":1920,\"height\":1280,\"blur\":\"data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAADwAQCdASoQAAsAA4BaJaQAAxRGW6lTLAAA/rXVQO8BOaW34dKR73+S+VkD61z1U4hYtzpSX1yXjnJBdF1M3UkAAAA=\"}}");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0gyvvyhkohdcx._.js.map