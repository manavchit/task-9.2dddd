pipeline {
    agent any
    tools{
        nodejs 'nodejs'
    }
    
    stages {
        stage("Install") {
            steps {
                git url : "https://github.com/manavchit/task9.2d.git", branch : "main"
                bat "npm install --verbose --legacy-peer-deps"
            }
        }
        stage("Build"){
            steps{
                
                bat "npm run build"
            }
        }
        
        stage("Test"){
            steps{
                bat "npm test -- --passWithNoTests"
            }
        }
         stage("Code Analysis"){
            steps{
                bat "npx eslint src"
            }
        }
        
        
        
       
    
    }
}
