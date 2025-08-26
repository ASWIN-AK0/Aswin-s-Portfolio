pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/ASWIN-AK0/Aswin-s-Portfolio.git'
            }
        }

        stage('Build') {
            steps {
                echo "Building the project..."
            }
        }

        stage('Test') {
            steps {
                echo "Running tests..."
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploy step (optional)"
            }
        }
    }
}
