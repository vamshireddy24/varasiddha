pipeline {
    agent any
    stages {
        node{
            stage('Mvn-Build') {
                steps {
                    def mavenHome = toolname: "maven", type: "maven"
                    def mavenCMD = "${mavenHome}/bin/mvn"
                    sh "${mavenCMD} clean package"
                }
            }
        }
        node {
            stage('Sonar-Test') {
                withSonarQubeEnv('mysonar')
                {
                    def mavenHome = toolname: "maven", type: "maven"
                    def mavenCMD = "${mavenHome}/bin/mvn"
                    sh "${mavenCMD} sonar:sonar"
                }
            }
        }
    }
}