


- [projects.branches.getMany(projectId, [options])](#projectsbranchesgetmanyprojectid-options)
- [projects.branches.createOne(projectId)](#projectsbranchescreateoneprojectid)
- [projects.branches.getOne(projectId, branchId)](#projectsbranchesgetoneprojectid-branchid)
- [projects.branches.deleteOne(projectId, branchId)](#projectsbranchesdeleteoneprojectid-branchid)
- [projects.branches.patchOne(projectId, branchId)](#projectsbranchespatchoneprojectid-branchid)
- [projects.directories.getMany(projectId, [options])](#projectsdirectoriesgetmanyprojectid-options)
- [projects.directories.createOne(projectId)](#projectsdirectoriescreateoneprojectid)
- [projects.directories.getOne(projectId, directoryId)](#projectsdirectoriesgetoneprojectid-directoryid)
- [projects.directories.deleteOne(projectId, directoryId)](#projectsdirectoriesdeleteoneprojectid-directoryid)
- [projects.directories.patchOne(projectId, directoryId)](#projectsdirectoriespatchoneprojectid-directoryid)
- [projects.files.getMany(projectId, [options])](#projectsfilesgetmanyprojectid-options)
- [projects.files.createOne(projectId, [options])](#projectsfilescreateoneprojectid-options)
- [projects.files.getOne(projectId, fileId)](#projectsfilesgetoneprojectid-fileid)
- [projects.files.deleteOne(projectId, fileId)](#projectsfilesdeleteoneprojectid-fileid)
- [projects.files.patchOne(projectId, fileId)](#projectsfilespatchoneprojectid-fileid)
- [projects.files.downloadLink(projectId, fileId)](#projectsfilesdownloadlinkprojectid-fileid)
- [glossaries.getMany([options])](#glossariesgetmanyoptions)
- [glossaries.createOne()](#glossariescreateone)
- [glossaries.getOne(glossaryId)](#glossariesgetoneglossaryid)
- [glossaries.deleteOne(glossaryId)](#glossariesdeleteoneglossaryid)
- [glossaries.patchOne(glossaryId)](#glossariespatchoneglossaryid)
- [glossaries.export.exportOne(glossaryId)](#glossariesexportexportoneglossaryid)
- [glossaries.export.getDownloadLink(glossaryId, [options])](#glossariesexportgetdownloadlinkglossaryid-options)
- [glossaries.export.getExportStatus(glossaryId, exportId)](#glossariesexportgetexportstatusglossaryid-exportid)
- [glossaries.import.importOne(glossaryId)](#glossariesimportimportoneglossaryid)
- [glossaries.import.getImportOne(glossaryId, importId)](#glossariesimportgetimportoneglossaryid-importid)
- [groups.getMany([options])](#groupsgetmanyoptions)
- [groups.createOne()](#groupscreateone)
- [groups.getOne(groupId)](#groupsgetonegroupid)
- [groups.deleteOne(groupId)](#groupsdeleteonegroupid)
- [groups.patchOne(groupId)](#groupspatchonegroupid)
- [projects.images.background.uploadOne(projectId)](#projectsimagesbackgrounduploadoneprojectid)
- [projects.images.background.deleteOne(projectId)](#projectsimagesbackgrounddeleteoneprojectid)
- [projects.images.logo.uploadOne(projectId)](#projectsimageslogouploadoneprojectid)
- [projects.images.logo.deleteOne(projectId)](#projectsimageslogodeleteoneprojectid)
- [issues.getMany(projectId, [options])](#issuesgetmanyprojectid-options)
- [projects.issues.statistics.getMany(projectId, [options])](#projectsissuesstatisticsgetmanyprojectid-options)
- [languages.getMany([options])](#languagesgetmanyoptions)
- [languages.getOne(languageId)](#languagesgetonelanguageid)
- [projects.preTranslates.preTranslate(projectId)](#projectspretranslatespretranslateprojectid)
- [projects.preTranslates.getTranslation(projectId, preTranslationId)](#projectspretranslatesgettranslationprojectid-pretranslationid)
- [storages.preview.getOne(storageId)](#storagespreviewgetonestorageid)
- [projects.branches.languages.progress.getMany(projectId, branchId)](#projectsbrancheslanguagesprogressgetmanyprojectid-branchid)
- [projects.directories.languages.progress.getMany(projectId, directoryId)](#projectsdirectorieslanguagesprogressgetmanyprojectid-directoryid)
- [projects.exportReadyProgress.getMany(projectId, [options])](#projectsexportreadyprogressgetmanyprojectid-options)
- [projects.files.languages.progress.getMany(projectId, fileId)](#projectsfileslanguagesprogressgetmanyprojectid-fileid)
- [projects.languages.progress.getMany(projectId)](#projectslanguagesprogressgetmanyprojectid)
- [projects.getMany([options])](#projectsgetmanyoptions)
- [projects.createOne()](#projectscreateone)
- [projects.getOne(projectId)](#projectsgetoneprojectid)
- [projects.deleteOne(projectId)](#projectsdeleteoneprojectid)
- [projects.patchOne(projectId)](#projectspatchoneprojectid)
- [projects.pseudo.builds.getOne(projectId)](#projectspseudobuildsgetoneprojectid)
- [projects.pseudo.builds.getStatus(projectId, pseudoTranslationBuildId)](#projectspseudobuildsgetstatusprojectid-pseudotranslationbuildid)
- [projects.pseudo.getDownloadLink(projectId)](#projectspseudogetdownloadlinkprojectid)
- [reportTypes.getMany(projectId, [options])](#reporttypesgetmanyprojectid-options)
- [projects.reports.createOne(projectId)](#projectsreportscreateoneprojectid)
- [projects.reports.raw.exportOne(projectId, reportId)](#projectsreportsrawexportoneprojectid-reportid)
- [projects.files.revisions.getMany(projectId, fileId, [options])](#projectsfilesrevisionsgetmanyprojectid-fileid-options)
- [projects.files.revisions.createOne(projectId, fileId)](#projectsfilesrevisionscreateoneprojectid-fileid)
- [projects.files.revisions.getOne(projectId, fileId, revision)](#projectsfilesrevisionsgetoneprojectid-fileid-revision)
- [projects.screenshots.getMany(projectId, [options])](#projectsscreenshotsgetmanyprojectid-options)
- [projects.screenshots.createOne(projectId)](#projectsscreenshotscreateoneprojectid)
- [projects.screenshots.getOne(projectId, screenshotId)](#projectsscreenshotsgetoneprojectid-screenshotid)
- [projects.screenshots.replaceOne(projectId, screenshotId)](#projectsscreenshotsreplaceoneprojectid-screenshotid)
- [projects.screenshots.deleteOne(projectId, screenshotId)](#projectsscreenshotsdeleteoneprojectid-screenshotid)
- [projects.screenshots.patchOne(projectId, screenshotId)](#projectsscreenshotspatchoneprojectid-screenshotid)
- [projects.screenshots.tags.getMany(projectId, screenshotId, [options])](#projectsscreenshotstagsgetmanyprojectid-screenshotid-options)
- [projects.screenshots.tags.replaceAll(projectId, screenshotId)](#projectsscreenshotstagsreplaceallprojectid-screenshotid)
- [projects.screenshots.tags.createOne(projectId, screenshotId)](#projectsscreenshotstagscreateoneprojectid-screenshotid)
- [projects.screenshots.tags.deleteAll(projectId, screenshotId)](#projectsscreenshotstagsdeleteallprojectid-screenshotid)
- [projects.screenshots.tags.getOne(projectId, screenshotId, tagId)](#projectsscreenshotstagsgetoneprojectid-screenshotid-tagid)
- [projects.screenshots.tags.deleteOne(projectId, screenshotId, tagId)](#projectsscreenshotstagsdeleteoneprojectid-screenshotid-tagid)
- [projects.screenshots.tags.patchOne(projectId, screenshotId, tagId)](#projectsscreenshotstagspatchoneprojectid-screenshotid-tagid)
- [projects.settings.getOne(projectId)](#projectssettingsgetoneprojectid)
- [projects.settings.patchOne(projectId)](#projectssettingspatchoneprojectid)
- [storages.getAll(storageId)](#storagesgetallstorageid)
- [storages.uploadOne()](#storagesuploadone)
- [storages.getOne(storageId)](#storagesgetonestorageid)
- [storages.deleteOne(storageId)](#storagesdeleteonestorageid)
- [projects.strings.createOne(projectId)](#projectsstringscreateoneprojectid)
- [projects.strings.getOne(projectId, stringId)](#projectsstringsgetoneprojectid-stringid)
- [projects.strings.deleteOne(projectId, stringId)](#projectsstringsdeleteoneprojectid-stringid)
- [projects.strings.patchOne(projectId, stringId)](#projectsstringspatchoneprojectid-stringid)
- [projects.tasks.getMany(projectId, [options])](#projectstasksgetmanyprojectid-options)
- [projects.tasks.createOne(projectId)](#projectstaskscreateoneprojectid)
- [projects.tasks.getOne(projectId, taskId)](#projectstasksgetoneprojectid-taskid)
- [projects.tasks.deleteOne(projectId, taskId)](#projectstasksdeleteoneprojectid-taskid)
- [projects.tasks.patchOne(projectId, taskId)](#projectstaskspatchoneprojectid-taskid)
- [projects.tasks.statistics.getMany(projectId, [options])](#projectstasksstatisticsgetmanyprojectid-options)
- [glossaries.terms.getMany(glossaryId, [options])](#glossariestermsgetmanyglossaryid-options)
- [glossary.terms.createOne(glossaryId)](#glossarytermscreateoneglossaryid)
- [glossaries.terms.getOne(glossaryId, termId)](#glossariestermsgetoneglossaryid-termid)
- [glossaries.terms.deleteOne(glossaryId, termId)](#glossariestermsdeleteoneglossaryid-termid)
- [glossaries.terms.patchOne(glossaryId, termId)](#glossariestermspatchoneglossaryid-termid)
- [tms.getList([options])](#tmsgetlistoptions)
- [tms.uploadOne()](#tmsuploadone)
- [tms.getOne(tmId)](#tmsgetonetmid)
- [tms.deleteOne(tmId)](#tmsdeleteonetmid)
- [tms.patchOne(tmId)](#tmspatchonetmid)
- [tms.downloadOne(tmId, [options])](#tmsdownloadonetmid-options)
- [tms.exportOne(tmId)](#tmsexportonetmid)
- [tms.export.getOne(tmId, exportId)](#tmsexportgetonetmid-exportid)
- [tms.upload(tmId)](#tmsuploadtmid)
- [tms.upload.jobByTm(tmId, importId)](#tmsuploadjobbytmtmid-importid)
- [projects.translations.builds.getList([options])](#projectstranslationsbuildsgetlistoptions)
- [projects.translations.builds.init(projectId)](#projectstranslationsbuildsinitprojectid)
- [projects.translations.builds.getDownloadLink(projectId, buildId)](#projectstranslationsbuildsgetdownloadlinkprojectid-buildid)
- [projects.translations.builds.getOne(projectId, buildId)](#projectstranslationsbuildsgetoneprojectid-buildid)
- [projects.translations.builds.cancel(projectId, buildId)](#projectstranslationsbuildscancelprojectid-buildid)
- [projects.translations.initByLanguage(projectId, languageId)](#projectstranslationsinitbylanguageprojectid-languageid)
- [projects.webhooks.getMany(projectId, [options])](#projectswebhooksgetmanyprojectid-options)
- [projects.webhooks.createOne(projectId)](#projectswebhookscreateoneprojectid)
- [projects.webhooks.getOne(projectId, webhookId)](#projectswebhooksgetoneprojectid-webhookid)
- [projects.webhooks.deleteOne(projectId, webhookId)](#projectswebhooksdeleteoneprojectid-webhookid)
- [projects.webhooks.patchOne(projectId, webhookId)](#projectswebhookspatchoneprojectid-webhookid)


## projects.branches.getMany(projectId, [options])
> List project branches

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: name
  in: query
  description: Filter branch by name.
  schema:
    type: string
- name: limit
  in: query
  description: Maximum number of items to retrieve.
  schema:
    type: integer
    default: 25
    maximum: 500
    minimum: 1
- name: offset
  in: query
  description: Starting offset in the collection.
  schema:
    type: integer
    default: 0
    minimum: 0

```


## projects.branches.createOne(projectId)
> Create a branch

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer

```


## projects.branches.getOne(projectId, branchId)
> Get a branch

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: branchId
  in: path
  description: Branch Identifier.
  required: true
  schema:
    type: integer

```


## projects.branches.deleteOne(projectId, branchId)
> Delete a branch

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: branchId
  in: path
  description: Branch Identifier.
  required: true
  schema:
    type: integer

```


## projects.branches.patchOne(projectId, branchId)
> Update a branch

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: branchId
  in: path
  description: Branch Identifier.
  required: true
  schema:
    type: integer

```


## projects.directories.getMany(projectId, [options])
> List project directories

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: branchId
  in: query
  description: Filter directories by branchId
  schema:
    type: integer
- name: directoryId
  in: query
  description: Filter directories by directoryId
  schema:
    type: integer
- name: limit
  in: query
  description: Maximum number of items to retrieve.
  schema:
    type: integer
    default: 25
    maximum: 500
    minimum: 1
- name: offset
  in: query
  description: Starting offset in the collection.
  schema:
    type: integer
    default: 0
    minimum: 0

```


## projects.directories.createOne(projectId)
> Create a directory

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer

```


## projects.directories.getOne(projectId, directoryId)
> Get a directory

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: directoryId
  in: path
  description: Directory Identifier.
  required: true
  schema:
    type: integer

```


## projects.directories.deleteOne(projectId, directoryId)
> Delete a directory

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: directoryId
  in: path
  description: Directory Identifier.
  required: true
  schema:
    type: integer

```


## projects.directories.patchOne(projectId, directoryId)
> Update a directory

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: directoryId
  in: path
  description: Directory Identifier.
  required: true
  schema:
    type: integer

```


## projects.files.getMany(projectId, [options])
> List project files

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: branchId
  in: query
  description: >-
    List branch files.


    __Note!__ You can either list files for the specified branch (branchId) in
    the same request.
  schema:
    type: integer
- name: directoryId
  in: query
  description: >-
    List directory files.


    __Note!__ You can either list files for the specified directory
    (directoryId) in the same request.
  schema:
    type: integer
- name: limit
  in: query
  description: Maximum number of items to retrieve.
  schema:
    type: integer
    default: 25
    maximum: 500
    minimum: 1
- name: offset
  in: query
  description: Starting offset in the collection.
  schema:
    type: integer
    default: 0
    minimum: 0

```


## projects.files.createOne(projectId, [options])
> Create a file

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: branchId
  in: query
  description: 'Get files of branch. You can set branchId or directoryId, not both'
  schema:
    type: integer
- name: directoryId
  in: query
  description: 'Get files of directory. You can set branchId or directoryId, not both'
  schema:
    type: integer

```


## projects.files.getOne(projectId, fileId)
> Get a file

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: fileId
  in: path
  description: File Identifier.
  required: true
  schema:
    type: integer

```


## projects.files.deleteOne(projectId, fileId)
> Delete a file

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: fileId
  in: path
  description: File Identifier.
  required: true
  schema:
    type: integer

```


## projects.files.patchOne(projectId, fileId)
> Update a file

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: fileId
  in: path
  description: File Identifier.
  required: true
  schema:
    type: integer

```


## projects.files.downloadLink(projectId, fileId)
> Export file raw

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: fileId
  in: path
  description: File Identifier.
  required: true
  schema:
    type: integer

```


## glossaries.getMany([options])
> List Glossaries

**Parameters**
```yml
- name: groupId
  in: query
  description: 'A unique identifier for the group, this glossary is associated with.'
  required: true
  schema:
    type: integer
- name: limit
  in: query
  description: Maximum number of items to retrieve.
  schema:
    type: integer
    default: 25
    maximum: 500
    minimum: 1
- name: offset
  in: query
  description: Starting offset in the collection.
  schema:
    type: integer
    default: 0
    minimum: 0

```


## glossaries.createOne()
> Create a Glossary

**Parameters**
```yml
[]

```


## glossaries.getOne(glossaryId)
> Get a Glossary

**Parameters**
```yml
- name: glossaryId
  in: path
  description: Glossary Identifier.
  required: true
  schema:
    type: integer

```


## glossaries.deleteOne(glossaryId)
> Delete a Glossary

**Parameters**
```yml
- name: glossaryId
  in: path
  description: Glossary Identifier.
  required: true
  schema:
    type: integer

```


## glossaries.patchOne(glossaryId)
> Update a Glossary

**Parameters**
```yml
- name: glossaryId
  in: path
  description: Glossary Identifier.
  required: true
  schema:
    type: integer

```


## glossaries.export.exportOne(glossaryId)
> Start Glossary export

**Parameters**
```yml
- name: glossaryId
  in: path
  description: Glossary Identifier.
  required: true
  schema:
    type: integer

```


## glossaries.export.getDownloadLink(glossaryId, [options])
> Get a Glossary download link

**Parameters**
```yml
- name: glossaryId
  in: path
  description: Glossary Identifier.
  required: true
  schema:
    type: integer
- name: format
  in: query
  description: Defines download format. Default is tbx.
  schema:
    type: string
    enum:
      - tbx
      - csv
      - xlsx

```


## glossaries.export.getExportStatus(glossaryId, exportId)
> Get Glossary export status

**Parameters**
```yml
- name: glossaryId
  in: path
  description: Glossary Identifier.
  required: true
  schema:
    type: integer
- name: exportId
  in: path
  description: 'Export Identifier, consists of 36 characters.'
  required: true
  schema:
    type: string

```


## glossaries.import.importOne(glossaryId)
> Import a Glossary file

**Parameters**
```yml
- name: glossaryId
  in: path
  description: Glossary Identifier.
  required: true
  schema:
    type: integer

```


## glossaries.import.getImportOne(glossaryId, importId)
> Get Glossary import status

**Parameters**
```yml
- name: glossaryId
  in: path
  description: Glossary Identifier.
  required: true
  schema:
    type: integer
- name: importId
  in: path
  description: 'Import Identifier, consists of 36 characters.'
  required: true
  schema:
    type: string

```


## groups.getMany([options])
> List groups

**Parameters**
```yml
- name: parentId
  in: query
  description: Parent group Identifier
  schema:
    type: integer
- name: limit
  in: query
  description: Maximum number of items to retrieve.
  schema:
    type: integer
    default: 25
    maximum: 500
    minimum: 1
- name: offset
  in: query
  description: Starting offset in the collection.
  schema:
    type: integer
    default: 0
    minimum: 0

```


## groups.createOne()
> Create group

**Parameters**
```yml
[]

```


## groups.getOne(groupId)
> Get group

**Parameters**
```yml
- name: groupId
  in: path
  description: A unique identifier for the group.
  required: true
  schema:
    type: integer

```


## groups.deleteOne(groupId)
> Delete Group

**Parameters**
```yml
- name: groupId
  in: path
  description: A unique identifier for the group.
  required: true
  schema:
    type: integer

```


## groups.patchOne(groupId)
> Update group

**Parameters**
```yml
- name: groupId
  in: path
  description: A unique identifier for the group.
  required: true
  schema:
    type: integer

```


## projects.images.background.uploadOne(projectId)
> Upload project background

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer

```


## projects.images.background.deleteOne(projectId)
> Delete project background

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer

```


## projects.images.logo.uploadOne(projectId)
> Upload project logo

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer

```


## projects.images.logo.deleteOne(projectId)
> Delete project logo

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer

```


## issues.getMany(projectId, [options])
> List issues

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: limit
  in: query
  description: Maximum number of items to retrieve.
  schema:
    type: integer
    default: 25
    maximum: 500
    minimum: 1
- name: offset
  in: query
  description: Starting offset in the collection.
  schema:
    type: integer
    default: 0
    minimum: 0
- name: type
  in: query
  description: Defines the issue type.
  schema:
    type: string
    enum:
      - all
      - general_question
      - translation_mistake
      - context_request
      - source_mistake
- name: status
  in: query
  description: Defines the issue resolution status.
  schema:
    type: string
    enum:
      - all
      - resolved
      - unresolved

```


## projects.issues.statistics.getMany(projectId, [options])
> List issue statistics

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: limit
  in: query
  description: Maximum number of items to retrieve.
  schema:
    type: integer
    default: 25
    maximum: 500
    minimum: 1
- name: offset
  in: query
  description: Starting offset in the collection.
  schema:
    type: integer
    default: 0
    minimum: 0
- name: status
  in: query
  description: Defines the issue resolution status.
  schema:
    type: string
    default: all
    enum:
      - resolved
      - unresolved
      - all
- name: languageIds
  in: query
  description: Language identifier for filter.
  schema:
    type: string
    pattern: '^[\d]+(\,[\d]+)*$'

```


## languages.getMany([options])
> List supported languages

**Parameters**
```yml
- name: limit
  in: query
  description: Maximum number of items to retrieve.
  schema:
    type: integer
    default: 25
    maximum: 500
    minimum: 1
- name: offset
  in: query
  description: Starting offset in the collection.
  schema:
    type: integer
    default: 0
    minimum: 0

```


## languages.getOne(languageId)
> Get language

**Parameters**
```yml
- name: languageId
  in: path
  description: Language Identifier.
  required: true
  schema:
    type: integer

```


## projects.preTranslates.preTranslate(projectId)
> Pre-translate project files

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer

```


## projects.preTranslates.getTranslation(projectId, preTranslationId)
> Get status of pre-translation

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: preTranslationId
  in: path
  description: Pre Translate Identifier.
  required: true
  schema:
    type: string

```


## storages.preview.getOne(storageId)
> Get preview

**Parameters**
```yml
- parameter: StorageId
  name: storageId
  in: path
  description: A unique identifier for the storage.
  required: true
  schema:
    type: integer

```


## projects.branches.languages.progress.getMany(projectId, branchId)
> Get branch translation progress

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: branchId
  in: path
  description: Branch Identifier.
  required: true
  schema:
    type: integer

```


## projects.directories.languages.progress.getMany(projectId, directoryId)
> Get directory translation progress

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: directoryId
  in: path
  description: Directory Identifier.
  required: true
  schema:
    type: integer

```


## projects.exportReadyProgress.getMany(projectId, [options])
> Get project translations export status

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: languageIds
  in: query
  description: Language identifier for filter.
  schema:
    type: string
    pattern: '^[\d]+(\,[\d]+)*$'
- name: limit
  in: query
  description: Maximum number of items to retrieve.
  schema:
    type: integer
    default: 25
    maximum: 500
    minimum: 1
- name: offset
  in: query
  description: Starting offset in the collection.
  schema:
    type: integer
    default: 0
    minimum: 0

```


## projects.files.languages.progress.getMany(projectId, fileId)
> Get file translation progress

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: fileId
  in: path
  description: File Identifier.
  required: true
  schema:
    type: integer

```


## projects.languages.progress.getMany(projectId)
> Get project translation progress

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer

```


## projects.getMany([options])
> List projects

**Parameters**
```yml
- name: groupId
  in: query
  description: Group Identifier
  schema:
    type: integer
- name: hasManagerAccess
  in: query
  description: |-
    Projects with Manager Access
     *          0 - false
     *          1 - true
  schema:
    type: integer
    default: 0
    enum:
      - 1
      - 0
- name: limit
  in: query
  description: Maximum number of items to retrieve.
  schema:
    type: integer
    default: 25
    maximum: 500
    minimum: 1
- name: offset
  in: query
  description: Starting offset in the collection.
  schema:
    type: integer
    default: 0
    minimum: 0

```


## projects.createOne()
> Create project

**Parameters**
```yml
[]

```


## projects.getOne(projectId)
> Get project

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer

```


## projects.deleteOne(projectId)
> Delete project

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer

```


## projects.patchOne(projectId)
> Update project

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer

```


## projects.pseudo.builds.getOne(projectId)
> Build pseudo-translation files

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer

```


## projects.pseudo.builds.getStatus(projectId, pseudoTranslationBuildId)
> View pseudo-translation build status

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: pseudoTranslationBuildId
  in: path
  description: 'Pseudo Translation Build Identifier, consists of 36 characters.'
  required: true
  schema:
    type: string

```


## projects.pseudo.getDownloadLink(projectId)
> Get pseudo-translation last build download link

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer

```


## reportTypes.getMany(projectId, [options])
> List supported reports

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: limit
  in: query
  description: Maximum number of items to retrieve.
  schema:
    type: integer
    default: 25
    maximum: 500
    minimum: 1
- name: offset
  in: query
  description: Starting offset in the collection.
  schema:
    type: integer
    default: 0
    minimum: 0

```


## projects.reports.createOne(projectId)
> Generate a report

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer

```


## projects.reports.raw.exportOne(projectId, reportId)
> Export project report raw

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: reportId
  in: path
  description: 'Report Identifier, consists of 36 characters'
  required: true
  schema:
    type: string

```


## projects.files.revisions.getMany(projectId, fileId, [options])
> List file revisions

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: fileId
  in: path
  description: File Identifier.
  required: true
  schema:
    type: integer
- name: limit
  in: query
  description: Maximum number of items to retrieve.
  schema:
    type: integer
    default: 25
    maximum: 500
    minimum: 1
- name: offset
  in: query
  description: Starting offset in the collection.
  schema:
    type: integer
    default: 0
    minimum: 0

```


## projects.files.revisions.createOne(projectId, fileId)
> Create a file revision

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: fileId
  in: path
  description: File Identifier.
  required: true
  schema:
    type: integer

```


## projects.files.revisions.getOne(projectId, fileId, revision)
> Get a file revision

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: fileId
  in: path
  description: File Identifier.
  required: true
  schema:
    type: integer
- name: revision
  in: path
  description: Revision number.
  required: true
  schema:
    type: integer

```


## projects.screenshots.getMany(projectId, [options])
> List screenshots

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: limit
  in: query
  description: Maximum number of items to retrieve.
  schema:
    type: integer
    default: 25
    maximum: 500
    minimum: 1
- name: offset
  in: query
  description: Starting offset in the collection.
  schema:
    type: integer
    default: 0
    minimum: 0

```


## projects.screenshots.createOne(projectId)
> Create a screenshot

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer

```


## projects.screenshots.getOne(projectId, screenshotId)
> Get a screenshot

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: screenshotId
  in: path
  description: Screenshot Identifier.
  required: true
  schema:
    type: integer

```


## projects.screenshots.replaceOne(projectId, screenshotId)
> Replace a screenshot

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: screenshotId
  in: path
  description: Screenshot Identifier.
  required: true
  schema:
    type: integer

```


## projects.screenshots.deleteOne(projectId, screenshotId)
> Delete a screenshot

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: screenshotId
  in: path
  description: Screenshot Identifier.
  required: true
  schema:
    type: integer

```


## projects.screenshots.patchOne(projectId, screenshotId)
> Update a screenshot

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: screenshotId
  in: path
  description: Screenshot Identifier.
  required: true
  schema:
    type: integer

```


## projects.screenshots.tags.getMany(projectId, screenshotId, [options])
> List screenshot tags

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: screenshotId
  in: path
  description: Screenshot Identifier.
  required: true
  schema:
    type: integer
- name: limit
  in: query
  description: Maximum number of items to retrieve.
  schema:
    type: integer
    default: 25
    maximum: 500
    minimum: 1
- name: offset
  in: query
  description: Starting offset in the collection.
  schema:
    type: integer
    default: 0
    minimum: 0

```


## projects.screenshots.tags.replaceAll(projectId, screenshotId)
> Replace all screenshot tags

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: screenshotId
  in: path
  description: Screenshot Identifier.
  required: true
  schema:
    type: integer

```


## projects.screenshots.tags.createOne(projectId, screenshotId)
> Add a tag

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: screenshotId
  in: path
  description: Screenshot Identifier.
  required: true
  schema:
    type: integer

```


## projects.screenshots.tags.deleteAll(projectId, screenshotId)
> Delete all screenshot tags

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: screenshotId
  in: path
  description: Screenshot Identifier.
  required: true
  schema:
    type: integer

```


## projects.screenshots.tags.getOne(projectId, screenshotId, tagId)
> Get a tag

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: screenshotId
  in: path
  description: Screenshot Identifier.
  required: true
  schema:
    type: integer
- name: tagId
  in: path
  description: >-
    Screenshot’s tag identifier. Use List screenshots or Get screenshots method
    to get the tag identifier..
  required: true
  schema:
    type: integer

```


## projects.screenshots.tags.deleteOne(projectId, screenshotId, tagId)
> Delete a tag

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: screenshotId
  in: path
  description: Screenshot Identifier.
  required: true
  schema:
    type: integer
- name: tagId
  in: path
  description: >-
    Screenshot’s tag identifier. Use List screenshots or Get screenshots method
    to get the tag identifier..
  required: true
  schema:
    type: integer

```


## projects.screenshots.tags.patchOne(projectId, screenshotId, tagId)
> Update a tag

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: screenshotId
  in: path
  description: Screenshot Identifier.
  required: true
  schema:
    type: integer
- name: tagId
  in: path
  description: >-
    Screenshot’s tag identifier. Use List screenshots or Get screenshots method
    to get the tag identifier..
  required: true
  schema:
    type: integer

```


## projects.settings.getOne(projectId)
> Get project settings

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer

```


## projects.settings.patchOne(projectId)
> Update project settings

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer

```


## storages.getAll(storageId)
> List user storages

**Parameters**
```yml
- parameter: StorageId
  name: storageId
  in: path
  description: A unique identifier for the storage.
  required: true
  schema:
    type: integer

```


## storages.uploadOne()
> Upload a file

**Parameters**
```yml
- name: Content-Type
  in: header
  description: File content type
  required: true
  schema:
    type: string

```


## storages.getOne(storageId)
> Get storage

**Parameters**
```yml
- parameter: StorageId
  name: storageId
  in: path
  description: A unique identifier for the storage.
  required: true
  schema:
    type: integer

```


## storages.deleteOne(storageId)
> Delete Storage

**Parameters**
```yml
- parameter: StorageId
  name: storageId
  in: path
  description: A unique identifier for the storage.
  required: true
  schema:
    type: integer

```


## projects.strings.createOne(projectId)
> Create a project string

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer

```


## projects.strings.getOne(projectId, stringId)
> Get a project string

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: stringId
  in: path
  description: String Identifier.
  required: true
  schema:
    type: integer

```


## projects.strings.deleteOne(projectId, stringId)
> Delete a project string

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: stringId
  in: path
  description: String Identifier.
  required: true
  schema:
    type: integer

```


## projects.strings.patchOne(projectId, stringId)
> Update a project string

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: stringId
  in: path
  description: String Identifier.
  required: true
  schema:
    type: integer

```


## projects.tasks.getMany(projectId, [options])
> List tasks

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: limit
  in: query
  description: Maximum number of items to retrieve.
  schema:
    type: integer
    default: 25
    maximum: 500
    minimum: 1
- name: offset
  in: query
  description: Starting offset in the collection.
  schema:
    type: integer
    default: 0
    minimum: 0

```


## projects.tasks.createOne(projectId)
> Create a task

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer

```


## projects.tasks.getOne(projectId, taskId)
> Get a task

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: taskId
  in: path
  description: Task Identifier.
  required: true
  schema:
    type: integer

```


## projects.tasks.deleteOne(projectId, taskId)
> Delete a task

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: taskId
  in: path
  description: Task Identifier.
  required: true
  schema:
    type: integer

```


## projects.tasks.patchOne(projectId, taskId)
> Update a task

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: taskId
  in: path
  description: Task Identifier.
  required: true
  schema:
    type: integer

```


## projects.tasks.statistics.getMany(projectId, [options])
> List of task statistic

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: limit
  in: query
  description: Maximum number of items to retrieve.
  schema:
    type: integer
    default: 25
    maximum: 500
    minimum: 1
- name: offset
  in: query
  description: Starting offset in the collection.
  schema:
    type: integer
    default: 0
    minimum: 0
- name: status
  in: query
  description: |-
    Defines the task resolution status:
     * 0 - todo
     * 1 - in_progress
     * 2 - done
     * 3 - closed
     * 4 - archived
     * 5 - overdue
  schema:
    type: integer
    enum:
      - 0
      - 1
      - 2
      - 3
      - 4
      - 5
- name: languageIds
  in: query
  description: Language identifier for filter.
  schema:
    type: string
    pattern: '^[\d]+(\,[\d]+)*$'

```


## glossaries.terms.getMany(glossaryId, [options])
> List terms

**Parameters**
```yml
- name: glossaryId
  in: path
  description: Glossary Identifier.
  required: true
  schema:
    type: integer
- name: userId
  in: query
  description: User Identifier.
  schema:
    type: integer
- name: limit
  in: query
  description: Maximum number of items to retrieve.
  schema:
    type: integer
    default: 25
    maximum: 500
    minimum: 1
- name: offset
  in: query
  description: Starting offset in the collection.
  schema:
    type: integer
    default: 0
    minimum: 0

```


## glossary.terms.createOne(glossaryId)
> Create a term

**Parameters**
```yml
- name: glossaryId
  in: path
  description: Glossary Identifier.
  required: true
  schema:
    type: integer

```


## glossaries.terms.getOne(glossaryId, termId)
> Get a term

**Parameters**
```yml
- name: glossaryId
  in: path
  description: Glossary Identifier.
  required: true
  schema:
    type: integer
- name: termId
  in: path
  description: Term Identifier.
  required: true
  schema:
    type: integer

```


## glossaries.terms.deleteOne(glossaryId, termId)
> Delete a term

**Parameters**
```yml
- name: glossaryId
  in: path
  description: Glossary Identifier.
  required: true
  schema:
    type: integer
- name: termId
  in: path
  description: Term Identifier.
  required: true
  schema:
    type: integer

```


## glossaries.terms.patchOne(glossaryId, termId)
> Update a term

**Parameters**
```yml
- name: glossaryId
  in: path
  description: Glossary Identifier.
  required: true
  schema:
    type: integer
- name: termId
  in: path
  description: Term Identifier.
  required: true
  schema:
    type: integer

```


## tms.getList([options])
> List TMs

**Parameters**
```yml
- name: groupId
  in: query
  description: A unique identifier for the group.
  required: true
  schema:
    type: integer
- name: limit
  in: query
  description: Maximum number of items to retrieve.
  schema:
    type: integer
    default: 25
    maximum: 500
    minimum: 1
- name: offset
  in: query
  description: Starting offset in the collection.
  schema:
    type: integer
    default: 0
    minimum: 0

```


## tms.uploadOne()
> Create a TM

**Parameters**
```yml
[]

```


## tms.getOne(tmId)
> Get a TM

**Parameters**
```yml
- name: tmId
  in: path
  description: TM Identifier.
  required: true
  schema:
    type: integer

```


## tms.deleteOne(tmId)
> Delete a TM

**Parameters**
```yml
- name: tmId
  in: path
  description: TM Identifier.
  required: true
  schema:
    type: integer

```


## tms.patchOne(tmId)
> Update a TM

**Parameters**
```yml
- name: tmId
  in: path
  description: TM Identifier.
  required: true
  schema:
    type: integer

```


## tms.downloadOne(tmId, [options])
> Get a TM download link

**Parameters**
```yml
- name: tmId
  in: path
  description: TM Identifier.
  required: true
  schema:
    type: integer
- name: sourceLanguageId
  in: query
  description: Defines a source language in the language pair.
  schema:
    type: integer
- name: targetLanguageId
  in: query
  description: Defines a target language in the language pair.
  schema:
    type: integer
- name: format
  in: query
  description: Defines the format of TMs file. Default is tmx.
  schema:
    type: string

```


## tms.exportOne(tmId)
> Start TM export

**Parameters**
```yml
- name: tmId
  in: path
  description: TM Identifier.
  required: true
  schema:
    type: integer

```


## tms.export.getOne(tmId, exportId)
> Get TM export status

**Parameters**
```yml
- name: tmId
  in: path
  description: TM Identifier.
  required: true
  schema:
    type: integer
- name: exportId
  in: path
  description: 'Export Identifier, consists of 36 characters.'
  required: true
  schema:
    type: string

```


## tms.upload(tmId)
> Upload a TM

**Parameters**
```yml
- name: tmId
  in: path
  description: TM Identifier.
  required: true
  schema:
    type: integer

```


## tms.upload.jobByTm(tmId, importId)
> Get TM import status 

**Parameters**
```yml
- name: tmId
  in: path
  description: TM Identifier.
  required: true
  schema:
    type: integer
- name: importId
  in: path
  description: 'Import Identifier, consists of 36 characters.'
  required: true
  schema:
    type: string

```


## projects.translations.builds.getList([options])
> List project builds

**Parameters**
```yml
- name: branchId
  in: query
  description: Filter builds by branchId
  schema:
    type: integer
- name: limit
  in: query
  description: Maximum number of items to retrieve.
  schema:
    type: integer
    default: 25
    maximum: 500
    minimum: 1
- name: offset
  in: query
  description: Starting offset in the collection.
  schema:
    type: integer
    default: 0
    minimum: 0

```


## projects.translations.builds.init(projectId)
> Build transaltions

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer

```


## projects.translations.builds.getDownloadLink(projectId, buildId)
> Download translations URL

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: buildId
  in: path
  description: Project Build Identifier.
  required: true
  schema:
    type: integer

```


## projects.translations.builds.getOne(projectId, buildId)
> Get project build info

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: buildId
  in: path
  description: Project Build Identifier.
  required: true
  schema:
    type: integer

```


## projects.translations.builds.cancel(projectId, buildId)
> Cancel project build

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: buildId
  in: path
  description: Project Build Identifier.
  required: true
  schema:
    type: integer

```


## projects.translations.initByLanguage(projectId, languageId)
> Upload translation for a specified language

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: languageId
  in: path
  description: Language Identifier.
  required: true
  schema:
    type: integer

```


## projects.webhooks.getMany(projectId, [options])
> List webhooks

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: limit
  in: query
  description: Maximum number of items to retrieve.
  schema:
    type: integer
    default: 25
    maximum: 500
    minimum: 1
- name: offset
  in: query
  description: Starting offset in the collection.
  schema:
    type: integer
    default: 0
    minimum: 0

```


## projects.webhooks.createOne(projectId)
> Create a webhook

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer

```


## projects.webhooks.getOne(projectId, webhookId)
> Get a webhook

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: webhookId
  in: path
  description: Webhook Identifier.
  required: true
  schema:
    type: integer

```


## projects.webhooks.deleteOne(projectId, webhookId)
> Delete a webhook

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: webhookId
  in: path
  description: Webhook Identifier.
  required: true
  schema:
    type: integer

```


## projects.webhooks.patchOne(projectId, webhookId)
> Update a webhook

**Parameters**
```yml
- name: projectId
  in: path
  description: Project Identifier.
  required: true
  schema:
    type: integer
- name: webhookId
  in: path
  description: Webhook Identifier.
  required: true
  schema:
    type: integer

```
