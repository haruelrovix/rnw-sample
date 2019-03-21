# Common Gradle Scripts

This repository contains a collection of gradle scripts that are used
in multiple Java/Android projects.

## Features

See the project [TODO - Xwiki](https://) for more information.

## Including in your Project

### Cloning
This project should be cloned into your own repository using the
[git subtree](https://www.atlassian.com/blog/git/alternatives-to-git-submodule-git-subtree) method. The Subtree method is
preferred over the `git submodule` workflow because it simplifies cloning and the git workflow as well as provides a
means to make local modifications.

To clone this repository into your own project repository, run the following command from the root of your project:
```bash
git subtree add --prefix gradle/common git@repo.sfcc.tech:platform/java/gradle/gradle-common.git master --squash
```
This command will clone this `master` from this repo into the `gradle/common` folder, and squash all the commits
into a single revision. Please note that this operation only needs to be performed a single time.

After you have run the above command, if you wish to pull in changes from upstream, then you can run
```bash
git subtree pull --prefix gradle/common git@repo.sfcc.tech:platform/java/gradle/gradle-common.git master --squash
```

### Inclusion in build.gradle
Once you have the repository cloned into `gradle/common`, apply the desired file to your `build.gradle` file. For
example, at the top of your module's `build.gradle` file, after the plugin definitions, paste the following:
```groovy
apply from: file('../gradle/common/publish.gradle')
```

### Contributing back upstream
Most developers won't be preforming this step, but if you need to push changes back upstream, then there are several
steps to preform.

1. Add this repo as a remote (again only has to be done once per clone).
   ```
   git remote add gradle-common-upstream git@repo.sfcc.tech:platform/java/gradle/gradle-common.git
   ```
2. Use `subtree push` to push changes back up to this repo:
   ```
   git subtree push --prefix gradle/common gradle-common-upstream feature-branch
   ```
   - Notice that we are pushing to `feature-branch`. Typically developers don't have permission to push to the
     protected master branch. The next step will be to submit a merge request to have the changes merged to master



## Proxy Repositories

In order to pull from a mirrored repository (currently hosted at https://registry.sfcc.tech) you will need to include
the `repository.gradle` file in your build.gradle. You can do this by including this snippet where it it required:

```
apply from: "$rootDir/gradle/common/repository.gradle"
```

and then including the repository you need, using the mavenCentral mirror as an example:

```
 apply from: "$rootDir/gradle/common/repository.gradle"
     repositories {
         proxyRepo('https://registry.sfcc.tech/repository/maven-central/')
     }
 }
```

The `repository.gradle` file also includes constants for the proxy URLs so that you don't need to have a hard-coded URL in the case that it changes.
For example, the below snippet can be used for the mavenCentral repo:
```
apply from: "$rootDir/gradle/common/repository.gradle"

     repositories {
         proxyRepo(mavenCentralProxy)
     }
 }
```

The current constants are:
```
androidRepoProxy   // google android mirror
mavenCentralProxy  // mavenCentral mirror
jCenterProxy       // jcenter mirror
springPluginsProxy // spring plugins mirror
gradlePluginsProxy // gradle plugins mirror
```
You will also need to create a local.properties file in your project and include two environment variables, listed below.
Make sure that this file is ignored by git.
```
PROXY_USER=proxy_user_name
PROXY_PASSWORD=proxy_user_password
PROXY_REGISTRY=http://registry.example.com:5000/repository/
```

## Publishing

The `publish.gradle` and `publish-android` scripts are included in this library. These can be used to help publish artifacts.
Both scripts allow you to simply include the plugin and then define the group name, version and the artifact ID.
The group name should be set in the project `build.gradle`. The version also needs to be set. This can be done with the
`version.gradle` script.
```
buildscript {
    apply from: "./gradle/common/version.gradle"
    ext {
        version = _getVersion('1.0.0')
        group = 'cloud.stormfree.example'
    }
}
```

Module `build.gradle` to set the artifact id and group name.
```
ext {
    artifactId = 'example-id'
    groupName = rootProject.ext.group
}
```

Additionally, you will also require three environment variables on gitlab. These will need to be included in your `gitlab-ci.yml` file. These are:
Both `publish.gradle` and `publish-android.gradle` contain validation to ensure that these variables all exist, and publishing will fail
without them.
```
MAVEN_USER  //username for repository access
MAVEN_PASSWORD  //password for repository access
PUBLISH_URL  //url to private repository
```

Example publish step for snapshot:
```
publish:snapshot:
  stage: publish
  dependencies:
    - build:release
  except:
    - tags
  variables:
    MAVEN_USER: "$MAVEN_USER_SNAPSHOT"
    MAVEN_PASSWORD: "$MAVEN_PASSWORD_SNAPSHOT"
    PUBLISH_URL: "$MAVEN_REGISTRY_SNAPSHOT"
  script:
    - bash ./gradlew publish
```


### Java
Include in module:
```
apply from: "$rootDir/gradle/common/publish.gradle"
```

### Android
You will also need to include the [android-maven-publish](https://github.com/wupdigital/android-maven-publish) plugin in your module.
The `publish-android.gradle` plugin relies on this plugin. This will be included in your module `build.gradle`.

```
apply from: "$rootDir/gradle/common/publish-android.gradle"

buildscript {
    dependencies {
        classpath 'digital.wup:android-maven-publish:3.6.2'
    }
}
```

## SonarQube

StormFree SonarQube url is: [https://inspect.sfcc.tech](https://inspect.sfcc.tech)

#### To apply:

```
apply from: "$rootDir/gradle/common/sonarqube.gradle"
 - or -
 apply from: "$rootDir/gradle/common/sonarqube-android.gradle"
```

#### GitLab Config Example
Here, the SonarQube report is published in `sonarqube:master`. In `sonarqube:issues` the inspection is run and a local report is generated. This is used to 'fail' a build if the inspection fails.

```
sonarqube:issues:
  stage: inspect
  except:
    - master
  script:
   - bash ./gradlew sonarqube -Dsonar.analysis.mode=preview --stacktrace

sonarqube:master:
  stage: inspect
  only:
    - master
  script:
   - bash ./gradlew sonarqube --stacktrace
```

#### Environment Variables
These environment variables must be set - or available in `local.properties`:
```
  INSPECT_URL
  INSPECT_USER
  INSPECT_PASSWORD
```
