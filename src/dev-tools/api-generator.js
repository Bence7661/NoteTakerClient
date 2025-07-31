import dotenv from 'dotenv';
import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);
const __envFileName = ".env.local"

dotenv.config({ path: path.resolve(__dirName, `../../${__envFileName}`) });
const openapiUrl = `${process.env.VITE_BASE_URL}${process.env.VITE_SWAGGERDOC_URL}`;
const outputDir = './src/api-client';
const generator = 'javascript';

const cmd = `npx openapi-generator-cli generate -i ${openapiUrl} -g ${generator} -o ${outputDir} --additional-properties=supportsES6=true`;

console.log('Running OpenAPI Generator CLI with:');
console.log(`- Input spec: ${openapiUrl}`);
console.log(`- Generator: ${generator}`);
console.log(`- Output dir: ${outputDir}`);

try {
    execSync(cmd, { stdio: 'inherit' });
    console.log('API generation completed successfully.');
} catch (err) {
    console.error('API generation failed:');
    console.error(err.message);
    process.exit(1);
}
