import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'public/projects');

export function getAllProjects() {
    // If directory doesn't exist, return empty array
    if (!fs.existsSync(projectsDirectory)) {
        return [];
    }

    // Get all folders inside content/projects
    const folderNames = fs.readdirSync(projectsDirectory);
    
    const allProjectsData = folderNames.map((folderName) => {
        // Read info.md file inside the folder
        const fullPath = path.join(projectsDirectory, folderName, 'info.md');
        
        // Return null if info.md doesn't exist for some reason
        if (!fs.existsSync(fullPath)) return null;

        const fileContents = fs.readFileSync(fullPath, 'utf8');
        
        // Use gray-matter to parse the metadata section
        const matterResult = matter(fileContents);
        
        // Look for any image file in the folder (e.g., thumbnail.png, .jpg, etc.)
        // Since we serve these through public folder, it's easier to ask the user to just name it thumbnail.png 
        // OR we can copy them dynamically, but Next.js expects assets in public/. 
        // Wait, for local markdown assets, Next.js standard is to put them in public/projects/folder/image.png
        // OR the user can provide a URL in the metadata.
        // Let's check for an image URL in the matterResult or fallback.
        
        return {
            id: folderName,
            ...matterResult.data,
            content: matterResult.content,
        };
    }).filter(Boolean); // Filter out any nulls

    // Sort projects by date or just return them
    return allProjectsData;
}
