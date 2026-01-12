pipeline {
    agent any
    tools {
        nodejs 'node18'
    }
    environment {
        REACT_APP_API_URL = "https://api.example.com" // optional
    }
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Verify Build') {
            steps {
                sh 'ls -la build'
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'build/**', allowEmptyArchive: false
        }
    }
}
