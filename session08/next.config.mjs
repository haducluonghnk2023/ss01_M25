import { formatDiagnosticsWithColorAndContext } from 'typescript';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:formatDiagnosticsWithColorAndContext
};

export default nextConfig;
