var Foo = {
    "(0000,0000)": {
        "vr": "UL",
        "name": "CommandGroupLength",
        "vm": "1",
    },
    "(0000,0002)": {
        "vr": "UI",
        "name": "AffectedSOPClassUID",
        "vm": "1",
    },
    "(0000,0003)": {
        "vr": "UI",
        "name": "RequestedSOPClassUID",
        "vm": "1",
    },
    "(0000,0100)": {
        "vr": "US",
        "name": "CommandField",
        "vm": "1",
    },
    "(0000,0110)": {
        "vr": "US",
        "name": "MessageID",
        "vm": "1",
    },
    "(0000,0120)": {
        "vr": "US",
        "name": "MessageIDBeingRespondedTo",
        "vm": "1",
    },
    "(0000,0600)": {
        "vr": "AE",
        "name": "MoveDestination",
        "vm": "1",
    },
    "(0000,0700)": {
        "vr": "US",
        "name": "Priority",
        "vm": "1",
    },
    "(0000,0800)": {
        "vr": "US",
        "name": "CommandDataSetType",
        "vm": "1",
    },
    "(0000,0900)": {
        "vr": "US",
        "name": "Status",
        "vm": "1",
    },
    "(0000,0901)": {
        "vr": "AT",
        "name": "OffendingElement",
        "vm": "1-n",
    },
    "(0000,0902)": {
        "vr": "LO",
        "name": "ErrorComment",
        "vm": "1",
    },
    "(0000,0903)": {
        "vr": "US",
        "name": "ErrorID",
        "vm": "1",
    },
    "(0000,1000)": {
        "vr": "UI",
        "name": "AffectedSOPInstanceUID",
        "vm": "1",
    },
    "(0000,1001)": {
        "vr": "UI",
        "name": "RequestedSOPInstanceUID",
        "vm": "1",
    },
    "(0000,1002)": {
        "vr": "US",
        "name": "EventTypeID",
        "vm": "1",
    },
    "(0000,1005)": {
        "vr": "AT",
        "name": "AttributeIdentifierList",
        "vm": "1-n",
    },
    "(0000,1008)": {
        "vr": "US",
        "name": "ActionTypeID",
        "vm": "1",
    },
    "(0000,1020)": {
        "vr": "US",
        "name": "NumberOfRemainingSuboperations",
        "vm": "1",
    },
    "(0000,1021)": {
        "vr": "US",
        "name": "NumberOfCompletedSuboperations",
        "vm": "1",
    },
    "(0000,1022)": {
        "vr": "US",
        "name": "NumberOfFailedSuboperations",
        "vm": "1",
    },
    "(0000,1023)": {
        "vr": "US",
        "name": "NumberOfWarningSuboperations",
        "vm": "1",
    },
    "(0000,1030)": {
        "vr": "AE",
        "name": "MoveOriginatorApplicationEntityTitle",
        "vm": "1",
    },
    "(0000,1031)": {
        "vr": "US",
        "name": "MoveOriginatorMessageID",
        "vm": "1",
    },
    "(0002,0000)": {
        "vr": "UL",
        "name": "FileMetaInformationGroupLength",
        "vm": "1",
    },
    "(0002,0001)": {
        "vr": "OB",
        "name": "FileMetaInformationVersion",
        "vm": "1",
    },
    "(0002,0002)": {
        "vr": "UI",
        "name": "MediaStorageSOPClassUID",
        "vm": "1",
    },
    "(0002,0003)": {
        "vr": "UI",
        "name": "MediaStorageSOPInstanceUID",
        "vm": "1",
    },
    "(0002,0010)": {
        "vr": "UI",
        "name": "TransferSyntaxUID",
        "vm": "1",
    },
    "(0002,0012)": {
        "vr": "UI",
        "name": "ImplementationClassUID",
        "vm": "1",
    },
    "(0002,0013)": {
        "vr": "SH",
        "name": "ImplementationVersionName",
        "vm": "1",
    },
    "(0002,0016)": {
        "vr": "AE",
        "name": "SourceApplicationEntityTitle",
        "vm": "1",
    },
    "(0002,0017)": {
        "vr": "AE",
        "name": "SendingApplicationEntityTitle",
        "vm": "1",
    },
    "(0002,0018)": {
        "vr": "AE",
        "name": "ReceivingApplicationEntityTitle",
        "vm": "1",
    },
    "(0002,0100)": {
        "vr": "UI",
        "name": "PrivateInformationCreatorUID",
        "vm": "1",
    },
    "(0002,0102)": {
        "vr": "OB",
        "name": "PrivateInformation",
        "vm": "1",
    },
    "(0004,1130)": {
        "vr": "CS",
        "name": "FileSetID",
        "vm": "1",
    },
    "(0004,1141)": {
        "vr": "CS",
        "name": "FileSetDescriptorFileID",
        "vm": "1-8",
    },
    "(0004,1142)": {
        "vr": "CS",
        "name": "SpecificCharacterSetOfFileSetDescriptorFile",
        "vm": "1",
    },
    "(0004,1200)": {
        "vr": "up",
        "name": "OffsetOfTheFirstDirectoryRecordOfTheRootDirectoryEntity",
        "vm": "1",
    },
    "(0004,1202)": {
        "vr": "up",
        "name": "OffsetOfTheLastDirectoryRecordOfTheRootDirectoryEntity",
        "vm": "1",
    },
    "(0004,1212)": {
        "vr": "US",
        "name": "FileSetConsistencyFlag",
        "vm": "1",
    },
    "(0004,1220)": {
        "vr": "SQ",
        "name": "DirectoryRecordSequence",
        "vm": "1",
    },
    "(0004,1400)": {
        "vr": "up",
        "name": "OffsetOfTheNextDirectoryRecord",
        "vm": "1",
    },
    "(0004,1410)": {
        "vr": "US",
        "name": "RecordInUseFlag",
        "vm": "1",
    },
    "(0004,1420)": {
        "vr": "up",
        "name": "OffsetOfReferencedLowerLevelDirectoryEntity",
        "vm": "1",
    },
    "(0004,1430)": {
        "vr": "CS",
        "name": "DirectoryRecordType",
        "vm": "1",
    },
    "(0004,1432)": {
        "vr": "UI",
        "name": "PrivateRecordUID",
        "vm": "1",
    },
    "(0004,1500)": {
        "vr": "CS",
        "name": "ReferencedFileID",
        "vm": "1-8",
    },
    "(0004,1510)": {
        "vr": "UI",
        "name": "ReferencedSOPClassUIDInFile",
        "vm": "1",
    },
    "(0004,1511)": {
        "vr": "UI",
        "name": "ReferencedSOPInstanceUIDInFile",
        "vm": "1",
    },
    "(0004,1512)": {
        "vr": "UI",
        "name": "ReferencedTransferSyntaxUIDInFile",
        "vm": "1",
    },
    "(0004,151A)": {
        "vr": "UI",
        "name": "ReferencedRelatedGeneralSOPClassUIDInFile",
        "vm": "1-n",
    },
    "(0008,0005)": {
        "vr": "CS",
        "name": "SpecificCharacterSet",
        "vm": "1-n",
    },
    "(0008,0006)": {
        "vr": "SQ",
        "name": "LanguageCodeSequence",
        "vm": "1",
    },
    "(0008,0008)": {
        "vr": "CS",
        "name": "ImageType",
        "vm": "2-n",
    },
    "(0008,0012)": {
        "vr": "DA",
        "name": "InstanceCreationDate",
        "vm": "1",
    },
    "(0008,0013)": {
        "vr": "TM",
        "name": "InstanceCreationTime",
        "vm": "1",
    },
    "(0008,0014)": {
        "vr": "UI",
        "name": "InstanceCreatorUID",
        "vm": "1",
    },
    "(0008,0015)": {
        "vr": "DT",
        "name": "InstanceCoercionDateTime",
        "vm": "1",
    },
    "(0008,0016)": {
        "vr": "UI",
        "name": "SOPClassUID",
        "vm": "1",
    },
    "(0008,0018)": {
        "vr": "UI",
        "name": "SOPInstanceUID",
        "vm": "1",
    },
    "(0008,001A)": {
        "vr": "UI",
        "name": "RelatedGeneralSOPClassUID",
        "vm": "1-n",
    },
    "(0008,001B)": {
        "vr": "UI",
        "name": "OriginalSpecializedSOPClassUID",
        "vm": "1",
    },
    "(0008,0020)": {
        "vr": "DA",
        "name": "StudyDate",
        "vm": "1",
    },
    "(0008,0021)": {
        "vr": "DA",
        "name": "SeriesDate",
        "vm": "1",
    },
    "(0008,0022)": {
        "vr": "DA",
        "name": "AcquisitionDate",
        "vm": "1",
    },
    "(0008,0023)": {
        "vr": "DA",
        "name": "ContentDate",
        "vm": "1",
    },
    "(0008,002A)": {
        "vr": "DT",
        "name": "AcquisitionDateTime",
        "vm": "1",
    },
    "(0008,0030)": {
        "vr": "TM",
        "name": "StudyTime",
        "vm": "1",
    },
    "(0008,0031)": {
        "vr": "TM",
        "name": "SeriesTime",
        "vm": "1",
    },
    "(0008,0032)": {
        "vr": "TM",
        "name": "AcquisitionTime",
        "vm": "1",
    },
    "(0008,0033)": {
        "vr": "TM",
        "name": "ContentTime",
        "vm": "1",
    },
    "(0008,0050)": {
        "vr": "SH",
        "name": "AccessionNumber",
        "vm": "1",
    },
    "(0008,0051)": {
        "vr": "SQ",
        "name": "IssuerOfAccessionNumberSequence",
        "vm": "1",
    },
    "(0008,0052)": {
        "vr": "CS",
        "name": "QueryRetrieveLevel",
        "vm": "1",
    },
    "(0008,0053)": {
        "vr": "CS",
        "name": "QueryRetrieveView",
        "vm": "1",
    },
    "(0008,0054)": {
        "vr": "AE",
        "name": "RetrieveAETitle",
        "vm": "1-n",
    },
    "(0008,0056)": {
        "vr": "CS",
        "name": "InstanceAvailability",
        "vm": "1",
    },
    "(0008,0058)": {
        "vr": "UI",
        "name": "FailedSOPInstanceUIDList",
        "vm": "1-n",
    },
    "(0008,0060)": {
        "vr": "CS",
        "name": "Modality",
        "vm": "1",
    },
    "(0008,0061)": {
        "vr": "CS",
        "name": "ModalitiesInStudy",
        "vm": "1-n",
    },
    "(0008,0062)": {
        "vr": "UI",
        "name": "SOPClassesInStudy",
        "vm": "1-n",
    },
    "(0008,0064)": {
        "vr": "CS",
        "name": "ConversionType",
        "vm": "1",
    },
    "(0008,0068)": {
        "vr": "CS",
        "name": "PresentationIntentType",
        "vm": "1",
    },
    "(0008,0070)": {
        "vr": "LO",
        "name": "Manufacturer",
        "vm": "1",
    },
    "(0008,0080)": {
        "vr": "LO",
        "name": "InstitutionName",
        "vm": "1",
    },
    "(0008,0081)": {
        "vr": "ST",
        "name": "InstitutionAddress",
        "vm": "1",
    },
    "(0008,0082)": {
        "vr": "SQ",
        "name": "InstitutionCodeSequence",
        "vm": "1",
    },
    "(0008,0090)": {
        "vr": "PN",
        "name": "ReferringPhysicianName",
        "vm": "1",
    },
    "(0008,0092)": {
        "vr": "ST",
        "name": "ReferringPhysicianAddress",
        "vm": "1",
    },
    "(0008,0094)": {
        "vr": "SH",
        "name": "ReferringPhysicianTelephoneNumbers",
        "vm": "1-n",
    },
    "(0008,0096)": {
        "vr": "SQ",
        "name": "ReferringPhysicianIdentificationSequence",
        "vm": "1",
    },
    "(0008,009C)": {
        "vr": "PN",
        "name": "ConsultingPhysicianName",
        "vm": "1-n",
    },
    "(0008,009D)": {
        "vr": "SQ",
        "name": "ConsultingPhysicianIdentificationSequence",
        "vm": "1",
    },
    "(0008,0100)": {
        "vr": "SH",
        "name": "CodeValue",
        "vm": "1",
    },
    "(0008,0101)": {
        "vr": "LO",
        "name": "ExtendedCodeValue",
        "vm": "1",
    },
    "(0008,0102)": {
        "vr": "SH",
        "name": "CodingSchemeDesignator",
        "vm": "1",
    },
    "(0008,0103)": {
        "vr": "SH",
        "name": "CodingSchemeVersion",
        "vm": "1",
    },
    "(0008,0104)": {
        "vr": "LO",
        "name": "CodeMeaning",
        "vm": "1",
    },
    "(0008,0105)": {
        "vr": "CS",
        "name": "MappingResource",
        "vm": "1",
    },
    "(0008,0106)": {
        "vr": "DT",
        "name": "ContextGroupVersion",
        "vm": "1",
    },
    "(0008,0107)": {
        "vr": "DT",
        "name": "ContextGroupLocalVersion",
        "vm": "1",
    },
    "(0008,0108)": {
        "vr": "LT",
        "name": "ExtendedCodeMeaning",
        "vm": "1",
    },
    "(0008,010B)": {
        "vr": "CS",
        "name": "ContextGroupExtensionFlag",
        "vm": "1",
    },
    "(0008,010C)": {
        "vr": "UI",
        "name": "CodingSchemeUID",
        "vm": "1",
    },
    "(0008,010D)": {
        "vr": "UI",
        "name": "ContextGroupExtensionCreatorUID",
        "vm": "1",
    },
    "(0008,010F)": {
        "vr": "CS",
        "name": "ContextIdentifier",
        "vm": "1",
    },
    "(0008,0110)": {
        "vr": "SQ",
        "name": "CodingSchemeIdentificationSequence",
        "vm": "1",
    },
    "(0008,0112)": {
        "vr": "LO",
        "name": "CodingSchemeRegistry",
        "vm": "1",
    },
    "(0008,0114)": {
        "vr": "ST",
        "name": "CodingSchemeExternalID",
        "vm": "1",
    },
    "(0008,0115)": {
        "vr": "ST",
        "name": "CodingSchemeName",
        "vm": "1",
    },
    "(0008,0116)": {
        "vr": "ST",
        "name": "CodingSchemeResponsibleOrganization",
        "vm": "1",
    },
    "(0008,0117)": {
        "vr": "UI",
        "name": "ContextUID",
        "vm": "1",
    },
    "(0008,0118)": {
        "vr": "UI",
        "name": "MappingResourceUID",
        "vm": "1",
    },
    "(0008,0119)": {
        "vr": "UC",
        "name": "LongCodeValue",
        "vm": "1",
    },
    "(0008,0120)": {
        "vr": "UR",
        "name": "URNCodeValue",
        "vm": "1",
    },
    "(0008,0121)": {
        "vr": "SQ",
        "name": "EquivalentCodeSequence",
        "vm": "1",
    },
    "(0008,0201)": {
        "vr": "SH",
        "name": "TimezoneOffsetFromUTC",
        "vm": "1",
    },
    "(0008,0300)": {
        "vr": "SQ",
        "name": "PrivateDataElementCharacteristicsSequence",
        "vm": "1",
    },
    "(0008,0301)": {
        "vr": "US",
        "name": "PrivateGroupReference",
        "vm": "1",
    },
    "(0008,0302)": {
        "vr": "LO",
        "name": "PrivateCreatorReference",
        "vm": "1",
    },
    "(0008,0303)": {
        "vr": "CS",
        "name": "BlockIdentifyingInformationStatus",
        "vm": "1",
    },
    "(0008,0304)": {
        "vr": "US",
        "name": "NonidentifyingPrivateElements",
        "vm": "1-n",
    },
    "(0008,0305)": {
        "vr": "SQ",
        "name": "DeidentificationActionSequence",
        "vm": "1",
    },
    "(0008,0306)": {
        "vr": "US",
        "name": "IdentifyingPrivateElements",
        "vm": "1-n",
    },
    "(0008,0307)": {
        "vr": "CS",
        "name": "DeidentificationAction",
        "vm": "1",
    },
    "(0008,1010)": {
        "vr": "SH",
        "name": "StationName",
        "vm": "1",
    },
    "(0008,1030)": {
        "vr": "LO",
        "name": "StudyDescription",
        "vm": "1",
    },
    "(0008,1032)": {
        "vr": "SQ",
        "name": "ProcedureCodeSequence",
        "vm": "1",
    },
    "(0008,103E)": {
        "vr": "LO",
        "name": "SeriesDescription",
        "vm": "1",
    },
    "(0008,103F)": {
        "vr": "SQ",
        "name": "SeriesDescriptionCodeSequence",
        "vm": "1",
    },
    "(0008,1040)": {
        "vr": "LO",
        "name": "InstitutionalDepartmentName",
        "vm": "1",
    },
    "(0008,1048)": {
        "vr": "PN",
        "name": "PhysiciansOfRecord",
        "vm": "1-n",
    },
    "(0008,1049)": {
        "vr": "SQ",
        "name": "PhysiciansOfRecordIdentificationSequence",
        "vm": "1",
    },
    "(0008,1050)": {
        "vr": "PN",
        "name": "PerformingPhysicianName",
        "vm": "1-n",
    },
    "(0008,1052)": {
        "vr": "SQ",
        "name": "PerformingPhysicianIdentificationSequence",
        "vm": "1",
    },
    "(0008,1060)": {
        "vr": "PN",
        "name": "NameOfPhysiciansReadingStudy",
        "vm": "1-n",
    },
    "(0008,1062)": {
        "vr": "SQ",
        "name": "PhysiciansReadingStudyIdentificationSequence",
        "vm": "1",
    },
    "(0008,1070)": {
        "vr": "PN",
        "name": "OperatorsName",
        "vm": "1-n",
    },
    "(0008,1072)": {
        "vr": "SQ",
        "name": "OperatorIdentificationSequence",
        "vm": "1",
    },
    "(0008,1080)": {
        "vr": "LO",
        "name": "AdmittingDiagnosesDescription",
        "vm": "1-n",
    },
    "(0008,1084)": {
        "vr": "SQ",
        "name": "AdmittingDiagnosesCodeSequence",
        "vm": "1",
    },
    "(0008,1090)": {
        "vr": "LO",
        "name": "ManufacturerModelName",
        "vm": "1",
    },
    "(0008,1110)": {
        "vr": "SQ",
        "name": "ReferencedStudySequence",
        "vm": "1",
    },
    "(0008,1111)": {
        "vr": "SQ",
        "name": "ReferencedPerformedProcedureStepSequence",
        "vm": "1",
    },
    "(0008,1115)": {
        "vr": "SQ",
        "name": "ReferencedSeriesSequence",
        "vm": "1",
    },
    "(0008,1120)": {
        "vr": "SQ",
        "name": "ReferencedPatientSequence",
        "vm": "1",
    },
    "(0008,1125)": {
        "vr": "SQ",
        "name": "ReferencedVisitSequence",
        "vm": "1",
    },
    "(0008,1134)": {
        "vr": "SQ",
        "name": "ReferencedStereometricInstanceSequence",
        "vm": "1",
    },
    "(0008,113A)": {
        "vr": "SQ",
        "name": "ReferencedWaveformSequence",
        "vm": "1",
    },
    "(0008,1140)": {
        "vr": "SQ",
        "name": "ReferencedImageSequence",
        "vm": "1",
    },
    "(0008,114A)": {
        "vr": "SQ",
        "name": "ReferencedInstanceSequence",
        "vm": "1",
    },
    "(0008,114B)": {
        "vr": "SQ",
        "name": "ReferencedRealWorldValueMappingInstanceSequence",
        "vm": "1",
    },
    "(0008,1150)": {
        "vr": "UI",
        "name": "ReferencedSOPClassUID",
        "vm": "1",
    },
    "(0008,1155)": {
        "vr": "UI",
        "name": "ReferencedSOPInstanceUID",
        "vm": "1",
    },
    "(0008,115A)": {
        "vr": "UI",
        "name": "SOPClassesSupported",
        "vm": "1-n",
    },
    "(0008,1160)": {
        "vr": "IS",
        "name": "ReferencedFrameNumber",
        "vm": "1-n",
    },
    "(0008,1161)": {
        "vr": "UL",
        "name": "SimpleFrameList",
        "vm": "1-n",
    },
    "(0008,1162)": {
        "vr": "UL",
        "name": "CalculatedFrameList",
        "vm": "3-3n",
    },
    "(0008,1163)": {
        "vr": "FD",
        "name": "TimeRange",
        "vm": "2",
    },
    "(0008,1164)": {
        "vr": "SQ",
        "name": "FrameExtractionSequence",
        "vm": "1",
    },
    "(0008,1167)": {
        "vr": "UI",
        "name": "MultiFrameSourceSOPInstanceUID",
        "vm": "1",
    },
    "(0008,1190)": {
        "vr": "UR",
        "name": "RetrieveURL",
        "vm": "1",
    },
    "(0008,1195)": {
        "vr": "UI",
        "name": "TransactionUID",
        "vm": "1",
    },
    "(0008,1196)": {
        "vr": "US",
        "name": "WarningReason",
        "vm": "1",
    },
    "(0008,1197)": {
        "vr": "US",
        "name": "FailureReason",
        "vm": "1",
    },
    "(0008,1198)": {
        "vr": "SQ",
        "name": "FailedSOPSequence",
        "vm": "1",
    },
    "(0008,1199)": {
        "vr": "SQ",
        "name": "ReferencedSOPSequence",
        "vm": "1",
    },
    "(0008,1200)": {
        "vr": "SQ",
        "name": "StudiesContainingOtherReferencedInstancesSequence",
        "vm": "1",
    },
    "(0008,1250)": {
        "vr": "SQ",
        "name": "RelatedSeriesSequence",
        "vm": "1",
    },
    "(0008,2111)": {
        "vr": "ST",
        "name": "DerivationDescription",
        "vm": "1",
    },
    "(0008,2112)": {
        "vr": "SQ",
        "name": "SourceImageSequence",
        "vm": "1",
    },
    "(0008,2120)": {
        "vr": "SH",
        "name": "StageName",
        "vm": "1",
    },
    "(0008,2122)": {
        "vr": "IS",
        "name": "StageNumber",
        "vm": "1",
    },
    "(0008,2124)": {
        "vr": "IS",
        "name": "NumberOfStages",
        "vm": "1",
    },
    "(0008,2127)": {
        "vr": "SH",
        "name": "ViewName",
        "vm": "1",
    },
    "(0008,2128)": {
        "vr": "IS",
        "name": "ViewNumber",
        "vm": "1",
    },
    "(0008,2129)": {
        "vr": "IS",
        "name": "NumberOfEventTimers",
        "vm": "1",
    },
    "(0008,212A)": {
        "vr": "IS",
        "name": "NumberOfViewsInStage",
        "vm": "1",
    },
    "(0008,2130)": {
        "vr": "DS",
        "name": "EventElapsedTimes",
        "vm": "1-n",
    },
    "(0008,2132)": {
        "vr": "LO",
        "name": "EventTimerNames",
        "vm": "1-n",
    },
    "(0008,2133)": {
        "vr": "SQ",
        "name": "EventTimerSequence",
        "vm": "1",
    },
    "(0008,2134)": {
        "vr": "FD",
        "name": "EventTimeOffset",
        "vm": "1",
    },
    "(0008,2135)": {
        "vr": "SQ",
        "name": "EventCodeSequence",
        "vm": "1",
    },
    "(0008,2142)": {
        "vr": "IS",
        "name": "StartTrim",
        "vm": "1",
    },
    "(0008,2143)": {
        "vr": "IS",
        "name": "StopTrim",
        "vm": "1",
    },
    "(0008,2144)": {
        "vr": "IS",
        "name": "RecommendedDisplayFrameRate",
        "vm": "1",
    },
    "(0008,2218)": {
        "vr": "SQ",
        "name": "AnatomicRegionSequence",
        "vm": "1",
    },
    "(0008,2220)": {
        "vr": "SQ",
        "name": "AnatomicRegionModifierSequence",
        "vm": "1",
    },
    "(0008,2228)": {
        "vr": "SQ",
        "name": "PrimaryAnatomicStructureSequence",
        "vm": "1",
    },
    "(0008,2229)": {
        "vr": "SQ",
        "name": "AnatomicStructureSpaceOrRegionSequence",
        "vm": "1",
    },
    "(0008,2230)": {
        "vr": "SQ",
        "name": "PrimaryAnatomicStructureModifierSequence",
        "vm": "1",
    },
    "(0008,3001)": {
        "vr": "SQ",
        "name": "AlternateRepresentationSequence",
        "vm": "1",
    },
    "(0008,3010)": {
        "vr": "UI",
        "name": "IrradiationEventUID",
        "vm": "1-n",
    },
    "(0008,3011)": {
        "vr": "SQ",
        "name": "SourceIrradiationEventSequence",
        "vm": "1",
    },
    "(0008,3012)": {
        "vr": "UI",
        "name": "RadiopharmaceuticalAdministrationEventUID",
        "vm": "1",
    },
    "(0008,9007)": {
        "vr": "CS",
        "name": "FrameType",
        "vm": "4",
    },
    "(0008,9092)": {
        "vr": "SQ",
        "name": "ReferencedImageEvidenceSequence",
        "vm": "1",
    },
    "(0008,9121)": {
        "vr": "SQ",
        "name": "ReferencedRawDataSequence",
        "vm": "1",
    },
    "(0008,9123)": {
        "vr": "UI",
        "name": "CreatorVersionUID",
        "vm": "1",
    },
    "(0008,9124)": {
        "vr": "SQ",
        "name": "DerivationImageSequence",
        "vm": "1",
    },
    "(0008,9154)": {
        "vr": "SQ",
        "name": "SourceImageEvidenceSequence",
        "vm": "1",
    },
    "(0008,9205)": {
        "vr": "CS",
        "name": "PixelPresentation",
        "vm": "1",
    },
    "(0008,9206)": {
        "vr": "CS",
        "name": "VolumetricProperties",
        "vm": "1",
    },
    "(0008,9207)": {
        "vr": "CS",
        "name": "VolumeBasedCalculationTechnique",
        "vm": "1",
    },
    "(0008,9208)": {
        "vr": "CS",
        "name": "ComplexImageComponent",
        "vm": "1",
    },
    "(0008,9209)": {
        "vr": "CS",
        "name": "AcquisitionContrast",
        "vm": "1",
    },
    "(0008,9215)": {
        "vr": "SQ",
        "name": "DerivationCodeSequence",
        "vm": "1",
    },
    "(0008,9237)": {
        "vr": "SQ",
        "name": "ReferencedPresentationStateSequence",
        "vm": "1",
    },
    "(0008,9410)": {
        "vr": "SQ",
        "name": "ReferencedOtherPlaneSequence",
        "vm": "1",
    },
    "(0008,9458)": {
        "vr": "SQ",
        "name": "FrameDisplaySequence",
        "vm": "1",
    },
    "(0008,9459)": {
        "vr": "FL",
        "name": "RecommendedDisplayFrameRateInFloat",
        "vm": "1",
    },
    "(0008,9460)": {
        "vr": "CS",
        "name": "SkipFrameRangeFlag",
        "vm": "1",
    },
    "(0010,0010)": {
        "vr": "PN",
        "name": "PatientName",
        "vm": "1",
    },
    "(0010,0020)": {
        "vr": "LO",
        "name": "PatientID",
        "vm": "1",
    },
    "(0010,0021)": {
        "vr": "LO",
        "name": "IssuerOfPatientID",
        "vm": "1",
    },
    "(0010,0022)": {
        "vr": "CS",
        "name": "TypeOfPatientID",
        "vm": "1",
    },
    "(0010,0024)": {
        "vr": "SQ",
        "name": "IssuerOfPatientIDQualifiersSequence",
        "vm": "1",
    },
    "(0010,0030)": {
        "vr": "DA",
        "name": "PatientBirthDate",
        "vm": "1",
    },
    "(0010,0032)": {
        "vr": "TM",
        "name": "PatientBirthTime",
        "vm": "1",
    },
    "(0010,0040)": {
        "vr": "CS",
        "name": "PatientSex",
        "vm": "1",
    },
    "(0010,0050)": {
        "vr": "SQ",
        "name": "PatientInsurancePlanCodeSequence",
        "vm": "1",
    },
    "(0010,0101)": {
        "vr": "SQ",
        "name": "PatientPrimaryLanguageCodeSequence",
        "vm": "1",
    },
    "(0010,0102)": {
        "vr": "SQ",
        "name": "PatientPrimaryLanguageModifierCodeSequence",
        "vm": "1",
    },
    "(0010,0200)": {
        "vr": "CS",
        "name": "QualityControlSubject",
        "vm": "1",
    },
    "(0010,0201)": {
        "vr": "SQ",
        "name": "QualityControlSubjectTypeCodeSequence",
        "vm": "1",
    },
    "(0010,1000)": {
        "vr": "LO",
        "name": "OtherPatientIDs",
        "vm": "1-n",
    },
    "(0010,1001)": {
        "vr": "PN",
        "name": "OtherPatientNames",
        "vm": "1-n",
    },
    "(0010,1002)": {
        "vr": "SQ",
        "name": "OtherPatientIDsSequence",
        "vm": "1",
    },
    "(0010,1005)": {
        "vr": "PN",
        "name": "PatientBirthName",
        "vm": "1",
    },
    "(0010,1010)": {
        "vr": "AS",
        "name": "PatientAge",
        "vm": "1",
    },
    "(0010,1020)": {
        "vr": "DS",
        "name": "PatientSize",
        "vm": "1",
    },
    "(0010,1021)": {
        "vr": "SQ",
        "name": "PatientSizeCodeSequence",
        "vm": "1",
    },
    "(0010,1030)": {
        "vr": "DS",
        "name": "PatientWeight",
        "vm": "1",
    },
    "(0010,1040)": {
        "vr": "LO",
        "name": "PatientAddress",
        "vm": "1",
    },
    "(0010,1060)": {
        "vr": "PN",
        "name": "PatientMotherBirthName",
        "vm": "1",
    },
    "(0010,1080)": {
        "vr": "LO",
        "name": "MilitaryRank",
        "vm": "1",
    },
    "(0010,1081)": {
        "vr": "LO",
        "name": "BranchOfService",
        "vm": "1",
    },
    "(0010,1090)": {
        "vr": "LO",
        "name": "MedicalRecordLocator",
        "vm": "1",
    },
    "(0010,1100)": {
        "vr": "SQ",
        "name": "ReferencedPatientPhotoSequence",
        "vm": "1",
    },
    "(0010,2000)": {
        "vr": "LO",
        "name": "MedicalAlerts",
        "vm": "1-n",
    },
    "(0010,2110)": {
        "vr": "LO",
        "name": "Allergies",
        "vm": "1-n",
    },
    "(0010,2150)": {
        "vr": "LO",
        "name": "CountryOfResidence",
        "vm": "1",
    },
    "(0010,2152)": {
        "vr": "LO",
        "name": "RegionOfResidence",
        "vm": "1",
    },
    "(0010,2154)": {
        "vr": "SH",
        "name": "PatientTelephoneNumbers",
        "vm": "1-n",
    },
    "(0010,2155)": {
        "vr": "LT",
        "name": "PatientTelecomInformation",
        "vm": "1",
    },
    "(0010,2160)": {
        "vr": "SH",
        "name": "EthnicGroup",
        "vm": "1",
    },
    "(0010,2180)": {
        "vr": "SH",
        "name": "Occupation",
        "vm": "1",
    },
    "(0010,21A0)": {
        "vr": "CS",
        "name": "SmokingStatus",
        "vm": "1",
    },
    "(0010,21B0)": {
        "vr": "LT",
        "name": "AdditionalPatientHistory",
        "vm": "1",
    },
    "(0010,21C0)": {
        "vr": "US",
        "name": "PregnancyStatus",
        "vm": "1",
    },
    "(0010,21D0)": {
        "vr": "DA",
        "name": "LastMenstrualDate",
        "vm": "1",
    },
    "(0010,21F0)": {
        "vr": "LO",
        "name": "PatientReligiousPreference",
        "vm": "1",
    },
    "(0010,2201)": {
        "vr": "LO",
        "name": "PatientSpeciesDescription",
        "vm": "1",
    },
    "(0010,2202)": {
        "vr": "SQ",
        "name": "PatientSpeciesCodeSequence",
        "vm": "1",
    },
    "(0010,2203)": {
        "vr": "CS",
        "name": "PatientSexNeutered",
        "vm": "1",
    },
    "(0010,2210)": {
        "vr": "CS",
        "name": "AnatomicalOrientationType",
        "vm": "1",
    },
    "(0010,2292)": {
        "vr": "LO",
        "name": "PatientBreedDescription",
        "vm": "1",
    },
    "(0010,2293)": {
        "vr": "SQ",
        "name": "PatientBreedCodeSequence",
        "vm": "1",
    },
    "(0010,2294)": {
        "vr": "SQ",
        "name": "BreedRegistrationSequence",
        "vm": "1",
    },
    "(0010,2295)": {
        "vr": "LO",
        "name": "BreedRegistrationNumber",
        "vm": "1",
    },
    "(0010,2296)": {
        "vr": "SQ",
        "name": "BreedRegistryCodeSequence",
        "vm": "1",
    },
    "(0010,2297)": {
        "vr": "PN",
        "name": "ResponsiblePerson",
        "vm": "1",
    },
    "(0010,2298)": {
        "vr": "CS",
        "name": "ResponsiblePersonRole",
        "vm": "1",
    },
    "(0010,2299)": {
        "vr": "LO",
        "name": "ResponsibleOrganization",
        "vm": "1",
    },
    "(0010,4000)": {
        "vr": "LT",
        "name": "PatientComments",
        "vm": "1",
    },
    "(0010,9431)": {
        "vr": "FL",
        "name": "ExaminedBodyThickness",
        "vm": "1",
    },
    "(0012,0010)": {
        "vr": "LO",
        "name": "ClinicalTrialSponsorName",
        "vm": "1",
    },
    "(0012,0020)": {
        "vr": "LO",
        "name": "ClinicalTrialProtocolID",
        "vm": "1",
    },
    "(0012,0021)": {
        "vr": "LO",
        "name": "ClinicalTrialProtocolName",
        "vm": "1",
    },
    "(0012,0030)": {
        "vr": "LO",
        "name": "ClinicalTrialSiteID",
        "vm": "1",
    },
    "(0012,0031)": {
        "vr": "LO",
        "name": "ClinicalTrialSiteName",
        "vm": "1",
    },
    "(0012,0040)": {
        "vr": "LO",
        "name": "ClinicalTrialSubjectID",
        "vm": "1",
    },
    "(0012,0042)": {
        "vr": "LO",
        "name": "ClinicalTrialSubjectReadingID",
        "vm": "1",
    },
    "(0012,0050)": {
        "vr": "LO",
        "name": "ClinicalTrialTimePointID",
        "vm": "1",
    },
    "(0012,0051)": {
        "vr": "ST",
        "name": "ClinicalTrialTimePointDescription",
        "vm": "1",
    },
    "(0012,0060)": {
        "vr": "LO",
        "name": "ClinicalTrialCoordinatingCenterName",
        "vm": "1",
    },
    "(0012,0062)": {
        "vr": "CS",
        "name": "PatientIdentityRemoved",
        "vm": "1",
    },
    "(0012,0063)": {
        "vr": "LO",
        "name": "DeidentificationMethod",
        "vm": "1-n",
    },
    "(0012,0064)": {
        "vr": "SQ",
        "name": "DeidentificationMethodCodeSequence",
        "vm": "1",
    },
    "(0012,0071)": {
        "vr": "LO",
        "name": "ClinicalTrialSeriesID",
        "vm": "1",
    },
    "(0012,0072)": {
        "vr": "LO",
        "name": "ClinicalTrialSeriesDescription",
        "vm": "1",
    },
    "(0012,0081)": {
        "vr": "LO",
        "name": "ClinicalTrialProtocolEthicsCommitteeName",
        "vm": "1",
    },
    "(0012,0082)": {
        "vr": "LO",
        "name": "ClinicalTrialProtocolEthicsCommitteeApprovalNumber",
        "vm": "1",
    },
    "(0012,0083)": {
        "vr": "SQ",
        "name": "ConsentForClinicalTrialUseSequence",
        "vm": "1",
    },
    "(0012,0084)": {
        "vr": "CS",
        "name": "DistributionType",
        "vm": "1",
    },
    "(0012,0085)": {
        "vr": "CS",
        "name": "ConsentForDistributionFlag",
        "vm": "1",
    },
    "(0014,0025)": {
        "vr": "ST",
        "name": "ComponentManufacturingProcedure",
        "vm": "1-n",
    },
    "(0014,0028)": {
        "vr": "ST",
        "name": "ComponentManufacturer",
        "vm": "1-n",
    },
    "(0014,0030)": {
        "vr": "DS",
        "name": "MaterialThickness",
        "vm": "1-n",
    },
    "(0014,0032)": {
        "vr": "DS",
        "name": "MaterialPipeDiameter",
        "vm": "1-n",
    },
    "(0014,0034)": {
        "vr": "DS",
        "name": "MaterialIsolationDiameter",
        "vm": "1-n",
    },
    "(0014,0042)": {
        "vr": "ST",
        "name": "MaterialGrade",
        "vm": "1-n",
    },
    "(0014,0044)": {
        "vr": "ST",
        "name": "MaterialPropertiesDescription",
        "vm": "1-n",
    },
    "(0014,0046)": {
        "vr": "LT",
        "name": "MaterialNotes",
        "vm": "1",
    },
    "(0014,0050)": {
        "vr": "CS",
        "name": "ComponentShape",
        "vm": "1",
    },
    "(0014,0052)": {
        "vr": "CS",
        "name": "CurvatureType",
        "vm": "1",
    },
    "(0014,0054)": {
        "vr": "DS",
        "name": "OuterDiameter",
        "vm": "1",
    },
    "(0014,0056)": {
        "vr": "DS",
        "name": "InnerDiameter",
        "vm": "1",
    },
    "(0014,1010)": {
        "vr": "ST",
        "name": "ActualEnvironmentalConditions",
        "vm": "1",
    },
    "(0014,1020)": {
        "vr": "DA",
        "name": "ExpiryDate",
        "vm": "1",
    },
    "(0014,1040)": {
        "vr": "ST",
        "name": "EnvironmentalConditions",
        "vm": "1",
    },
    "(0014,2002)": {
        "vr": "SQ",
        "name": "EvaluatorSequence",
        "vm": "1",
    },
    "(0014,2004)": {
        "vr": "IS",
        "name": "EvaluatorNumber",
        "vm": "1",
    },
    "(0014,2006)": {
        "vr": "PN",
        "name": "EvaluatorName",
        "vm": "1",
    },
    "(0014,2008)": {
        "vr": "IS",
        "name": "EvaluationAttempt",
        "vm": "1",
    },
    "(0014,2012)": {
        "vr": "SQ",
        "name": "IndicationSequence",
        "vm": "1",
    },
    "(0014,2014)": {
        "vr": "IS",
        "name": "IndicationNumber",
        "vm": "1",
    },
    "(0014,2016)": {
        "vr": "SH",
        "name": "IndicationLabel",
        "vm": "1",
    },
    "(0014,2018)": {
        "vr": "ST",
        "name": "IndicationDescription",
        "vm": "1",
    },
    "(0014,201A)": {
        "vr": "CS",
        "name": "IndicationType",
        "vm": "1-n",
    },
    "(0014,201C)": {
        "vr": "CS",
        "name": "IndicationDisposition",
        "vm": "1",
    },
    "(0014,201E)": {
        "vr": "SQ",
        "name": "IndicationROISequence",
        "vm": "1",
    },
    "(0014,2030)": {
        "vr": "SQ",
        "name": "IndicationPhysicalPropertySequence",
        "vm": "1",
    },
    "(0014,2032)": {
        "vr": "SH",
        "name": "PropertyLabel",
        "vm": "1",
    },
    "(0014,2202)": {
        "vr": "IS",
        "name": "CoordinateSystemNumberOfAxes",
        "vm": "1",
    },
    "(0014,2204)": {
        "vr": "SQ",
        "name": "CoordinateSystemAxesSequence",
        "vm": "1",
    },
    "(0014,2206)": {
        "vr": "ST",
        "name": "CoordinateSystemAxisDescription",
        "vm": "1",
    },
    "(0014,2208)": {
        "vr": "CS",
        "name": "CoordinateSystemDataSetMapping",
        "vm": "1",
    },
    "(0014,220A)": {
        "vr": "IS",
        "name": "CoordinateSystemAxisNumber",
        "vm": "1",
    },
    "(0014,220C)": {
        "vr": "CS",
        "name": "CoordinateSystemAxisType",
        "vm": "1",
    },
    "(0014,220E)": {
        "vr": "CS",
        "name": "CoordinateSystemAxisUnits",
        "vm": "1",
    },
    "(0014,2210)": {
        "vr": "OB",
        "name": "CoordinateSystemAxisValues",
        "vm": "1",
    },
    "(0014,2220)": {
        "vr": "SQ",
        "name": "CoordinateSystemTransformSequence",
        "vm": "1",
    },
    "(0014,2222)": {
        "vr": "ST",
        "name": "TransformDescription",
        "vm": "1",
    },
    "(0014,2224)": {
        "vr": "IS",
        "name": "TransformNumberOfAxes",
        "vm": "1",
    },
    "(0014,2226)": {
        "vr": "IS",
        "name": "TransformOrderOfAxes",
        "vm": "1-n",
    },
    "(0014,2228)": {
        "vr": "CS",
        "name": "TransformedAxisUnits",
        "vm": "1",
    },
    "(0014,222A)": {
        "vr": "DS",
        "name": "CoordinateSystemTransformRotationAndScaleMatrix",
        "vm": "1-n",
    },
    "(0014,222C)": {
        "vr": "DS",
        "name": "CoordinateSystemTransformTranslationMatrix",
        "vm": "1-n",
    },
    "(0014,3011)": {
        "vr": "DS",
        "name": "InternalDetectorFrameTime",
        "vm": "1",
    },
    "(0014,3012)": {
        "vr": "DS",
        "name": "NumberOfFramesIntegrated",
        "vm": "1",
    },
    "(0014,3020)": {
        "vr": "SQ",
        "name": "DetectorTemperatureSequence",
        "vm": "1",
    },
    "(0014,3022)": {
        "vr": "ST",
        "name": "SensorName",
        "vm": "1",
    },
    "(0014,3024)": {
        "vr": "DS",
        "name": "HorizontalOffsetOfSensor",
        "vm": "1",
    },
    "(0014,3026)": {
        "vr": "DS",
        "name": "VerticalOffsetOfSensor",
        "vm": "1",
    },
    "(0014,3028)": {
        "vr": "DS",
        "name": "SensorTemperature",
        "vm": "1",
    },
    "(0014,3040)": {
        "vr": "SQ",
        "name": "DarkCurrentSequence",
        "vm": "1",
    },
    "(0014,3050)": {
        "vr": "ox",
        "name": "DarkCurrentCounts",
        "vm": "1",
    },
    "(0014,3060)": {
        "vr": "SQ",
        "name": "GainCorrectionReferenceSequence",
        "vm": "1",
    },
    "(0014,3070)": {
        "vr": "ox",
        "name": "AirCounts",
        "vm": "1",
    },
    "(0014,3071)": {
        "vr": "DS",
        "name": "KVUsedInGainCalibration",
        "vm": "1",
    },
    "(0014,3072)": {
        "vr": "DS",
        "name": "MAUsedInGainCalibration",
        "vm": "1",
    },
    "(0014,3073)": {
        "vr": "DS",
        "name": "NumberOfFramesUsedForIntegration",
        "vm": "1",
    },
    "(0014,3074)": {
        "vr": "LO",
        "name": "FilterMaterialUsedInGainCalibration",
        "vm": "1",
    },
    "(0014,3075)": {
        "vr": "DS",
        "name": "FilterThicknessUsedInGainCalibration",
        "vm": "1",
    },
    "(0014,3076)": {
        "vr": "DA",
        "name": "DateOfGainCalibration",
        "vm": "1",
    },
    "(0014,3077)": {
        "vr": "TM",
        "name": "TimeOfGainCalibration",
        "vm": "1",
    },
    "(0014,3080)": {
        "vr": "OB",
        "name": "BadPixelImage",
        "vm": "1",
    },
    "(0014,3099)": {
        "vr": "LT",
        "name": "CalibrationNotes",
        "vm": "1",
    },
    "(0014,4002)": {
        "vr": "SQ",
        "name": "PulserEquipmentSequence",
        "vm": "1",
    },
    "(0014,4004)": {
        "vr": "CS",
        "name": "PulserType",
        "vm": "1",
    },
    "(0014,4006)": {
        "vr": "LT",
        "name": "PulserNotes",
        "vm": "1",
    },
    "(0014,4008)": {
        "vr": "SQ",
        "name": "ReceiverEquipmentSequence",
        "vm": "1",
    },
    "(0014,400A)": {
        "vr": "CS",
        "name": "AmplifierType",
        "vm": "1",
    },
    "(0014,400C)": {
        "vr": "LT",
        "name": "ReceiverNotes",
        "vm": "1",
    },
    "(0014,400E)": {
        "vr": "SQ",
        "name": "PreAmplifierEquipmentSequence",
        "vm": "1",
    },
    "(0014,400F)": {
        "vr": "LT",
        "name": "PreAmplifierNotes",
        "vm": "1",
    },
    "(0014,4010)": {
        "vr": "SQ",
        "name": "TransmitTransducerSequence",
        "vm": "1",
    },
    "(0014,4011)": {
        "vr": "SQ",
        "name": "ReceiveTransducerSequence",
        "vm": "1",
    },
    "(0014,4012)": {
        "vr": "US",
        "name": "NumberOfElements",
        "vm": "1",
    },
    "(0014,4013)": {
        "vr": "CS",
        "name": "ElementShape",
        "vm": "1",
    },
    "(0014,4014)": {
        "vr": "DS",
        "name": "ElementDimensionA",
        "vm": "1",
    },
    "(0014,4015)": {
        "vr": "DS",
        "name": "ElementDimensionB",
        "vm": "1",
    },
    "(0014,4016)": {
        "vr": "DS",
        "name": "ElementPitchA",
        "vm": "1",
    },
    "(0014,4017)": {
        "vr": "DS",
        "name": "MeasuredBeamDimensionA",
        "vm": "1",
    },
    "(0014,4018)": {
        "vr": "DS",
        "name": "MeasuredBeamDimensionB",
        "vm": "1",
    },
    "(0014,4019)": {
        "vr": "DS",
        "name": "LocationOfMeasuredBeamDiameter",
        "vm": "1",
    },
    "(0014,401A)": {
        "vr": "DS",
        "name": "NominalFrequency",
        "vm": "1",
    },
    "(0014,401B)": {
        "vr": "DS",
        "name": "MeasuredCenterFrequency",
        "vm": "1",
    },
    "(0014,401C)": {
        "vr": "DS",
        "name": "MeasuredBandwidth",
        "vm": "1",
    },
    "(0014,401D)": {
        "vr": "DS",
        "name": "ElementPitchB",
        "vm": "1",
    },
    "(0014,4020)": {
        "vr": "SQ",
        "name": "PulserSettingsSequence",
        "vm": "1",
    },
    "(0014,4022)": {
        "vr": "DS",
        "name": "PulseWidth",
        "vm": "1",
    },
    "(0014,4024)": {
        "vr": "DS",
        "name": "ExcitationFrequency",
        "vm": "1",
    },
    "(0014,4026)": {
        "vr": "CS",
        "name": "ModulationType",
        "vm": "1",
    },
    "(0014,4028)": {
        "vr": "DS",
        "name": "Damping",
        "vm": "1",
    },
    "(0014,4030)": {
        "vr": "SQ",
        "name": "ReceiverSettingsSequence",
        "vm": "1",
    },
    "(0014,4031)": {
        "vr": "DS",
        "name": "AcquiredSoundpathLength",
        "vm": "1",
    },
    "(0014,4032)": {
        "vr": "CS",
        "name": "AcquisitionCompressionType",
        "vm": "1",
    },
    "(0014,4033)": {
        "vr": "IS",
        "name": "AcquisitionSampleSize",
        "vm": "1",
    },
    "(0014,4034)": {
        "vr": "DS",
        "name": "RectifierSmoothing",
        "vm": "1",
    },
    "(0014,4035)": {
        "vr": "SQ",
        "name": "DACSequence",
        "vm": "1",
    },
    "(0014,4036)": {
        "vr": "CS",
        "name": "DACType",
        "vm": "1",
    },
    "(0014,4038)": {
        "vr": "DS",
        "name": "DACGainPoints",
        "vm": "1-n",
    },
    "(0014,403A)": {
        "vr": "DS",
        "name": "DACTimePoints",
        "vm": "1-n",
    },
    "(0014,403C)": {
        "vr": "DS",
        "name": "DACAmplitude",
        "vm": "1-n",
    },
    "(0014,4040)": {
        "vr": "SQ",
        "name": "PreAmplifierSettingsSequence",
        "vm": "1",
    },
    "(0014,4050)": {
        "vr": "SQ",
        "name": "TransmitTransducerSettingsSequence",
        "vm": "1",
    },
    "(0014,4051)": {
        "vr": "SQ",
        "name": "ReceiveTransducerSettingsSequence",
        "vm": "1",
    },
    "(0014,4052)": {
        "vr": "DS",
        "name": "IncidentAngle",
        "vm": "1",
    },
    "(0014,4054)": {
        "vr": "ST",
        "name": "CouplingTechnique",
        "vm": "1",
    },
    "(0014,4056)": {
        "vr": "ST",
        "name": "CouplingMedium",
        "vm": "1",
    },
    "(0014,4057)": {
        "vr": "DS",
        "name": "CouplingVelocity",
        "vm": "1",
    },
    "(0014,4058)": {
        "vr": "DS",
        "name": "ProbeCenterLocationX",
        "vm": "1",
    },
    "(0014,4059)": {
        "vr": "DS",
        "name": "ProbeCenterLocationZ",
        "vm": "1",
    },
    "(0014,405A)": {
        "vr": "DS",
        "name": "SoundPathLength",
        "vm": "1",
    },
    "(0014,405C)": {
        "vr": "ST",
        "name": "DelayLawIdentifier",
        "vm": "1",
    },
    "(0014,4060)": {
        "vr": "SQ",
        "name": "GateSettingsSequence",
        "vm": "1",
    },
    "(0014,4062)": {
        "vr": "DS",
        "name": "GateThreshold",
        "vm": "1",
    },
    "(0014,4064)": {
        "vr": "DS",
        "name": "VelocityOfSound",
        "vm": "1",
    },
    "(0014,4070)": {
        "vr": "SQ",
        "name": "CalibrationSettingsSequence",
        "vm": "1",
    },
    "(0014,4072)": {
        "vr": "ST",
        "name": "CalibrationProcedure",
        "vm": "1",
    },
    "(0014,4074)": {
        "vr": "SH",
        "name": "ProcedureVersion",
        "vm": "1",
    },
    "(0014,4076)": {
        "vr": "DA",
        "name": "ProcedureCreationDate",
        "vm": "1",
    },
    "(0014,4078)": {
        "vr": "DA",
        "name": "ProcedureExpirationDate",
        "vm": "1",
    },
    "(0014,407A)": {
        "vr": "DA",
        "name": "ProcedureLastModifiedDate",
        "vm": "1",
    },
    "(0014,407C)": {
        "vr": "TM",
        "name": "CalibrationTime",
        "vm": "1-n",
    },
    "(0014,407E)": {
        "vr": "DA",
        "name": "CalibrationDate",
        "vm": "1-n",
    },
    "(0014,4080)": {
        "vr": "SQ",
        "name": "ProbeDriveEquipmentSequence",
        "vm": "1",
    },
    "(0014,4081)": {
        "vr": "CS",
        "name": "DriveType",
        "vm": "1",
    },
    "(0014,4082)": {
        "vr": "LT",
        "name": "ProbeDriveNotes",
        "vm": "1",
    },
    "(0014,4083)": {
        "vr": "SQ",
        "name": "DriveProbeSequence",
        "vm": "1",
    },
    "(0014,4084)": {
        "vr": "DS",
        "name": "ProbeInductance",
        "vm": "1",
    },
    "(0014,4085)": {
        "vr": "DS",
        "name": "ProbeResistance",
        "vm": "1",
    },
    "(0014,4086)": {
        "vr": "SQ",
        "name": "ReceiveProbeSequence",
        "vm": "1",
    },
    "(0014,4087)": {
        "vr": "SQ",
        "name": "ProbeDriveSettingsSequence",
        "vm": "1",
    },
    "(0014,4088)": {
        "vr": "DS",
        "name": "BridgeResistors",
        "vm": "1",
    },
    "(0014,4089)": {
        "vr": "DS",
        "name": "ProbeOrientationAngle",
        "vm": "1",
    },
    "(0014,408B)": {
        "vr": "DS",
        "name": "UserSelectedGainY",
        "vm": "1",
    },
    "(0014,408C)": {
        "vr": "DS",
        "name": "UserSelectedPhase",
        "vm": "1",
    },
    "(0014,408D)": {
        "vr": "DS",
        "name": "UserSelectedOffsetX",
        "vm": "1",
    },
    "(0014,408E)": {
        "vr": "DS",
        "name": "UserSelectedOffsetY",
        "vm": "1",
    },
    "(0014,4091)": {
        "vr": "SQ",
        "name": "ChannelSettingsSequence",
        "vm": "1",
    },
    "(0014,4092)": {
        "vr": "DS",
        "name": "ChannelThreshold",
        "vm": "1",
    },
    "(0014,409A)": {
        "vr": "SQ",
        "name": "ScannerSettingsSequence",
        "vm": "1",
    },
    "(0014,409B)": {
        "vr": "ST",
        "name": "ScanProcedure",
        "vm": "1",
    },
    "(0014,409C)": {
        "vr": "DS",
        "name": "TranslationRateX",
        "vm": "1",
    },
    "(0014,409D)": {
        "vr": "DS",
        "name": "TranslationRateY",
        "vm": "1",
    },
    "(0014,409F)": {
        "vr": "DS",
        "name": "ChannelOverlap",
        "vm": "1",
    },
    "(0014,40A0)": {
        "vr": "LO",
        "name": "ImageQualityIndicatorType",
        "vm": "1",
    },
    "(0014,40A1)": {
        "vr": "LO",
        "name": "ImageQualityIndicatorMaterial",
        "vm": "1",
    },
    "(0014,40A2)": {
        "vr": "LO",
        "name": "ImageQualityIndicatorSize",
        "vm": "1",
    },
    "(0014,5002)": {
        "vr": "IS",
        "name": "LINACEnergy",
        "vm": "1",
    },
    "(0014,5004)": {
        "vr": "IS",
        "name": "LINACOutput",
        "vm": "1",
    },
    "(0014,5100)": {
        "vr": "US",
        "name": "ActiveAperture",
        "vm": "1",
    },
    "(0014,5101)": {
        "vr": "DS",
        "name": "TotalAperture",
        "vm": "1",
    },
    "(0014,5102)": {
        "vr": "DS",
        "name": "ApertureElevation",
        "vm": "1",
    },
    "(0014,5103)": {
        "vr": "DS",
        "name": "MainLobeAngle",
        "vm": "1",
    },
    "(0014,5104)": {
        "vr": "DS",
        "name": "MainRoofAngle",
        "vm": "1",
    },
    "(0014,5105)": {
        "vr": "CS",
        "name": "ConnectorType",
        "vm": "1",
    },
    "(0014,5106)": {
        "vr": "SH",
        "name": "WedgeModelNumber",
        "vm": "1",
    },
    "(0014,5107)": {
        "vr": "DS",
        "name": "WedgeAngleFloat",
        "vm": "1",
    },
    "(0014,5108)": {
        "vr": "DS",
        "name": "WedgeRoofAngle",
        "vm": "1",
    },
    "(0014,5109)": {
        "vr": "CS",
        "name": "WedgeElement1Position",
        "vm": "1",
    },
    "(0014,510A)": {
        "vr": "DS",
        "name": "WedgeMaterialVelocity",
        "vm": "1",
    },
    "(0014,510B)": {
        "vr": "SH",
        "name": "WedgeMaterial",
        "vm": "1",
    },
    "(0014,510C)": {
        "vr": "DS",
        "name": "WedgeOffsetZ",
        "vm": "1",
    },
    "(0014,510D)": {
        "vr": "DS",
        "name": "WedgeOriginOffsetX",
        "vm": "1",
    },
    "(0014,510E)": {
        "vr": "DS",
        "name": "WedgeTimeDelay",
        "vm": "1",
    },
    "(0014,510F)": {
        "vr": "SH",
        "name": "WedgeName",
        "vm": "1",
    },
    "(0014,5110)": {
        "vr": "SH",
        "name": "WedgeManufacturerName",
        "vm": "1",
    },
    "(0014,5111)": {
        "vr": "LO",
        "name": "WedgeDescription",
        "vm": "1",
    },
    "(0014,5112)": {
        "vr": "DS",
        "name": "NominalBeamAngle",
        "vm": "1",
    },
    "(0014,5113)": {
        "vr": "DS",
        "name": "WedgeOffsetX",
        "vm": "1",
    },
    "(0014,5114)": {
        "vr": "DS",
        "name": "WedgeOffsetY",
        "vm": "1",
    },
    "(0014,5115)": {
        "vr": "DS",
        "name": "WedgeTotalLength",
        "vm": "1",
    },
    "(0014,5116)": {
        "vr": "DS",
        "name": "WedgeInContactLength",
        "vm": "1",
    },
    "(0014,5117)": {
        "vr": "DS",
        "name": "WedgeFrontGap",
        "vm": "1",
    },
    "(0014,5118)": {
        "vr": "DS",
        "name": "WedgeTotalHeight",
        "vm": "1",
    },
    "(0014,5119)": {
        "vr": "DS",
        "name": "WedgeFrontHeight",
        "vm": "1",
    },
    "(0014,511A)": {
        "vr": "DS",
        "name": "WedgeRearHeight",
        "vm": "1",
    },
    "(0014,511B)": {
        "vr": "DS",
        "name": "WedgeTotalWidth",
        "vm": "1",
    },
    "(0014,511C)": {
        "vr": "DS",
        "name": "WedgeInContactWidth",
        "vm": "1",
    },
    "(0014,511D)": {
        "vr": "DS",
        "name": "WedgeChamferHeight",
        "vm": "1",
    },
    "(0014,511E)": {
        "vr": "CS",
        "name": "WedgeCurve",
        "vm": "1",
    },
    "(0014,511F)": {
        "vr": "DS",
        "name": "RadiusAlongWedge",
        "vm": "1",
    },
    "(0018,0010)": {
        "vr": "LO",
        "name": "ContrastBolusAgent",
        "vm": "1",
    },
    "(0018,0012)": {
        "vr": "SQ",
        "name": "ContrastBolusAgentSequence",
        "vm": "1",
    },
    "(0018,0013)": {
        "vr": "FL",
        "name": "ContrastBolusT1Relaxivity",
        "vm": "1",
    },
    "(0018,0014)": {
        "vr": "SQ",
        "name": "ContrastBolusAdministrationRouteSequence",
        "vm": "1",
    },
    "(0018,0015)": {
        "vr": "CS",
        "name": "BodyPartExamined",
        "vm": "1",
    },
    "(0018,0020)": {
        "vr": "CS",
        "name": "ScanningSequence",
        "vm": "1-n",
    },
    "(0018,0021)": {
        "vr": "CS",
        "name": "SequenceVariant",
        "vm": "1-n",
    },
    "(0018,0022)": {
        "vr": "CS",
        "name": "ScanOptions",
        "vm": "1-n",
    },
    "(0018,0023)": {
        "vr": "CS",
        "name": "MRAcquisitionType",
        "vm": "1",
    },
    "(0018,0024)": {
        "vr": "SH",
        "name": "SequenceName",
        "vm": "1",
    },
    "(0018,0025)": {
        "vr": "CS",
        "name": "AngioFlag",
        "vm": "1",
    },
    "(0018,0026)": {
        "vr": "SQ",
        "name": "InterventionDrugInformationSequence",
        "vm": "1",
    },
    "(0018,0027)": {
        "vr": "TM",
        "name": "InterventionDrugStopTime",
        "vm": "1",
    },
    "(0018,0028)": {
        "vr": "DS",
        "name": "InterventionDrugDose",
        "vm": "1",
    },
    "(0018,0029)": {
        "vr": "SQ",
        "name": "InterventionDrugCodeSequence",
        "vm": "1",
    },
    "(0018,002A)": {
        "vr": "SQ",
        "name": "AdditionalDrugSequence",
        "vm": "1",
    },
    "(0018,0031)": {
        "vr": "LO",
        "name": "Radiopharmaceutical",
        "vm": "1",
    },
    "(0018,0034)": {
        "vr": "LO",
        "name": "InterventionDrugName",
        "vm": "1",
    },
    "(0018,0035)": {
        "vr": "TM",
        "name": "InterventionDrugStartTime",
        "vm": "1",
    },
    "(0018,0036)": {
        "vr": "SQ",
        "name": "InterventionSequence",
        "vm": "1",
    },
    "(0018,0038)": {
        "vr": "CS",
        "name": "InterventionStatus",
        "vm": "1",
    },
    "(0018,003A)": {
        "vr": "ST",
        "name": "InterventionDescription",
        "vm": "1",
    },
    "(0018,0040)": {
        "vr": "IS",
        "name": "CineRate",
        "vm": "1",
    },
    "(0018,0042)": {
        "vr": "CS",
        "name": "InitialCineRunState",
        "vm": "1",
    },
    "(0018,0050)": {
        "vr": "DS",
        "name": "SliceThickness",
        "vm": "1",
    },
    "(0018,0060)": {
        "vr": "DS",
        "name": "KVP",
        "vm": "1",
    },
    "(0018,0070)": {
        "vr": "IS",
        "name": "CountsAccumulated",
        "vm": "1",
    },
    "(0018,0071)": {
        "vr": "CS",
        "name": "AcquisitionTerminationCondition",
        "vm": "1",
    },
    "(0018,0072)": {
        "vr": "DS",
        "name": "EffectiveDuration",
        "vm": "1",
    },
    "(0018,0073)": {
        "vr": "CS",
        "name": "AcquisitionStartCondition",
        "vm": "1",
    },
    "(0018,0074)": {
        "vr": "IS",
        "name": "AcquisitionStartConditionData",
        "vm": "1",
    },
    "(0018,0075)": {
        "vr": "IS",
        "name": "AcquisitionTerminationConditionData",
        "vm": "1",
    },
    "(0018,0080)": {
        "vr": "DS",
        "name": "RepetitionTime",
        "vm": "1",
    },
    "(0018,0081)": {
        "vr": "DS",
        "name": "EchoTime",
        "vm": "1",
    },
    "(0018,0082)": {
        "vr": "DS",
        "name": "InversionTime",
        "vm": "1",
    },
    "(0018,0083)": {
        "vr": "DS",
        "name": "NumberOfAverages",
        "vm": "1",
    },
    "(0018,0084)": {
        "vr": "DS",
        "name": "ImagingFrequency",
        "vm": "1",
    },
    "(0018,0085)": {
        "vr": "SH",
        "name": "ImagedNucleus",
        "vm": "1",
    },
    "(0018,0086)": {
        "vr": "IS",
        "name": "EchoNumbers",
        "vm": "1-n",
    },
    "(0018,0087)": {
        "vr": "DS",
        "name": "MagneticFieldStrength",
        "vm": "1",
    },
    "(0018,0088)": {
        "vr": "DS",
        "name": "SpacingBetweenSlices",
        "vm": "1",
    },
    "(0018,0089)": {
        "vr": "IS",
        "name": "NumberOfPhaseEncodingSteps",
        "vm": "1",
    },
    "(0018,0090)": {
        "vr": "DS",
        "name": "DataCollectionDiameter",
        "vm": "1",
    },
    "(0018,0091)": {
        "vr": "IS",
        "name": "EchoTrainLength",
        "vm": "1",
    },
    "(0018,0093)": {
        "vr": "DS",
        "name": "PercentSampling",
        "vm": "1",
    },
    "(0018,0094)": {
        "vr": "DS",
        "name": "PercentPhaseFieldOfView",
        "vm": "1",
    },
    "(0018,0095)": {
        "vr": "DS",
        "name": "PixelBandwidth",
        "vm": "1",
    },
    "(0018,1000)": {
        "vr": "LO",
        "name": "DeviceSerialNumber",
        "vm": "1",
    },
    "(0018,1002)": {
        "vr": "UI",
        "name": "DeviceUID",
        "vm": "1",
    },
    "(0018,1003)": {
        "vr": "LO",
        "name": "DeviceID",
        "vm": "1",
    },
    "(0018,1004)": {
        "vr": "LO",
        "name": "PlateID",
        "vm": "1",
    },
    "(0018,1005)": {
        "vr": "LO",
        "name": "GeneratorID",
        "vm": "1",
    },
    "(0018,1006)": {
        "vr": "LO",
        "name": "GridID",
        "vm": "1",
    },
    "(0018,1007)": {
        "vr": "LO",
        "name": "CassetteID",
        "vm": "1",
    },
    "(0018,1008)": {
        "vr": "LO",
        "name": "GantryID",
        "vm": "1",
    },
    "(0018,1010)": {
        "vr": "LO",
        "name": "SecondaryCaptureDeviceID",
        "vm": "1",
    },
    "(0018,1012)": {
        "vr": "DA",
        "name": "DateOfSecondaryCapture",
        "vm": "1",
    },
    "(0018,1014)": {
        "vr": "TM",
        "name": "TimeOfSecondaryCapture",
        "vm": "1",
    },
    "(0018,1016)": {
        "vr": "LO",
        "name": "SecondaryCaptureDeviceManufacturer",
        "vm": "1",
    },
    "(0018,1018)": {
        "vr": "LO",
        "name": "SecondaryCaptureDeviceManufacturerModelName",
        "vm": "1",
    },
    "(0018,1019)": {
        "vr": "LO",
        "name": "SecondaryCaptureDeviceSoftwareVersions",
        "vm": "1-n",
    },
    "(0018,1020)": {
        "vr": "LO",
        "name": "SoftwareVersions",
        "vm": "1-n",
    },
    "(0018,1022)": {
        "vr": "SH",
        "name": "VideoImageFormatAcquired",
        "vm": "1",
    },
    "(0018,1023)": {
        "vr": "LO",
        "name": "DigitalImageFormatAcquired",
        "vm": "1",
    },
    "(0018,1030)": {
        "vr": "LO",
        "name": "ProtocolName",
        "vm": "1",
    },
    "(0018,1040)": {
        "vr": "LO",
        "name": "ContrastBolusRoute",
        "vm": "1",
    },
    "(0018,1041)": {
        "vr": "DS",
        "name": "ContrastBolusVolume",
        "vm": "1",
    },
    "(0018,1042)": {
        "vr": "TM",
        "name": "ContrastBolusStartTime",
        "vm": "1",
    },
    "(0018,1043)": {
        "vr": "TM",
        "name": "ContrastBolusStopTime",
        "vm": "1",
    },
    "(0018,1044)": {
        "vr": "DS",
        "name": "ContrastBolusTotalDose",
        "vm": "1",
    },
    "(0018,1045)": {
        "vr": "IS",
        "name": "SyringeCounts",
        "vm": "1",
    },
    "(0018,1046)": {
        "vr": "DS",
        "name": "ContrastFlowRate",
        "vm": "1-n",
    },
    "(0018,1047)": {
        "vr": "DS",
        "name": "ContrastFlowDuration",
        "vm": "1-n",
    },
    "(0018,1048)": {
        "vr": "CS",
        "name": "ContrastBolusIngredient",
        "vm": "1",
    },
    "(0018,1049)": {
        "vr": "DS",
        "name": "ContrastBolusIngredientConcentration",
        "vm": "1",
    },
    "(0018,1050)": {
        "vr": "DS",
        "name": "SpatialResolution",
        "vm": "1",
    },
    "(0018,1060)": {
        "vr": "DS",
        "name": "TriggerTime",
        "vm": "1",
    },
    "(0018,1061)": {
        "vr": "LO",
        "name": "TriggerSourceOrType",
        "vm": "1",
    },
    "(0018,1062)": {
        "vr": "IS",
        "name": "NominalInterval",
        "vm": "1",
    },
    "(0018,1063)": {
        "vr": "DS",
        "name": "FrameTime",
        "vm": "1",
    },
    "(0018,1064)": {
        "vr": "LO",
        "name": "CardiacFramingType",
        "vm": "1",
    },
    "(0018,1065)": {
        "vr": "DS",
        "name": "FrameTimeVector",
        "vm": "1-n",
    },
    "(0018,1066)": {
        "vr": "DS",
        "name": "FrameDelay",
        "vm": "1",
    },
    "(0018,1067)": {
        "vr": "DS",
        "name": "ImageTriggerDelay",
        "vm": "1",
    },
    "(0018,1068)": {
        "vr": "DS",
        "name": "MultiplexGroupTimeOffset",
        "vm": "1",
    },
    "(0018,1069)": {
        "vr": "DS",
        "name": "TriggerTimeOffset",
        "vm": "1",
    },
    "(0018,106A)": {
        "vr": "CS",
        "name": "SynchronizationTrigger",
        "vm": "1",
    },
    "(0018,106C)": {
        "vr": "US",
        "name": "SynchronizationChannel",
        "vm": "2",
    },
    "(0018,106E)": {
        "vr": "UL",
        "name": "TriggerSamplePosition",
        "vm": "1",
    },
    "(0018,1070)": {
        "vr": "LO",
        "name": "RadiopharmaceuticalRoute",
        "vm": "1",
    },
    "(0018,1071)": {
        "vr": "DS",
        "name": "RadiopharmaceuticalVolume",
        "vm": "1",
    },
    "(0018,1072)": {
        "vr": "TM",
        "name": "RadiopharmaceuticalStartTime",
        "vm": "1",
    },
    "(0018,1073)": {
        "vr": "TM",
        "name": "RadiopharmaceuticalStopTime",
        "vm": "1",
    },
    "(0018,1074)": {
        "vr": "DS",
        "name": "RadionuclideTotalDose",
        "vm": "1",
    },
    "(0018,1075)": {
        "vr": "DS",
        "name": "RadionuclideHalfLife",
        "vm": "1",
    },
    "(0018,1076)": {
        "vr": "DS",
        "name": "RadionuclidePositronFraction",
        "vm": "1",
    },
    "(0018,1077)": {
        "vr": "DS",
        "name": "RadiopharmaceuticalSpecificActivity",
        "vm": "1",
    },
    "(0018,1078)": {
        "vr": "DT",
        "name": "RadiopharmaceuticalStartDateTime",
        "vm": "1",
    },
    "(0018,1079)": {
        "vr": "DT",
        "name": "RadiopharmaceuticalStopDateTime",
        "vm": "1",
    },
    "(0018,1080)": {
        "vr": "CS",
        "name": "BeatRejectionFlag",
        "vm": "1",
    },
    "(0018,1081)": {
        "vr": "IS",
        "name": "LowRRValue",
        "vm": "1",
    },
    "(0018,1082)": {
        "vr": "IS",
        "name": "HighRRValue",
        "vm": "1",
    },
    "(0018,1083)": {
        "vr": "IS",
        "name": "IntervalsAcquired",
        "vm": "1",
    },
    "(0018,1084)": {
        "vr": "IS",
        "name": "IntervalsRejected",
        "vm": "1",
    },
    "(0018,1085)": {
        "vr": "LO",
        "name": "PVCRejection",
        "vm": "1",
    },
    "(0018,1086)": {
        "vr": "IS",
        "name": "SkipBeats",
        "vm": "1",
    },
    "(0018,1088)": {
        "vr": "IS",
        "name": "HeartRate",
        "vm": "1",
    },
    "(0018,1090)": {
        "vr": "IS",
        "name": "CardiacNumberOfImages",
        "vm": "1",
    },
    "(0018,1094)": {
        "vr": "IS",
        "name": "TriggerWindow",
        "vm": "1",
    },
    "(0018,1100)": {
        "vr": "DS",
        "name": "ReconstructionDiameter",
        "vm": "1",
    },
    "(0018,1110)": {
        "vr": "DS",
        "name": "DistanceSourceToDetector",
        "vm": "1",
    },
    "(0018,1111)": {
        "vr": "DS",
        "name": "DistanceSourceToPatient",
        "vm": "1",
    },
    "(0018,1114)": {
        "vr": "DS",
        "name": "EstimatedRadiographicMagnificationFactor",
        "vm": "1",
    },
    "(0018,1120)": {
        "vr": "DS",
        "name": "GantryDetectorTilt",
        "vm": "1",
    },
    "(0018,1121)": {
        "vr": "DS",
        "name": "GantryDetectorSlew",
        "vm": "1",
    },
    "(0018,1130)": {
        "vr": "DS",
        "name": "TableHeight",
        "vm": "1",
    },
    "(0018,1131)": {
        "vr": "DS",
        "name": "TableTraverse",
        "vm": "1",
    },
    "(0018,1134)": {
        "vr": "CS",
        "name": "TableMotion",
        "vm": "1",
    },
    "(0018,1135)": {
        "vr": "DS",
        "name": "TableVerticalIncrement",
        "vm": "1-n",
    },
    "(0018,1136)": {
        "vr": "DS",
        "name": "TableLateralIncrement",
        "vm": "1-n",
    },
    "(0018,1137)": {
        "vr": "DS",
        "name": "TableLongitudinalIncrement",
        "vm": "1-n",
    },
    "(0018,1138)": {
        "vr": "DS",
        "name": "TableAngle",
        "vm": "1",
    },
    "(0018,113A)": {
        "vr": "CS",
        "name": "TableType",
        "vm": "1",
    },
    "(0018,1140)": {
        "vr": "CS",
        "name": "RotationDirection",
        "vm": "1",
    },
    "(0018,1142)": {
        "vr": "DS",
        "name": "RadialPosition",
        "vm": "1-n",
    },
    "(0018,1143)": {
        "vr": "DS",
        "name": "ScanArc",
        "vm": "1",
    },
    "(0018,1144)": {
        "vr": "DS",
        "name": "AngularStep",
        "vm": "1",
    },
    "(0018,1145)": {
        "vr": "DS",
        "name": "CenterOfRotationOffset",
        "vm": "1",
    },
    "(0018,1147)": {
        "vr": "CS",
        "name": "FieldOfViewShape",
        "vm": "1",
    },
    "(0018,1149)": {
        "vr": "IS",
        "name": "FieldOfViewDimensions",
        "vm": "1-2",
    },
    "(0018,1150)": {
        "vr": "IS",
        "name": "ExposureTime",
        "vm": "1",
    },
    "(0018,1151)": {
        "vr": "IS",
        "name": "XRayTubeCurrent",
        "vm": "1",
    },
    "(0018,1152)": {
        "vr": "IS",
        "name": "Exposure",
        "vm": "1",
    },
    "(0018,1153)": {
        "vr": "IS",
        "name": "ExposureInuAs",
        "vm": "1",
    },
    "(0018,1154)": {
        "vr": "DS",
        "name": "AveragePulseWidth",
        "vm": "1",
    },
    "(0018,1155)": {
        "vr": "CS",
        "name": "RadiationSetting",
        "vm": "1",
    },
    "(0018,1156)": {
        "vr": "CS",
        "name": "RectificationType",
        "vm": "1",
    },
    "(0018,115A)": {
        "vr": "CS",
        "name": "RadiationMode",
        "vm": "1",
    },
    "(0018,115E)": {
        "vr": "DS",
        "name": "ImageAndFluoroscopyAreaDoseProduct",
        "vm": "1",
    },
    "(0018,1160)": {
        "vr": "SH",
        "name": "FilterType",
        "vm": "1",
    },
    "(0018,1161)": {
        "vr": "LO",
        "name": "TypeOfFilters",
        "vm": "1-n",
    },
    "(0018,1162)": {
        "vr": "DS",
        "name": "IntensifierSize",
        "vm": "1",
    },
    "(0018,1164)": {
        "vr": "DS",
        "name": "ImagerPixelSpacing",
        "vm": "2",
    },
    "(0018,1166)": {
        "vr": "CS",
        "name": "Grid",
        "vm": "1-n",
    },
    "(0018,1170)": {
        "vr": "IS",
        "name": "GeneratorPower",
        "vm": "1",
    },
    "(0018,1180)": {
        "vr": "SH",
        "name": "CollimatorGridName",
        "vm": "1",
    },
    "(0018,1181)": {
        "vr": "CS",
        "name": "CollimatorType",
        "vm": "1",
    },
    "(0018,1182)": {
        "vr": "IS",
        "name": "FocalDistance",
        "vm": "1-2",
    },
    "(0018,1183)": {
        "vr": "DS",
        "name": "XFocusCenter",
        "vm": "1-2",
    },
    "(0018,1184)": {
        "vr": "DS",
        "name": "YFocusCenter",
        "vm": "1-2",
    },
    "(0018,1190)": {
        "vr": "DS",
        "name": "FocalSpots",
        "vm": "1-n",
    },
    "(0018,1191)": {
        "vr": "CS",
        "name": "AnodeTargetMaterial",
        "vm": "1",
    },
    "(0018,11A0)": {
        "vr": "DS",
        "name": "BodyPartThickness",
        "vm": "1",
    },
    "(0018,11A2)": {
        "vr": "DS",
        "name": "CompressionForce",
        "vm": "1",
    },
    "(0018,11A4)": {
        "vr": "LO",
        "name": "PaddleDescription",
        "vm": "1",
    },
    "(0018,1200)": {
        "vr": "DA",
        "name": "DateOfLastCalibration",
        "vm": "1-n",
    },
    "(0018,1201)": {
        "vr": "TM",
        "name": "TimeOfLastCalibration",
        "vm": "1-n",
    },
    "(0018,1202)": {
        "vr": "DT",
        "name": "DateTimeOfLastCalibration",
        "vm": "1",
    },
    "(0018,1210)": {
        "vr": "SH",
        "name": "ConvolutionKernel",
        "vm": "1-n",
    },
    "(0018,1242)": {
        "vr": "IS",
        "name": "ActualFrameDuration",
        "vm": "1",
    },
    "(0018,1243)": {
        "vr": "IS",
        "name": "CountRate",
        "vm": "1",
    },
    "(0018,1244)": {
        "vr": "US",
        "name": "PreferredPlaybackSequencing",
        "vm": "1",
    },
    "(0018,1250)": {
        "vr": "SH",
        "name": "ReceiveCoilName",
        "vm": "1",
    },
    "(0018,1251)": {
        "vr": "SH",
        "name": "TransmitCoilName",
        "vm": "1",
    },
    "(0018,1260)": {
        "vr": "SH",
        "name": "PlateType",
        "vm": "1",
    },
    "(0018,1261)": {
        "vr": "LO",
        "name": "PhosphorType",
        "vm": "1",
    },
    "(0018,1300)": {
        "vr": "DS",
        "name": "ScanVelocity",
        "vm": "1",
    },
    "(0018,1301)": {
        "vr": "CS",
        "name": "WholeBodyTechnique",
        "vm": "1-n",
    },
    "(0018,1302)": {
        "vr": "IS",
        "name": "ScanLength",
        "vm": "1",
    },
    "(0018,1310)": {
        "vr": "US",
        "name": "AcquisitionMatrix",
        "vm": "4",
    },
    "(0018,1312)": {
        "vr": "CS",
        "name": "InPlanePhaseEncodingDirection",
        "vm": "1",
    },
    "(0018,1314)": {
        "vr": "DS",
        "name": "FlipAngle",
        "vm": "1",
    },
    "(0018,1315)": {
        "vr": "CS",
        "name": "VariableFlipAngleFlag",
        "vm": "1",
    },
    "(0018,1316)": {
        "vr": "DS",
        "name": "SAR",
        "vm": "1",
    },
    "(0018,1318)": {
        "vr": "DS",
        "name": "dBdt",
        "vm": "1",
    },
    "(0018,1400)": {
        "vr": "LO",
        "name": "AcquisitionDeviceProcessingDescription",
        "vm": "1",
    },
    "(0018,1401)": {
        "vr": "LO",
        "name": "AcquisitionDeviceProcessingCode",
        "vm": "1",
    },
    "(0018,1402)": {
        "vr": "CS",
        "name": "CassetteOrientation",
        "vm": "1",
    },
    "(0018,1403)": {
        "vr": "CS",
        "name": "CassetteSize",
        "vm": "1",
    },
    "(0018,1404)": {
        "vr": "US",
        "name": "ExposuresOnPlate",
        "vm": "1",
    },
    "(0018,1405)": {
        "vr": "IS",
        "name": "RelativeXRayExposure",
        "vm": "1",
    },
    "(0018,1411)": {
        "vr": "DS",
        "name": "ExposureIndex",
        "vm": "1",
    },
    "(0018,1412)": {
        "vr": "DS",
        "name": "TargetExposureIndex",
        "vm": "1",
    },
    "(0018,1413)": {
        "vr": "DS",
        "name": "DeviationIndex",
        "vm": "1",
    },
    "(0018,1450)": {
        "vr": "DS",
        "name": "ColumnAngulation",
        "vm": "1",
    },
    "(0018,1460)": {
        "vr": "DS",
        "name": "TomoLayerHeight",
        "vm": "1",
    },
    "(0018,1470)": {
        "vr": "DS",
        "name": "TomoAngle",
        "vm": "1",
    },
    "(0018,1480)": {
        "vr": "DS",
        "name": "TomoTime",
        "vm": "1",
    },
    "(0018,1490)": {
        "vr": "CS",
        "name": "TomoType",
        "vm": "1",
    },
    "(0018,1491)": {
        "vr": "CS",
        "name": "TomoClass",
        "vm": "1",
    },
    "(0018,1495)": {
        "vr": "IS",
        "name": "NumberOfTomosynthesisSourceImages",
        "vm": "1",
    },
    "(0018,1500)": {
        "vr": "CS",
        "name": "PositionerMotion",
        "vm": "1",
    },
    "(0018,1508)": {
        "vr": "CS",
        "name": "PositionerType",
        "vm": "1",
    },
    "(0018,1510)": {
        "vr": "DS",
        "name": "PositionerPrimaryAngle",
        "vm": "1",
    },
    "(0018,1511)": {
        "vr": "DS",
        "name": "PositionerSecondaryAngle",
        "vm": "1",
    },
    "(0018,1520)": {
        "vr": "DS",
        "name": "PositionerPrimaryAngleIncrement",
        "vm": "1-n",
    },
    "(0018,1521)": {
        "vr": "DS",
        "name": "PositionerSecondaryAngleIncrement",
        "vm": "1-n",
    },
    "(0018,1530)": {
        "vr": "DS",
        "name": "DetectorPrimaryAngle",
        "vm": "1",
    },
    "(0018,1531)": {
        "vr": "DS",
        "name": "DetectorSecondaryAngle",
        "vm": "1",
    },
    "(0018,1600)": {
        "vr": "CS",
        "name": "ShutterShape",
        "vm": "1-3",
    },
    "(0018,1602)": {
        "vr": "IS",
        "name": "ShutterLeftVerticalEdge",
        "vm": "1",
    },
    "(0018,1604)": {
        "vr": "IS",
        "name": "ShutterRightVerticalEdge",
        "vm": "1",
    },
    "(0018,1606)": {
        "vr": "IS",
        "name": "ShutterUpperHorizontalEdge",
        "vm": "1",
    },
    "(0018,1608)": {
        "vr": "IS",
        "name": "ShutterLowerHorizontalEdge",
        "vm": "1",
    },
    "(0018,1610)": {
        "vr": "IS",
        "name": "CenterOfCircularShutter",
        "vm": "2",
    },
    "(0018,1612)": {
        "vr": "IS",
        "name": "RadiusOfCircularShutter",
        "vm": "1",
    },
    "(0018,1620)": {
        "vr": "IS",
        "name": "VerticesOfThePolygonalShutter",
        "vm": "2-2n",
    },
    "(0018,1622)": {
        "vr": "US",
        "name": "ShutterPresentationValue",
        "vm": "1",
    },
    "(0018,1623)": {
        "vr": "US",
        "name": "ShutterOverlayGroup",
        "vm": "1",
    },
    "(0018,1624)": {
        "vr": "US",
        "name": "ShutterPresentationColorCIELabValue",
        "vm": "3",
    },
    "(0018,1700)": {
        "vr": "CS",
        "name": "CollimatorShape",
        "vm": "1-3",
    },
    "(0018,1702)": {
        "vr": "IS",
        "name": "CollimatorLeftVerticalEdge",
        "vm": "1",
    },
    "(0018,1704)": {
        "vr": "IS",
        "name": "CollimatorRightVerticalEdge",
        "vm": "1",
    },
    "(0018,1706)": {
        "vr": "IS",
        "name": "CollimatorUpperHorizontalEdge",
        "vm": "1",
    },
    "(0018,1708)": {
        "vr": "IS",
        "name": "CollimatorLowerHorizontalEdge",
        "vm": "1",
    },
    "(0018,1710)": {
        "vr": "IS",
        "name": "CenterOfCircularCollimator",
        "vm": "2",
    },
    "(0018,1712)": {
        "vr": "IS",
        "name": "RadiusOfCircularCollimator",
        "vm": "1",
    },
    "(0018,1720)": {
        "vr": "IS",
        "name": "VerticesOfThePolygonalCollimator",
        "vm": "2-2n",
    },
    "(0018,1800)": {
        "vr": "CS",
        "name": "AcquisitionTimeSynchronized",
        "vm": "1",
    },
    "(0018,1801)": {
        "vr": "SH",
        "name": "TimeSource",
        "vm": "1",
    },
    "(0018,1802)": {
        "vr": "CS",
        "name": "TimeDistributionProtocol",
        "vm": "1",
    },
    "(0018,1803)": {
        "vr": "LO",
        "name": "NTPSourceAddress",
        "vm": "1",
    },
    "(0018,2001)": {
        "vr": "IS",
        "name": "PageNumberVector",
        "vm": "1-n",
    },
    "(0018,2002)": {
        "vr": "SH",
        "name": "FrameLabelVector",
        "vm": "1-n",
    },
    "(0018,2003)": {
        "vr": "DS",
        "name": "FramePrimaryAngleVector",
        "vm": "1-n",
    },
    "(0018,2004)": {
        "vr": "DS",
        "name": "FrameSecondaryAngleVector",
        "vm": "1-n",
    },
    "(0018,2005)": {
        "vr": "DS",
        "name": "SliceLocationVector",
        "vm": "1-n",
    },
    "(0018,2006)": {
        "vr": "SH",
        "name": "DisplayWindowLabelVector",
        "vm": "1-n",
    },
    "(0018,2010)": {
        "vr": "DS",
        "name": "NominalScannedPixelSpacing",
        "vm": "2",
    },
    "(0018,2020)": {
        "vr": "CS",
        "name": "DigitizingDeviceTransportDirection",
        "vm": "1",
    },
    "(0018,2030)": {
        "vr": "DS",
        "name": "RotationOfScannedFilm",
        "vm": "1",
    },
    "(0018,2041)": {
        "vr": "SQ",
        "name": "BiopsyTargetSequence",
        "vm": "1",
    },
    "(0018,2042)": {
        "vr": "UI",
        "name": "TargetUID",
        "vm": "1",
    },
    "(0018,2043)": {
        "vr": "FL",
        "name": "LocalizingCursorPosition",
        "vm": "2",
    },
    "(0018,2044)": {
        "vr": "FL",
        "name": "CalculatedTargetPosition",
        "vm": "3",
    },
    "(0018,2045)": {
        "vr": "SH",
        "name": "TargetLabel",
        "vm": "1",
    },
    "(0018,2046)": {
        "vr": "FL",
        "name": "DisplayedZValue",
        "vm": "1",
    },
    "(0018,3100)": {
        "vr": "CS",
        "name": "IVUSAcquisition",
        "vm": "1",
    },
    "(0018,3101)": {
        "vr": "DS",
        "name": "IVUSPullbackRate",
        "vm": "1",
    },
    "(0018,3102)": {
        "vr": "DS",
        "name": "IVUSGatedRate",
        "vm": "1",
    },
    "(0018,3103)": {
        "vr": "IS",
        "name": "IVUSPullbackStartFrameNumber",
        "vm": "1",
    },
    "(0018,3104)": {
        "vr": "IS",
        "name": "IVUSPullbackStopFrameNumber",
        "vm": "1",
    },
    "(0018,3105)": {
        "vr": "IS",
        "name": "LesionNumber",
        "vm": "1-n",
    },
    "(0018,5000)": {
        "vr": "SH",
        "name": "OutputPower",
        "vm": "1-n",
    },
    "(0018,5010)": {
        "vr": "LO",
        "name": "TransducerData",
        "vm": "1-n",
    },
    "(0018,5012)": {
        "vr": "DS",
        "name": "FocusDepth",
        "vm": "1",
    },
    "(0018,5020)": {
        "vr": "LO",
        "name": "ProcessingFunction",
        "vm": "1",
    },
    "(0018,5022)": {
        "vr": "DS",
        "name": "MechanicalIndex",
        "vm": "1",
    },
    "(0018,5024)": {
        "vr": "DS",
        "name": "BoneThermalIndex",
        "vm": "1",
    },
    "(0018,5026)": {
        "vr": "DS",
        "name": "CranialThermalIndex",
        "vm": "1",
    },
    "(0018,5027)": {
        "vr": "DS",
        "name": "SoftTissueThermalIndex",
        "vm": "1",
    },
    "(0018,5028)": {
        "vr": "DS",
        "name": "SoftTissueFocusThermalIndex",
        "vm": "1",
    },
    "(0018,5029)": {
        "vr": "DS",
        "name": "SoftTissueSurfaceThermalIndex",
        "vm": "1",
    },
    "(0018,5050)": {
        "vr": "IS",
        "name": "DepthOfScanField",
        "vm": "1",
    },
    "(0018,5100)": {
        "vr": "CS",
        "name": "PatientPosition",
        "vm": "1",
    },
    "(0018,5101)": {
        "vr": "CS",
        "name": "ViewPosition",
        "vm": "1",
    },
    "(0018,5104)": {
        "vr": "SQ",
        "name": "ProjectionEponymousNameCodeSequence",
        "vm": "1",
    },
    "(0018,6000)": {
        "vr": "DS",
        "name": "Sensitivity",
        "vm": "1",
    },
    "(0018,6011)": {
        "vr": "SQ",
        "name": "SequenceOfUltrasoundRegions",
        "vm": "1",
    },
    "(0018,6012)": {
        "vr": "US",
        "name": "RegionSpatialFormat",
        "vm": "1",
    },
    "(0018,6014)": {
        "vr": "US",
        "name": "RegionDataType",
        "vm": "1",
    },
    "(0018,6016)": {
        "vr": "UL",
        "name": "RegionFlags",
        "vm": "1",
    },
    "(0018,6018)": {
        "vr": "UL",
        "name": "RegionLocationMinX0",
        "vm": "1",
    },
    "(0018,601A)": {
        "vr": "UL",
        "name": "RegionLocationMinY0",
        "vm": "1",
    },
    "(0018,601C)": {
        "vr": "UL",
        "name": "RegionLocationMaxX1",
        "vm": "1",
    },
    "(0018,601E)": {
        "vr": "UL",
        "name": "RegionLocationMaxY1",
        "vm": "1",
    },
    "(0018,6020)": {
        "vr": "SL",
        "name": "ReferencePixelX0",
        "vm": "1",
    },
    "(0018,6022)": {
        "vr": "SL",
        "name": "ReferencePixelY0",
        "vm": "1",
    },
    "(0018,6024)": {
        "vr": "US",
        "name": "PhysicalUnitsXDirection",
        "vm": "1",
    },
    "(0018,6026)": {
        "vr": "US",
        "name": "PhysicalUnitsYDirection",
        "vm": "1",
    },
    "(0018,6028)": {
        "vr": "FD",
        "name": "ReferencePixelPhysicalValueX",
        "vm": "1",
    },
    "(0018,602A)": {
        "vr": "FD",
        "name": "ReferencePixelPhysicalValueY",
        "vm": "1",
    },
    "(0018,602C)": {
        "vr": "FD",
        "name": "PhysicalDeltaX",
        "vm": "1",
    },
    "(0018,602E)": {
        "vr": "FD",
        "name": "PhysicalDeltaY",
        "vm": "1",
    },
    "(0018,6030)": {
        "vr": "UL",
        "name": "TransducerFrequency",
        "vm": "1",
    },
    "(0018,6031)": {
        "vr": "CS",
        "name": "TransducerType",
        "vm": "1",
    },
    "(0018,6032)": {
        "vr": "UL",
        "name": "PulseRepetitionFrequency",
        "vm": "1",
    },
    "(0018,6034)": {
        "vr": "FD",
        "name": "DopplerCorrectionAngle",
        "vm": "1",
    },
    "(0018,6036)": {
        "vr": "FD",
        "name": "SteeringAngle",
        "vm": "1",
    },
    "(0018,6039)": {
        "vr": "SL",
        "name": "DopplerSampleVolumeXPosition",
        "vm": "1",
    },
    "(0018,603B)": {
        "vr": "SL",
        "name": "DopplerSampleVolumeYPosition",
        "vm": "1",
    },
    "(0018,603D)": {
        "vr": "SL",
        "name": "TMLinePositionX0",
        "vm": "1",
    },
    "(0018,603F)": {
        "vr": "SL",
        "name": "TMLinePositionY0",
        "vm": "1",
    },
    "(0018,6041)": {
        "vr": "SL",
        "name": "TMLinePositionX1",
        "vm": "1",
    },
    "(0018,6043)": {
        "vr": "SL",
        "name": "TMLinePositionY1",
        "vm": "1",
    },
    "(0018,6044)": {
        "vr": "US",
        "name": "PixelComponentOrganization",
        "vm": "1",
    },
    "(0018,6046)": {
        "vr": "UL",
        "name": "PixelComponentMask",
        "vm": "1",
    },
    "(0018,6048)": {
        "vr": "UL",
        "name": "PixelComponentRangeStart",
        "vm": "1",
    },
    "(0018,604A)": {
        "vr": "UL",
        "name": "PixelComponentRangeStop",
        "vm": "1",
    },
    "(0018,604C)": {
        "vr": "US",
        "name": "PixelComponentPhysicalUnits",
        "vm": "1",
    },
    "(0018,604E)": {
        "vr": "US",
        "name": "PixelComponentDataType",
        "vm": "1",
    },
    "(0018,6050)": {
        "vr": "UL",
        "name": "NumberOfTableBreakPoints",
        "vm": "1",
    },
    "(0018,6052)": {
        "vr": "UL",
        "name": "TableOfXBreakPoints",
        "vm": "1-n",
    },
    "(0018,6054)": {
        "vr": "FD",
        "name": "TableOfYBreakPoints",
        "vm": "1-n",
    },
    "(0018,6056)": {
        "vr": "UL",
        "name": "NumberOfTableEntries",
        "vm": "1",
    },
    "(0018,6058)": {
        "vr": "UL",
        "name": "TableOfPixelValues",
        "vm": "1-n",
    },
    "(0018,605A)": {
        "vr": "FL",
        "name": "TableOfParameterValues",
        "vm": "1-n",
    },
    "(0018,6060)": {
        "vr": "FL",
        "name": "RWaveTimeVector",
        "vm": "1-n",
    },
    "(0018,7000)": {
        "vr": "CS",
        "name": "DetectorConditionsNominalFlag",
        "vm": "1",
    },
    "(0018,7001)": {
        "vr": "DS",
        "name": "DetectorTemperature",
        "vm": "1",
    },
    "(0018,7004)": {
        "vr": "CS",
        "name": "DetectorType",
        "vm": "1",
    },
    "(0018,7005)": {
        "vr": "CS",
        "name": "DetectorConfiguration",
        "vm": "1",
    },
    "(0018,7006)": {
        "vr": "LT",
        "name": "DetectorDescription",
        "vm": "1",
    },
    "(0018,7008)": {
        "vr": "LT",
        "name": "DetectorMode",
        "vm": "1",
    },
    "(0018,700A)": {
        "vr": "SH",
        "name": "DetectorID",
        "vm": "1",
    },
    "(0018,700C)": {
        "vr": "DA",
        "name": "DateOfLastDetectorCalibration",
        "vm": "1",
    },
    "(0018,700E)": {
        "vr": "TM",
        "name": "TimeOfLastDetectorCalibration",
        "vm": "1",
    },
    "(0018,7010)": {
        "vr": "IS",
        "name": "ExposuresOnDetectorSinceLastCalibration",
        "vm": "1",
    },
    "(0018,7011)": {
        "vr": "IS",
        "name": "ExposuresOnDetectorSinceManufactured",
        "vm": "1",
    },
    "(0018,7012)": {
        "vr": "DS",
        "name": "DetectorTimeSinceLastExposure",
        "vm": "1",
    },
    "(0018,7014)": {
        "vr": "DS",
        "name": "DetectorActiveTime",
        "vm": "1",
    },
    "(0018,7016)": {
        "vr": "DS",
        "name": "DetectorActivationOffsetFromExposure",
        "vm": "1",
    },
    "(0018,701A)": {
        "vr": "DS",
        "name": "DetectorBinning",
        "vm": "2",
    },
    "(0018,7020)": {
        "vr": "DS",
        "name": "DetectorElementPhysicalSize",
        "vm": "2",
    },
    "(0018,7022)": {
        "vr": "DS",
        "name": "DetectorElementSpacing",
        "vm": "2",
    },
    "(0018,7024)": {
        "vr": "CS",
        "name": "DetectorActiveShape",
        "vm": "1",
    },
    "(0018,7026)": {
        "vr": "DS",
        "name": "DetectorActiveDimensions",
        "vm": "1-2",
    },
    "(0018,7028)": {
        "vr": "DS",
        "name": "DetectorActiveOrigin",
        "vm": "2",
    },
    "(0018,702A)": {
        "vr": "LO",
        "name": "DetectorManufacturerName",
        "vm": "1",
    },
    "(0018,702B)": {
        "vr": "LO",
        "name": "DetectorManufacturerModelName",
        "vm": "1",
    },
    "(0018,7030)": {
        "vr": "DS",
        "name": "FieldOfViewOrigin",
        "vm": "2",
    },
    "(0018,7032)": {
        "vr": "DS",
        "name": "FieldOfViewRotation",
        "vm": "1",
    },
    "(0018,7034)": {
        "vr": "CS",
        "name": "FieldOfViewHorizontalFlip",
        "vm": "1",
    },
    "(0018,7036)": {
        "vr": "FL",
        "name": "PixelDataAreaOriginRelativeToFOV",
        "vm": "2",
    },
    "(0018,7038)": {
        "vr": "FL",
        "name": "PixelDataAreaRotationAngleRelativeToFOV",
        "vm": "1",
    },
    "(0018,7040)": {
        "vr": "LT",
        "name": "GridAbsorbingMaterial",
        "vm": "1",
    },
    "(0018,7041)": {
        "vr": "LT",
        "name": "GridSpacingMaterial",
        "vm": "1",
    },
    "(0018,7042)": {
        "vr": "DS",
        "name": "GridThickness",
        "vm": "1",
    },
    "(0018,7044)": {
        "vr": "DS",
        "name": "GridPitch",
        "vm": "1",
    },
    "(0018,7046)": {
        "vr": "IS",
        "name": "GridAspectRatio",
        "vm": "2",
    },
    "(0018,7048)": {
        "vr": "DS",
        "name": "GridPeriod",
        "vm": "1",
    },
    "(0018,704C)": {
        "vr": "DS",
        "name": "GridFocalDistance",
        "vm": "1",
    },
    "(0018,7050)": {
        "vr": "CS",
        "name": "FilterMaterial",
        "vm": "1-n",
    },
    "(0018,7052)": {
        "vr": "DS",
        "name": "FilterThicknessMinimum",
        "vm": "1-n",
    },
    "(0018,7054)": {
        "vr": "DS",
        "name": "FilterThicknessMaximum",
        "vm": "1-n",
    },
    "(0018,7056)": {
        "vr": "FL",
        "name": "FilterBeamPathLengthMinimum",
        "vm": "1-n",
    },
    "(0018,7058)": {
        "vr": "FL",
        "name": "FilterBeamPathLengthMaximum",
        "vm": "1-n",
    },
    "(0018,7060)": {
        "vr": "CS",
        "name": "ExposureControlMode",
        "vm": "1",
    },
    "(0018,7062)": {
        "vr": "LT",
        "name": "ExposureControlModeDescription",
        "vm": "1",
    },
    "(0018,7064)": {
        "vr": "CS",
        "name": "ExposureStatus",
        "vm": "1",
    },
    "(0018,7065)": {
        "vr": "DS",
        "name": "PhototimerSetting",
        "vm": "1",
    },
    "(0018,8150)": {
        "vr": "DS",
        "name": "ExposureTimeInuS",
        "vm": "1",
    },
    "(0018,8151)": {
        "vr": "DS",
        "name": "XRayTubeCurrentInuA",
        "vm": "1",
    },
    "(0018,9004)": {
        "vr": "CS",
        "name": "ContentQualification",
        "vm": "1",
    },
    "(0018,9005)": {
        "vr": "SH",
        "name": "PulseSequenceName",
        "vm": "1",
    },
    "(0018,9006)": {
        "vr": "SQ",
        "name": "MRImagingModifierSequence",
        "vm": "1",
    },
    "(0018,9008)": {
        "vr": "CS",
        "name": "EchoPulseSequence",
        "vm": "1",
    },
    "(0018,9009)": {
        "vr": "CS",
        "name": "InversionRecovery",
        "vm": "1",
    },
    "(0018,9010)": {
        "vr": "CS",
        "name": "FlowCompensation",
        "vm": "1",
    },
    "(0018,9011)": {
        "vr": "CS",
        "name": "MultipleSpinEcho",
        "vm": "1",
    },
    "(0018,9012)": {
        "vr": "CS",
        "name": "MultiPlanarExcitation",
        "vm": "1",
    },
    "(0018,9014)": {
        "vr": "CS",
        "name": "PhaseContrast",
        "vm": "1",
    },
    "(0018,9015)": {
        "vr": "CS",
        "name": "TimeOfFlightContrast",
        "vm": "1",
    },
    "(0018,9016)": {
        "vr": "CS",
        "name": "Spoiling",
        "vm": "1",
    },
    "(0018,9017)": {
        "vr": "CS",
        "name": "SteadyStatePulseSequence",
        "vm": "1",
    },
    "(0018,9018)": {
        "vr": "CS",
        "name": "EchoPlanarPulseSequence",
        "vm": "1",
    },
    "(0018,9019)": {
        "vr": "FD",
        "name": "TagAngleFirstAxis",
        "vm": "1",
    },
    "(0018,9020)": {
        "vr": "CS",
        "name": "MagnetizationTransfer",
        "vm": "1",
    },
    "(0018,9021)": {
        "vr": "CS",
        "name": "T2Preparation",
        "vm": "1",
    },
    "(0018,9022)": {
        "vr": "CS",
        "name": "BloodSignalNulling",
        "vm": "1",
    },
    "(0018,9024)": {
        "vr": "CS",
        "name": "SaturationRecovery",
        "vm": "1",
    },
    "(0018,9025)": {
        "vr": "CS",
        "name": "SpectrallySelectedSuppression",
        "vm": "1",
    },
    "(0018,9026)": {
        "vr": "CS",
        "name": "SpectrallySelectedExcitation",
        "vm": "1",
    },
    "(0018,9027)": {
        "vr": "CS",
        "name": "SpatialPresaturation",
        "vm": "1",
    },
    "(0018,9028)": {
        "vr": "CS",
        "name": "Tagging",
        "vm": "1",
    },
    "(0018,9029)": {
        "vr": "CS",
        "name": "OversamplingPhase",
        "vm": "1",
    },
    "(0018,9030)": {
        "vr": "FD",
        "name": "TagSpacingFirstDimension",
        "vm": "1",
    },
    "(0018,9032)": {
        "vr": "CS",
        "name": "GeometryOfKSpaceTraversal",
        "vm": "1",
    },
    "(0018,9033)": {
        "vr": "CS",
        "name": "SegmentedKSpaceTraversal",
        "vm": "1",
    },
    "(0018,9034)": {
        "vr": "CS",
        "name": "RectilinearPhaseEncodeReordering",
        "vm": "1",
    },
    "(0018,9035)": {
        "vr": "FD",
        "name": "TagThickness",
        "vm": "1",
    },
    "(0018,9036)": {
        "vr": "CS",
        "name": "PartialFourierDirection",
        "vm": "1",
    },
    "(0018,9037)": {
        "vr": "CS",
        "name": "CardiacSynchronizationTechnique",
        "vm": "1",
    },
    "(0018,9041)": {
        "vr": "LO",
        "name": "ReceiveCoilManufacturerName",
        "vm": "1",
    },
    "(0018,9042)": {
        "vr": "SQ",
        "name": "MRReceiveCoilSequence",
        "vm": "1",
    },
    "(0018,9043)": {
        "vr": "CS",
        "name": "ReceiveCoilType",
        "vm": "1",
    },
    "(0018,9044)": {
        "vr": "CS",
        "name": "QuadratureReceiveCoil",
        "vm": "1",
    },
    "(0018,9045)": {
        "vr": "SQ",
        "name": "MultiCoilDefinitionSequence",
        "vm": "1",
    },
    "(0018,9046)": {
        "vr": "LO",
        "name": "MultiCoilConfiguration",
        "vm": "1",
    },
    "(0018,9047)": {
        "vr": "SH",
        "name": "MultiCoilElementName",
        "vm": "1",
    },
    "(0018,9048)": {
        "vr": "CS",
        "name": "MultiCoilElementUsed",
        "vm": "1",
    },
    "(0018,9049)": {
        "vr": "SQ",
        "name": "MRTransmitCoilSequence",
        "vm": "1",
    },
    "(0018,9050)": {
        "vr": "LO",
        "name": "TransmitCoilManufacturerName",
        "vm": "1",
    },
    "(0018,9051)": {
        "vr": "CS",
        "name": "TransmitCoilType",
        "vm": "1",
    },
    "(0018,9052)": {
        "vr": "FD",
        "name": "SpectralWidth",
        "vm": "1-2",
    },
    "(0018,9053)": {
        "vr": "FD",
        "name": "ChemicalShiftReference",
        "vm": "1-2",
    },
    "(0018,9054)": {
        "vr": "CS",
        "name": "VolumeLocalizationTechnique",
        "vm": "1",
    },
    "(0018,9058)": {
        "vr": "US",
        "name": "MRAcquisitionFrequencyEncodingSteps",
        "vm": "1",
    },
    "(0018,9059)": {
        "vr": "CS",
        "name": "Decoupling",
        "vm": "1",
    },
    "(0018,9060)": {
        "vr": "CS",
        "name": "DecoupledNucleus",
        "vm": "1-2",
    },
    "(0018,9061)": {
        "vr": "FD",
        "name": "DecouplingFrequency",
        "vm": "1-2",
    },
    "(0018,9062)": {
        "vr": "CS",
        "name": "DecouplingMethod",
        "vm": "1",
    },
    "(0018,9063)": {
        "vr": "FD",
        "name": "DecouplingChemicalShiftReference",
        "vm": "1-2",
    },
    "(0018,9064)": {
        "vr": "CS",
        "name": "KSpaceFiltering",
        "vm": "1",
    },
    "(0018,9065)": {
        "vr": "CS",
        "name": "TimeDomainFiltering",
        "vm": "1-2",
    },
    "(0018,9066)": {
        "vr": "US",
        "name": "NumberOfZeroFills",
        "vm": "1-2",
    },
    "(0018,9067)": {
        "vr": "CS",
        "name": "BaselineCorrection",
        "vm": "1",
    },
    "(0018,9069)": {
        "vr": "FD",
        "name": "ParallelReductionFactorInPlane",
        "vm": "1",
    },
    "(0018,9070)": {
        "vr": "FD",
        "name": "CardiacRRIntervalSpecified",
        "vm": "1",
    },
    "(0018,9073)": {
        "vr": "FD",
        "name": "AcquisitionDuration",
        "vm": "1",
    },
    "(0018,9074)": {
        "vr": "DT",
        "name": "FrameAcquisitionDateTime",
        "vm": "1",
    },
    "(0018,9075)": {
        "vr": "CS",
        "name": "DiffusionDirectionality",
        "vm": "1",
    },
    "(0018,9076)": {
        "vr": "SQ",
        "name": "DiffusionGradientDirectionSequence",
        "vm": "1",
    },
    "(0018,9077)": {
        "vr": "CS",
        "name": "ParallelAcquisition",
        "vm": "1",
    },
    "(0018,9078)": {
        "vr": "CS",
        "name": "ParallelAcquisitionTechnique",
        "vm": "1",
    },
    "(0018,9079)": {
        "vr": "FD",
        "name": "InversionTimes",
        "vm": "1-n",
    },
    "(0018,9080)": {
        "vr": "ST",
        "name": "MetaboliteMapDescription",
        "vm": "1",
    },
    "(0018,9081)": {
        "vr": "CS",
        "name": "PartialFourier",
        "vm": "1",
    },
    "(0018,9082)": {
        "vr": "FD",
        "name": "EffectiveEchoTime",
        "vm": "1",
    },
    "(0018,9083)": {
        "vr": "SQ",
        "name": "MetaboliteMapCodeSequence",
        "vm": "1",
    },
    "(0018,9084)": {
        "vr": "SQ",
        "name": "ChemicalShiftSequence",
        "vm": "1",
    },
    "(0018,9085)": {
        "vr": "CS",
        "name": "CardiacSignalSource",
        "vm": "1",
    },
    "(0018,9087)": {
        "vr": "FD",
        "name": "DiffusionBValue",
        "vm": "1",
    },
    "(0018,9089)": {
        "vr": "FD",
        "name": "DiffusionGradientOrientation",
        "vm": "3",
    },
    "(0018,9090)": {
        "vr": "FD",
        "name": "VelocityEncodingDirection",
        "vm": "3",
    },
    "(0018,9091)": {
        "vr": "FD",
        "name": "VelocityEncodingMinimumValue",
        "vm": "1",
    },
    "(0018,9092)": {
        "vr": "SQ",
        "name": "VelocityEncodingAcquisitionSequence",
        "vm": "1",
    },
    "(0018,9093)": {
        "vr": "US",
        "name": "NumberOfKSpaceTrajectories",
        "vm": "1",
    },
    "(0018,9094)": {
        "vr": "CS",
        "name": "CoverageOfKSpace",
        "vm": "1",
    },
    "(0018,9095)": {
        "vr": "UL",
        "name": "SpectroscopyAcquisitionPhaseRows",
        "vm": "1",
    },
    "(0018,9098)": {
        "vr": "FD",
        "name": "TransmitterFrequency",
        "vm": "1-2",
    },
    "(0018,9100)": {
        "vr": "CS",
        "name": "ResonantNucleus",
        "vm": "1-2",
    },
    "(0018,9101)": {
        "vr": "CS",
        "name": "FrequencyCorrection",
        "vm": "1",
    },
    "(0018,9103)": {
        "vr": "SQ",
        "name": "MRSpectroscopyFOVGeometrySequence",
        "vm": "1",
    },
    "(0018,9104)": {
        "vr": "FD",
        "name": "SlabThickness",
        "vm": "1",
    },
    "(0018,9105)": {
        "vr": "FD",
        "name": "SlabOrientation",
        "vm": "3",
    },
    "(0018,9106)": {
        "vr": "FD",
        "name": "MidSlabPosition",
        "vm": "3",
    },
    "(0018,9107)": {
        "vr": "SQ",
        "name": "MRSpatialSaturationSequence",
        "vm": "1",
    },
    "(0018,9112)": {
        "vr": "SQ",
        "name": "MRTimingAndRelatedParametersSequence",
        "vm": "1",
    },
    "(0018,9114)": {
        "vr": "SQ",
        "name": "MREchoSequence",
        "vm": "1",
    },
    "(0018,9115)": {
        "vr": "SQ",
        "name": "MRModifierSequence",
        "vm": "1",
    },
    "(0018,9117)": {
        "vr": "SQ",
        "name": "MRDiffusionSequence",
        "vm": "1",
    },
    "(0018,9118)": {
        "vr": "SQ",
        "name": "CardiacSynchronizationSequence",
        "vm": "1",
    },
    "(0018,9119)": {
        "vr": "SQ",
        "name": "MRAveragesSequence",
        "vm": "1",
    },
    "(0018,9125)": {
        "vr": "SQ",
        "name": "MRFOVGeometrySequence",
        "vm": "1",
    },
    "(0018,9126)": {
        "vr": "SQ",
        "name": "VolumeLocalizationSequence",
        "vm": "1",
    },
    "(0018,9127)": {
        "vr": "UL",
        "name": "SpectroscopyAcquisitionDataColumns",
        "vm": "1",
    },
    "(0018,9147)": {
        "vr": "CS",
        "name": "DiffusionAnisotropyType",
        "vm": "1",
    },
    "(0018,9151)": {
        "vr": "DT",
        "name": "FrameReferenceDateTime",
        "vm": "1",
    },
    "(0018,9152)": {
        "vr": "SQ",
        "name": "MRMetaboliteMapSequence",
        "vm": "1",
    },
    "(0018,9155)": {
        "vr": "FD",
        "name": "ParallelReductionFactorOutOfPlane",
        "vm": "1",
    },
    "(0018,9159)": {
        "vr": "UL",
        "name": "SpectroscopyAcquisitionOutOfPlanePhaseSteps",
        "vm": "1",
    },
    "(0018,9168)": {
        "vr": "FD",
        "name": "ParallelReductionFactorSecondInPlane",
        "vm": "1",
    },
    "(0018,9169)": {
        "vr": "CS",
        "name": "CardiacBeatRejectionTechnique",
        "vm": "1",
    },
    "(0018,9170)": {
        "vr": "CS",
        "name": "RespiratoryMotionCompensationTechnique",
        "vm": "1",
    },
    "(0018,9171)": {
        "vr": "CS",
        "name": "RespiratorySignalSource",
        "vm": "1",
    },
    "(0018,9172)": {
        "vr": "CS",
        "name": "BulkMotionCompensationTechnique",
        "vm": "1",
    },
    "(0018,9173)": {
        "vr": "CS",
        "name": "BulkMotionSignalSource",
        "vm": "1",
    },
    "(0018,9174)": {
        "vr": "CS",
        "name": "ApplicableSafetyStandardAgency",
        "vm": "1",
    },
    "(0018,9175)": {
        "vr": "LO",
        "name": "ApplicableSafetyStandardDescription",
        "vm": "1",
    },
    "(0018,9176)": {
        "vr": "SQ",
        "name": "OperatingModeSequence",
        "vm": "1",
    },
    "(0018,9177)": {
        "vr": "CS",
        "name": "OperatingModeType",
        "vm": "1",
    },
    "(0018,9178)": {
        "vr": "CS",
        "name": "OperatingMode",
        "vm": "1",
    },
    "(0018,9179)": {
        "vr": "CS",
        "name": "SpecificAbsorptionRateDefinition",
        "vm": "1",
    },
    "(0018,9180)": {
        "vr": "CS",
        "name": "GradientOutputType",
        "vm": "1",
    },
    "(0018,9181)": {
        "vr": "FD",
        "name": "SpecificAbsorptionRateValue",
        "vm": "1",
    },
    "(0018,9182)": {
        "vr": "FD",
        "name": "GradientOutput",
        "vm": "1",
    },
    "(0018,9183)": {
        "vr": "CS",
        "name": "FlowCompensationDirection",
        "vm": "1",
    },
    "(0018,9184)": {
        "vr": "FD",
        "name": "TaggingDelay",
        "vm": "1",
    },
    "(0018,9185)": {
        "vr": "ST",
        "name": "RespiratoryMotionCompensationTechniqueDescription",
        "vm": "1",
    },
    "(0018,9186)": {
        "vr": "SH",
        "name": "RespiratorySignalSourceID",
        "vm": "1",
    },
    "(0018,9197)": {
        "vr": "SQ",
        "name": "MRVelocityEncodingSequence",
        "vm": "1",
    },
    "(0018,9198)": {
        "vr": "CS",
        "name": "FirstOrderPhaseCorrection",
        "vm": "1",
    },
    "(0018,9199)": {
        "vr": "CS",
        "name": "WaterReferencedPhaseCorrection",
        "vm": "1",
    },
    "(0018,9200)": {
        "vr": "CS",
        "name": "MRSpectroscopyAcquisitionType",
        "vm": "1",
    },
    "(0018,9214)": {
        "vr": "CS",
        "name": "RespiratoryCyclePosition",
        "vm": "1",
    },
    "(0018,9217)": {
        "vr": "FD",
        "name": "VelocityEncodingMaximumValue",
        "vm": "1",
    },
    "(0018,9218)": {
        "vr": "FD",
        "name": "TagSpacingSecondDimension",
        "vm": "1",
    },
    "(0018,9219)": {
        "vr": "SS",
        "name": "TagAngleSecondAxis",
        "vm": "1",
    },
    "(0018,9220)": {
        "vr": "FD",
        "name": "FrameAcquisitionDuration",
        "vm": "1",
    },
    "(0018,9226)": {
        "vr": "SQ",
        "name": "MRImageFrameTypeSequence",
        "vm": "1",
    },
    "(0018,9227)": {
        "vr": "SQ",
        "name": "MRSpectroscopyFrameTypeSequence",
        "vm": "1",
    },
    "(0018,9231)": {
        "vr": "US",
        "name": "MRAcquisitionPhaseEncodingStepsInPlane",
        "vm": "1",
    },
    "(0018,9232)": {
        "vr": "US",
        "name": "MRAcquisitionPhaseEncodingStepsOutOfPlane",
        "vm": "1",
    },
    "(0018,9234)": {
        "vr": "UL",
        "name": "SpectroscopyAcquisitionPhaseColumns",
        "vm": "1",
    },
    "(0018,9236)": {
        "vr": "CS",
        "name": "CardiacCyclePosition",
        "vm": "1",
    },
    "(0018,9239)": {
        "vr": "SQ",
        "name": "SpecificAbsorptionRateSequence",
        "vm": "1",
    },
    "(0018,9240)": {
        "vr": "US",
        "name": "RFEchoTrainLength",
        "vm": "1",
    },
    "(0018,9241)": {
        "vr": "US",
        "name": "GradientEchoTrainLength",
        "vm": "1",
    },
    "(0018,9250)": {
        "vr": "CS",
        "name": "ArterialSpinLabelingContrast",
        "vm": "1",
    },
    "(0018,9251)": {
        "vr": "SQ",
        "name": "MRArterialSpinLabelingSequence",
        "vm": "1",
    },
    "(0018,9252)": {
        "vr": "LO",
        "name": "ASLTechniqueDescription",
        "vm": "1",
    },
    "(0018,9253)": {
        "vr": "US",
        "name": "ASLSlabNumber",
        "vm": "1",
    },
    "(0018,9254)": {
        "vr": "FD",
        "name": "ASLSlabThickness",
        "vm": "1",
    },
    "(0018,9255)": {
        "vr": "FD",
        "name": "ASLSlabOrientation",
        "vm": "3",
    },
    "(0018,9256)": {
        "vr": "FD",
        "name": "ASLMidSlabPosition",
        "vm": "3",
    },
    "(0018,9257)": {
        "vr": "CS",
        "name": "ASLContext",
        "vm": "1",
    },
    "(0018,9258)": {
        "vr": "UL",
        "name": "ASLPulseTrainDuration",
        "vm": "1",
    },
    "(0018,9259)": {
        "vr": "CS",
        "name": "ASLCrusherFlag",
        "vm": "1",
    },
    "(0018,925A)": {
        "vr": "FD",
        "name": "ASLCrusherFlowLimit",
        "vm": "1",
    },
    "(0018,925B)": {
        "vr": "LO",
        "name": "ASLCrusherDescription",
        "vm": "1",
    },
    "(0018,925C)": {
        "vr": "CS",
        "name": "ASLBolusCutoffFlag",
        "vm": "1",
    },
    "(0018,925D)": {
        "vr": "SQ",
        "name": "ASLBolusCutoffTimingSequence",
        "vm": "1",
    },
    "(0018,925E)": {
        "vr": "LO",
        "name": "ASLBolusCutoffTechnique",
        "vm": "1",
    },
    "(0018,925F)": {
        "vr": "UL",
        "name": "ASLBolusCutoffDelayTime",
        "vm": "1",
    },
    "(0018,9260)": {
        "vr": "SQ",
        "name": "ASLSlabSequence",
        "vm": "1",
    },
    "(0018,9295)": {
        "vr": "FD",
        "name": "ChemicalShiftMinimumIntegrationLimitInppm",
        "vm": "1",
    },
    "(0018,9296)": {
        "vr": "FD",
        "name": "ChemicalShiftMaximumIntegrationLimitInppm",
        "vm": "1",
    },
    "(0018,9297)": {
        "vr": "CS",
        "name": "WaterReferenceAcquisition",
        "vm": "1",
    },
    "(0018,9298)": {
        "vr": "IS",
        "name": "EchoPeakPosition",
        "vm": "1",
    },
    "(0018,9301)": {
        "vr": "SQ",
        "name": "CTAcquisitionTypeSequence",
        "vm": "1",
    },
    "(0018,9302)": {
        "vr": "CS",
        "name": "AcquisitionType",
        "vm": "1",
    },
    "(0018,9303)": {
        "vr": "FD",
        "name": "TubeAngle",
        "vm": "1",
    },
    "(0018,9304)": {
        "vr": "SQ",
        "name": "CTAcquisitionDetailsSequence",
        "vm": "1",
    },
    "(0018,9305)": {
        "vr": "FD",
        "name": "RevolutionTime",
        "vm": "1",
    },
    "(0018,9306)": {
        "vr": "FD",
        "name": "SingleCollimationWidth",
        "vm": "1",
    },
    "(0018,9307)": {
        "vr": "FD",
        "name": "TotalCollimationWidth",
        "vm": "1",
    },
    "(0018,9308)": {
        "vr": "SQ",
        "name": "CTTableDynamicsSequence",
        "vm": "1",
    },
    "(0018,9309)": {
        "vr": "FD",
        "name": "TableSpeed",
        "vm": "1",
    },
    "(0018,9310)": {
        "vr": "FD",
        "name": "TableFeedPerRotation",
        "vm": "1",
    },
    "(0018,9311)": {
        "vr": "FD",
        "name": "SpiralPitchFactor",
        "vm": "1",
    },
    "(0018,9312)": {
        "vr": "SQ",
        "name": "CTGeometrySequence",
        "vm": "1",
    },
    "(0018,9313)": {
        "vr": "FD",
        "name": "DataCollectionCenterPatient",
        "vm": "3",
    },
    "(0018,9314)": {
        "vr": "SQ",
        "name": "CTReconstructionSequence",
        "vm": "1",
    },
    "(0018,9315)": {
        "vr": "CS",
        "name": "ReconstructionAlgorithm",
        "vm": "1",
    },
    "(0018,9316)": {
        "vr": "CS",
        "name": "ConvolutionKernelGroup",
        "vm": "1",
    },
    "(0018,9317)": {
        "vr": "FD",
        "name": "ReconstructionFieldOfView",
        "vm": "2",
    },
    "(0018,9318)": {
        "vr": "FD",
        "name": "ReconstructionTargetCenterPatient",
        "vm": "3",
    },
    "(0018,9319)": {
        "vr": "FD",
        "name": "ReconstructionAngle",
        "vm": "1",
    },
    "(0018,9320)": {
        "vr": "SH",
        "name": "ImageFilter",
        "vm": "1",
    },
    "(0018,9321)": {
        "vr": "SQ",
        "name": "CTExposureSequence",
        "vm": "1",
    },
    "(0018,9322)": {
        "vr": "FD",
        "name": "ReconstructionPixelSpacing",
        "vm": "2",
    },
    "(0018,9323)": {
        "vr": "CS",
        "name": "ExposureModulationType",
        "vm": "1",
    },
    "(0018,9324)": {
        "vr": "FD",
        "name": "EstimatedDoseSaving",
        "vm": "1",
    },
    "(0018,9325)": {
        "vr": "SQ",
        "name": "CTXRayDetailsSequence",
        "vm": "1",
    },
    "(0018,9326)": {
        "vr": "SQ",
        "name": "CTPositionSequence",
        "vm": "1",
    },
    "(0018,9327)": {
        "vr": "FD",
        "name": "TablePosition",
        "vm": "1",
    },
    "(0018,9328)": {
        "vr": "FD",
        "name": "ExposureTimeInms",
        "vm": "1",
    },
    "(0018,9329)": {
        "vr": "SQ",
        "name": "CTImageFrameTypeSequence",
        "vm": "1",
    },
    "(0018,9330)": {
        "vr": "FD",
        "name": "XRayTubeCurrentInmA",
        "vm": "1",
    },
    "(0018,9332)": {
        "vr": "FD",
        "name": "ExposureInmAs",
        "vm": "1",
    },
    "(0018,9333)": {
        "vr": "CS",
        "name": "ConstantVolumeFlag",
        "vm": "1",
    },
    "(0018,9334)": {
        "vr": "CS",
        "name": "FluoroscopyFlag",
        "vm": "1",
    },
    "(0018,9335)": {
        "vr": "FD",
        "name": "DistanceSourceToDataCollectionCenter",
        "vm": "1",
    },
    "(0018,9337)": {
        "vr": "US",
        "name": "ContrastBolusAgentNumber",
        "vm": "1",
    },
    "(0018,9338)": {
        "vr": "SQ",
        "name": "ContrastBolusIngredientCodeSequence",
        "vm": "1",
    },
    "(0018,9340)": {
        "vr": "SQ",
        "name": "ContrastAdministrationProfileSequence",
        "vm": "1",
    },
    "(0018,9341)": {
        "vr": "SQ",
        "name": "ContrastBolusUsageSequence",
        "vm": "1",
    },
    "(0018,9342)": {
        "vr": "CS",
        "name": "ContrastBolusAgentAdministered",
        "vm": "1",
    },
    "(0018,9343)": {
        "vr": "CS",
        "name": "ContrastBolusAgentDetected",
        "vm": "1",
    },
    "(0018,9344)": {
        "vr": "CS",
        "name": "ContrastBolusAgentPhase",
        "vm": "1",
    },
    "(0018,9345)": {
        "vr": "FD",
        "name": "CTDIvol",
        "vm": "1",
    },
    "(0018,9346)": {
        "vr": "SQ",
        "name": "CTDIPhantomTypeCodeSequence",
        "vm": "1",
    },
    "(0018,9351)": {
        "vr": "FL",
        "name": "CalciumScoringMassFactorPatient",
        "vm": "1",
    },
    "(0018,9352)": {
        "vr": "FL",
        "name": "CalciumScoringMassFactorDevice",
        "vm": "3",
    },
    "(0018,9353)": {
        "vr": "FL",
        "name": "EnergyWeightingFactor",
        "vm": "1",
    },
    "(0018,9360)": {
        "vr": "SQ",
        "name": "CTAdditionalXRaySourceSequence",
        "vm": "1",
    },
    "(0018,9401)": {
        "vr": "SQ",
        "name": "ProjectionPixelCalibrationSequence",
        "vm": "1",
    },
    "(0018,9402)": {
        "vr": "FL",
        "name": "DistanceSourceToIsocenter",
        "vm": "1",
    },
    "(0018,9403)": {
        "vr": "FL",
        "name": "DistanceObjectToTableTop",
        "vm": "1",
    },
    "(0018,9404)": {
        "vr": "FL",
        "name": "ObjectPixelSpacingInCenterOfBeam",
        "vm": "2",
    },
    "(0018,9405)": {
        "vr": "SQ",
        "name": "PositionerPositionSequence",
        "vm": "1",
    },
    "(0018,9406)": {
        "vr": "SQ",
        "name": "TablePositionSequence",
        "vm": "1",
    },
    "(0018,9407)": {
        "vr": "SQ",
        "name": "CollimatorShapeSequence",
        "vm": "1",
    },
    "(0018,9410)": {
        "vr": "CS",
        "name": "PlanesInAcquisition",
        "vm": "1",
    },
    "(0018,9412)": {
        "vr": "SQ",
        "name": "XAXRFFrameCharacteristicsSequence",
        "vm": "1",
    },
    "(0018,9417)": {
        "vr": "SQ",
        "name": "FrameAcquisitionSequence",
        "vm": "1",
    },
    "(0018,9420)": {
        "vr": "CS",
        "name": "XRayReceptorType",
        "vm": "1",
    },
    "(0018,9423)": {
        "vr": "LO",
        "name": "AcquisitionProtocolName",
        "vm": "1",
    },
    "(0018,9424)": {
        "vr": "LT",
        "name": "AcquisitionProtocolDescription",
        "vm": "1",
    },
    "(0018,9425)": {
        "vr": "CS",
        "name": "ContrastBolusIngredientOpaque",
        "vm": "1",
    },
    "(0018,9426)": {
        "vr": "FL",
        "name": "DistanceReceptorPlaneToDetectorHousing",
        "vm": "1",
    },
    "(0018,9427)": {
        "vr": "CS",
        "name": "IntensifierActiveShape",
        "vm": "1",
    },
    "(0018,9428)": {
        "vr": "FL",
        "name": "IntensifierActiveDimensions",
        "vm": "1-2",
    },
    "(0018,9429)": {
        "vr": "FL",
        "name": "PhysicalDetectorSize",
        "vm": "2",
    },
    "(0018,9430)": {
        "vr": "FL",
        "name": "PositionOfIsocenterProjection",
        "vm": "2",
    },
    "(0018,9432)": {
        "vr": "SQ",
        "name": "FieldOfViewSequence",
        "vm": "1",
    },
    "(0018,9433)": {
        "vr": "LO",
        "name": "FieldOfViewDescription",
        "vm": "1",
    },
    "(0018,9434)": {
        "vr": "SQ",
        "name": "ExposureControlSensingRegionsSequence",
        "vm": "1",
    },
    "(0018,9435)": {
        "vr": "CS",
        "name": "ExposureControlSensingRegionShape",
        "vm": "1",
    },
    "(0018,9436)": {
        "vr": "SS",
        "name": "ExposureControlSensingRegionLeftVerticalEdge",
        "vm": "1",
    },
    "(0018,9437)": {
        "vr": "SS",
        "name": "ExposureControlSensingRegionRightVerticalEdge",
        "vm": "1",
    },
    "(0018,9438)": {
        "vr": "SS",
        "name": "ExposureControlSensingRegionUpperHorizontalEdge",
        "vm": "1",
    },
    "(0018,9439)": {
        "vr": "SS",
        "name": "ExposureControlSensingRegionLowerHorizontalEdge",
        "vm": "1",
    },
    "(0018,9440)": {
        "vr": "SS",
        "name": "CenterOfCircularExposureControlSensingRegion",
        "vm": "2",
    },
    "(0018,9441)": {
        "vr": "US",
        "name": "RadiusOfCircularExposureControlSensingRegion",
        "vm": "1",
    },
    "(0018,9442)": {
        "vr": "SS",
        "name": "VerticesOfThePolygonalExposureControlSensingRegion",
        "vm": "2-n",
    },
    "(0018,9447)": {
        "vr": "FL",
        "name": "ColumnAngulationPatient",
        "vm": "1",
    },
    "(0018,9449)": {
        "vr": "FL",
        "name": "BeamAngle",
        "vm": "1",
    },
    "(0018,9451)": {
        "vr": "SQ",
        "name": "FrameDetectorParametersSequence",
        "vm": "1",
    },
    "(0018,9452)": {
        "vr": "FL",
        "name": "CalculatedAnatomyThickness",
        "vm": "1",
    },
    "(0018,9455)": {
        "vr": "SQ",
        "name": "CalibrationSequence",
        "vm": "1",
    },
    "(0018,9456)": {
        "vr": "SQ",
        "name": "ObjectThicknessSequence",
        "vm": "1",
    },
    "(0018,9457)": {
        "vr": "CS",
        "name": "PlaneIdentification",
        "vm": "1",
    },
    "(0018,9461)": {
        "vr": "FL",
        "name": "FieldOfViewDimensionsInFloat",
        "vm": "1-2",
    },
    "(0018,9462)": {
        "vr": "SQ",
        "name": "IsocenterReferenceSystemSequence",
        "vm": "1",
    },
    "(0018,9463)": {
        "vr": "FL",
        "name": "PositionerIsocenterPrimaryAngle",
        "vm": "1",
    },
    "(0018,9464)": {
        "vr": "FL",
        "name": "PositionerIsocenterSecondaryAngle",
        "vm": "1",
    },
    "(0018,9465)": {
        "vr": "FL",
        "name": "PositionerIsocenterDetectorRotationAngle",
        "vm": "1",
    },
    "(0018,9466)": {
        "vr": "FL",
        "name": "TableXPositionToIsocenter",
        "vm": "1",
    },
    "(0018,9467)": {
        "vr": "FL",
        "name": "TableYPositionToIsocenter",
        "vm": "1",
    },
    "(0018,9468)": {
        "vr": "FL",
        "name": "TableZPositionToIsocenter",
        "vm": "1",
    },
    "(0018,9469)": {
        "vr": "FL",
        "name": "TableHorizontalRotationAngle",
        "vm": "1",
    },
    "(0018,9470)": {
        "vr": "FL",
        "name": "TableHeadTiltAngle",
        "vm": "1",
    },
    "(0018,9471)": {
        "vr": "FL",
        "name": "TableCradleTiltAngle",
        "vm": "1",
    },
    "(0018,9472)": {
        "vr": "SQ",
        "name": "FrameDisplayShutterSequence",
        "vm": "1",
    },
    "(0018,9473)": {
        "vr": "FL",
        "name": "AcquiredImageAreaDoseProduct",
        "vm": "1",
    },
    "(0018,9474)": {
        "vr": "CS",
        "name": "CArmPositionerTabletopRelationship",
        "vm": "1",
    },
    "(0018,9476)": {
        "vr": "SQ",
        "name": "XRayGeometrySequence",
        "vm": "1",
    },
    "(0018,9477)": {
        "vr": "SQ",
        "name": "IrradiationEventIdentificationSequence",
        "vm": "1",
    },
    "(0018,9504)": {
        "vr": "SQ",
        "name": "XRay3DFrameTypeSequence",
        "vm": "1",
    },
    "(0018,9506)": {
        "vr": "SQ",
        "name": "ContributingSourcesSequence",
        "vm": "1",
    },
    "(0018,9507)": {
        "vr": "SQ",
        "name": "XRay3DAcquisitionSequence",
        "vm": "1",
    },
    "(0018,9508)": {
        "vr": "FL",
        "name": "PrimaryPositionerScanArc",
        "vm": "1",
    },
    "(0018,9509)": {
        "vr": "FL",
        "name": "SecondaryPositionerScanArc",
        "vm": "1",
    },
    "(0018,9510)": {
        "vr": "FL",
        "name": "PrimaryPositionerScanStartAngle",
        "vm": "1",
    },
    "(0018,9511)": {
        "vr": "FL",
        "name": "SecondaryPositionerScanStartAngle",
        "vm": "1",
    },
    "(0018,9514)": {
        "vr": "FL",
        "name": "PrimaryPositionerIncrement",
        "vm": "1",
    },
    "(0018,9515)": {
        "vr": "FL",
        "name": "SecondaryPositionerIncrement",
        "vm": "1",
    },
    "(0018,9516)": {
        "vr": "DT",
        "name": "StartAcquisitionDateTime",
        "vm": "1",
    },
    "(0018,9517)": {
        "vr": "DT",
        "name": "EndAcquisitionDateTime",
        "vm": "1",
    },
    "(0018,9518)": {
        "vr": "SS",
        "name": "PrimaryPositionerIncrementSign",
        "vm": "1",
    },
    "(0018,9519)": {
        "vr": "SS",
        "name": "SecondaryPositionerIncrementSign",
        "vm": "1",
    },
    "(0018,9524)": {
        "vr": "LO",
        "name": "ApplicationName",
        "vm": "1",
    },
    "(0018,9525)": {
        "vr": "LO",
        "name": "ApplicationVersion",
        "vm": "1",
    },
    "(0018,9526)": {
        "vr": "LO",
        "name": "ApplicationManufacturer",
        "vm": "1",
    },
    "(0018,9527)": {
        "vr": "CS",
        "name": "AlgorithmType",
        "vm": "1",
    },
    "(0018,9528)": {
        "vr": "LO",
        "name": "AlgorithmDescription",
        "vm": "1",
    },
    "(0018,9530)": {
        "vr": "SQ",
        "name": "XRay3DReconstructionSequence",
        "vm": "1",
    },
    "(0018,9531)": {
        "vr": "LO",
        "name": "ReconstructionDescription",
        "vm": "1",
    },
    "(0018,9538)": {
        "vr": "SQ",
        "name": "PerProjectionAcquisitionSequence",
        "vm": "1",
    },
    "(0018,9541)": {
        "vr": "SQ",
        "name": "DetectorPositionSequence",
        "vm": "1",
    },
    "(0018,9542)": {
        "vr": "SQ",
        "name": "XRayAcquisitionDoseSequence",
        "vm": "1",
    },
    "(0018,9543)": {
        "vr": "FD",
        "name": "XRaySourceIsocenterPrimaryAngle",
        "vm": "1",
    },
    "(0018,9544)": {
        "vr": "FD",
        "name": "XRaySourceIsocenterSecondaryAngle",
        "vm": "1",
    },
    "(0018,9545)": {
        "vr": "FD",
        "name": "BreastSupportIsocenterPrimaryAngle",
        "vm": "1",
    },
    "(0018,9546)": {
        "vr": "FD",
        "name": "BreastSupportIsocenterSecondaryAngle",
        "vm": "1",
    },
    "(0018,9547)": {
        "vr": "FD",
        "name": "BreastSupportXPositionToIsocenter",
        "vm": "1",
    },
    "(0018,9548)": {
        "vr": "FD",
        "name": "BreastSupportYPositionToIsocenter",
        "vm": "1",
    },
    "(0018,9549)": {
        "vr": "FD",
        "name": "BreastSupportZPositionToIsocenter",
        "vm": "1",
    },
    "(0018,9550)": {
        "vr": "FD",
        "name": "DetectorIsocenterPrimaryAngle",
        "vm": "1",
    },
    "(0018,9551)": {
        "vr": "FD",
        "name": "DetectorIsocenterSecondaryAngle",
        "vm": "1",
    },
    "(0018,9552)": {
        "vr": "FD",
        "name": "DetectorXPositionToIsocenter",
        "vm": "1",
    },
    "(0018,9553)": {
        "vr": "FD",
        "name": "DetectorYPositionToIsocenter",
        "vm": "1",
    },
    "(0018,9554)": {
        "vr": "FD",
        "name": "DetectorZPositionToIsocenter",
        "vm": "1",
    },
    "(0018,9555)": {
        "vr": "SQ",
        "name": "XRayGridSequence",
        "vm": "1",
    },
    "(0018,9556)": {
        "vr": "SQ",
        "name": "XRayFilterSequence",
        "vm": "1",
    },
    "(0018,9557)": {
        "vr": "FD",
        "name": "DetectorActiveAreaTLHCPosition",
        "vm": "3",
    },
    "(0018,9558)": {
        "vr": "FD",
        "name": "DetectorActiveAreaOrientation",
        "vm": "6",
    },
    "(0018,9559)": {
        "vr": "CS",
        "name": "PositionerPrimaryAngleDirection",
        "vm": "1",
    },
    "(0018,9601)": {
        "vr": "SQ",
        "name": "DiffusionBMatrixSequence",
        "vm": "1",
    },
    "(0018,9602)": {
        "vr": "FD",
        "name": "DiffusionBValueXX",
        "vm": "1",
    },
    "(0018,9603)": {
        "vr": "FD",
        "name": "DiffusionBValueXY",
        "vm": "1",
    },
    "(0018,9604)": {
        "vr": "FD",
        "name": "DiffusionBValueXZ",
        "vm": "1",
    },
    "(0018,9605)": {
        "vr": "FD",
        "name": "DiffusionBValueYY",
        "vm": "1",
    },
    "(0018,9606)": {
        "vr": "FD",
        "name": "DiffusionBValueYZ",
        "vm": "1",
    },
    "(0018,9607)": {
        "vr": "FD",
        "name": "DiffusionBValueZZ",
        "vm": "1",
    },
    "(0018,9701)": {
        "vr": "DT",
        "name": "DecayCorrectionDateTime",
        "vm": "1",
    },
    "(0018,9715)": {
        "vr": "FD",
        "name": "StartDensityThreshold",
        "vm": "1",
    },
    "(0018,9716)": {
        "vr": "FD",
        "name": "StartRelativeDensityDifferenceThreshold",
        "vm": "1",
    },
    "(0018,9717)": {
        "vr": "FD",
        "name": "StartCardiacTriggerCountThreshold",
        "vm": "1",
    },
    "(0018,9718)": {
        "vr": "FD",
        "name": "StartRespiratoryTriggerCountThreshold",
        "vm": "1",
    },
    "(0018,9719)": {
        "vr": "FD",
        "name": "TerminationCountsThreshold",
        "vm": "1",
    },
    "(0018,9720)": {
        "vr": "FD",
        "name": "TerminationDensityThreshold",
        "vm": "1",
    },
    "(0018,9721)": {
        "vr": "FD",
        "name": "TerminationRelativeDensityThreshold",
        "vm": "1",
    },
    "(0018,9722)": {
        "vr": "FD",
        "name": "TerminationTimeThreshold",
        "vm": "1",
    },
    "(0018,9723)": {
        "vr": "FD",
        "name": "TerminationCardiacTriggerCountThreshold",
        "vm": "1",
    },
    "(0018,9724)": {
        "vr": "FD",
        "name": "TerminationRespiratoryTriggerCountThreshold",
        "vm": "1",
    },
    "(0018,9725)": {
        "vr": "CS",
        "name": "DetectorGeometry",
        "vm": "1",
    },
    "(0018,9726)": {
        "vr": "FD",
        "name": "TransverseDetectorSeparation",
        "vm": "1",
    },
    "(0018,9727)": {
        "vr": "FD",
        "name": "AxialDetectorDimension",
        "vm": "1",
    },
    "(0018,9729)": {
        "vr": "US",
        "name": "RadiopharmaceuticalAgentNumber",
        "vm": "1",
    },
    "(0018,9732)": {
        "vr": "SQ",
        "name": "PETFrameAcquisitionSequence",
        "vm": "1",
    },
    "(0018,9733)": {
        "vr": "SQ",
        "name": "PETDetectorMotionDetailsSequence",
        "vm": "1",
    },
    "(0018,9734)": {
        "vr": "SQ",
        "name": "PETTableDynamicsSequence",
        "vm": "1",
    },
    "(0018,9735)": {
        "vr": "SQ",
        "name": "PETPositionSequence",
        "vm": "1",
    },
    "(0018,9736)": {
        "vr": "SQ",
        "name": "PETFrameCorrectionFactorsSequence",
        "vm": "1",
    },
    "(0018,9737)": {
        "vr": "SQ",
        "name": "RadiopharmaceuticalUsageSequence",
        "vm": "1",
    },
    "(0018,9738)": {
        "vr": "CS",
        "name": "AttenuationCorrectionSource",
        "vm": "1",
    },
    "(0018,9739)": {
        "vr": "US",
        "name": "NumberOfIterations",
        "vm": "1",
    },
    "(0018,9740)": {
        "vr": "US",
        "name": "NumberOfSubsets",
        "vm": "1",
    },
    "(0018,9749)": {
        "vr": "SQ",
        "name": "PETReconstructionSequence",
        "vm": "1",
    },
    "(0018,9751)": {
        "vr": "SQ",
        "name": "PETFrameTypeSequence",
        "vm": "1",
    },
    "(0018,9755)": {
        "vr": "CS",
        "name": "TimeOfFlightInformationUsed",
        "vm": "1",
    },
    "(0018,9756)": {
        "vr": "CS",
        "name": "ReconstructionType",
        "vm": "1",
    },
    "(0018,9758)": {
        "vr": "CS",
        "name": "DecayCorrected",
        "vm": "1",
    },
    "(0018,9759)": {
        "vr": "CS",
        "name": "AttenuationCorrected",
        "vm": "1",
    },
    "(0018,9760)": {
        "vr": "CS",
        "name": "ScatterCorrected",
        "vm": "1",
    },
    "(0018,9761)": {
        "vr": "CS",
        "name": "DeadTimeCorrected",
        "vm": "1",
    },
    "(0018,9762)": {
        "vr": "CS",
        "name": "GantryMotionCorrected",
        "vm": "1",
    },
    "(0018,9763)": {
        "vr": "CS",
        "name": "PatientMotionCorrected",
        "vm": "1",
    },
    "(0018,9764)": {
        "vr": "CS",
        "name": "CountLossNormalizationCorrected",
        "vm": "1",
    },
    "(0018,9765)": {
        "vr": "CS",
        "name": "RandomsCorrected",
        "vm": "1",
    },
    "(0018,9766)": {
        "vr": "CS",
        "name": "NonUniformRadialSamplingCorrected",
        "vm": "1",
    },
    "(0018,9767)": {
        "vr": "CS",
        "name": "SensitivityCalibrated",
        "vm": "1",
    },
    "(0018,9768)": {
        "vr": "CS",
        "name": "DetectorNormalizationCorrection",
        "vm": "1",
    },
    "(0018,9769)": {
        "vr": "CS",
        "name": "IterativeReconstructionMethod",
        "vm": "1",
    },
    "(0018,9770)": {
        "vr": "CS",
        "name": "AttenuationCorrectionTemporalRelationship",
        "vm": "1",
    },
    "(0018,9771)": {
        "vr": "SQ",
        "name": "PatientPhysiologicalStateSequence",
        "vm": "1",
    },
    "(0018,9772)": {
        "vr": "SQ",
        "name": "PatientPhysiologicalStateCodeSequence",
        "vm": "1",
    },
    "(0018,9801)": {
        "vr": "FD",
        "name": "DepthsOfFocus",
        "vm": "1-n",
    },
    "(0018,9803)": {
        "vr": "SQ",
        "name": "ExcludedIntervalsSequence",
        "vm": "1",
    },
    "(0018,9804)": {
        "vr": "DT",
        "name": "ExclusionStartDateTime",
        "vm": "1",
    },
    "(0018,9805)": {
        "vr": "FD",
        "name": "ExclusionDuration",
        "vm": "1",
    },
    "(0018,9806)": {
        "vr": "SQ",
        "name": "USImageDescriptionSequence",
        "vm": "1",
    },
    "(0018,9807)": {
        "vr": "SQ",
        "name": "ImageDataTypeSequence",
        "vm": "1",
    },
    "(0018,9808)": {
        "vr": "CS",
        "name": "DataType",
        "vm": "1",
    },
    "(0018,9809)": {
        "vr": "SQ",
        "name": "TransducerScanPatternCodeSequence",
        "vm": "1",
    },
    "(0018,980B)": {
        "vr": "CS",
        "name": "AliasedDataType",
        "vm": "1",
    },
    "(0018,980C)": {
        "vr": "CS",
        "name": "PositionMeasuringDeviceUsed",
        "vm": "1",
    },
    "(0018,980D)": {
        "vr": "SQ",
        "name": "TransducerGeometryCodeSequence",
        "vm": "1",
    },
    "(0018,980E)": {
        "vr": "SQ",
        "name": "TransducerBeamSteeringCodeSequence",
        "vm": "1",
    },
    "(0018,980F)": {
        "vr": "SQ",
        "name": "TransducerApplicationCodeSequence",
        "vm": "1",
    },
    "(0018,9810)": {
        "vr": "xs",
        "name": "ZeroVelocityPixelValue",
        "vm": "1",
    },
    "(0018,A001)": {
        "vr": "SQ",
        "name": "ContributingEquipmentSequence",
        "vm": "1",
    },
    "(0018,A002)": {
        "vr": "DT",
        "name": "ContributionDateTime",
        "vm": "1",
    },
    "(0018,A003)": {
        "vr": "ST",
        "name": "ContributionDescription",
        "vm": "1",
    },
    "(0020,000D)": {
        "vr": "UI",
        "name": "StudyInstanceUID",
        "vm": "1",
    },
    "(0020,000E)": {
        "vr": "UI",
        "name": "SeriesInstanceUID",
        "vm": "1",
    },
    "(0020,0010)": {
        "vr": "SH",
        "name": "StudyID",
        "vm": "1",
    },
    "(0020,0011)": {
        "vr": "IS",
        "name": "SeriesNumber",
        "vm": "1",
    },
    "(0020,0012)": {
        "vr": "IS",
        "name": "AcquisitionNumber",
        "vm": "1",
    },
    "(0020,0013)": {
        "vr": "IS",
        "name": "InstanceNumber",
        "vm": "1",
    },
    "(0020,0019)": {
        "vr": "IS",
        "name": "ItemNumber",
        "vm": "1",
    },
    "(0020,0020)": {
        "vr": "CS",
        "name": "PatientOrientation",
        "vm": "2",
    },
    "(0020,0032)": {
        "vr": "DS",
        "name": "ImagePositionPatient",
        "vm": "3",
    },
    "(0020,0037)": {
        "vr": "DS",
        "name": "ImageOrientationPatient",
        "vm": "6",
    },
    "(0020,0052)": {
        "vr": "UI",
        "name": "FrameOfReferenceUID",
        "vm": "1",
    },
    "(0020,0060)": {
        "vr": "CS",
        "name": "Laterality",
        "vm": "1",
    },
    "(0020,0062)": {
        "vr": "CS",
        "name": "ImageLaterality",
        "vm": "1",
    },
    "(0020,0100)": {
        "vr": "IS",
        "name": "TemporalPositionIdentifier",
        "vm": "1",
    },
    "(0020,0105)": {
        "vr": "IS",
        "name": "NumberOfTemporalPositions",
        "vm": "1",
    },
    "(0020,0110)": {
        "vr": "DS",
        "name": "TemporalResolution",
        "vm": "1",
    },
    "(0020,0200)": {
        "vr": "UI",
        "name": "SynchronizationFrameOfReferenceUID",
        "vm": "1",
    },
    "(0020,0242)": {
        "vr": "UI",
        "name": "SOPInstanceUIDOfConcatenationSource",
        "vm": "1",
    },
    "(0020,1002)": {
        "vr": "IS",
        "name": "ImagesInAcquisition",
        "vm": "1",
    },
    "(0020,1040)": {
        "vr": "LO",
        "name": "PositionReferenceIndicator",
        "vm": "1",
    },
    "(0020,1041)": {
        "vr": "DS",
        "name": "SliceLocation",
        "vm": "1",
    },
    "(0020,1200)": {
        "vr": "IS",
        "name": "NumberOfPatientRelatedStudies",
        "vm": "1",
    },
    "(0020,1202)": {
        "vr": "IS",
        "name": "NumberOfPatientRelatedSeries",
        "vm": "1",
    },
    "(0020,1204)": {
        "vr": "IS",
        "name": "NumberOfPatientRelatedInstances",
        "vm": "1",
    },
    "(0020,1206)": {
        "vr": "IS",
        "name": "NumberOfStudyRelatedSeries",
        "vm": "1",
    },
    "(0020,1208)": {
        "vr": "IS",
        "name": "NumberOfStudyRelatedInstances",
        "vm": "1",
    },
    "(0020,1209)": {
        "vr": "IS",
        "name": "NumberOfSeriesRelatedInstances",
        "vm": "1",
    },
    "(0020,4000)": {
        "vr": "LT",
        "name": "ImageComments",
        "vm": "1",
    },
    "(0020,9056)": {
        "vr": "SH",
        "name": "StackID",
        "vm": "1",
    },
    "(0020,9057)": {
        "vr": "UL",
        "name": "InStackPositionNumber",
        "vm": "1",
    },
    "(0020,9071)": {
        "vr": "SQ",
        "name": "FrameAnatomySequence",
        "vm": "1",
    },
    "(0020,9072)": {
        "vr": "CS",
        "name": "FrameLaterality",
        "vm": "1",
    },
    "(0020,9111)": {
        "vr": "SQ",
        "name": "FrameContentSequence",
        "vm": "1",
    },
    "(0020,9113)": {
        "vr": "SQ",
        "name": "PlanePositionSequence",
        "vm": "1",
    },
    "(0020,9116)": {
        "vr": "SQ",
        "name": "PlaneOrientationSequence",
        "vm": "1",
    },
    "(0020,9128)": {
        "vr": "UL",
        "name": "TemporalPositionIndex",
        "vm": "1",
    },
    "(0020,9153)": {
        "vr": "FD",
        "name": "NominalCardiacTriggerDelayTime",
        "vm": "1",
    },
    "(0020,9154)": {
        "vr": "FL",
        "name": "NominalCardiacTriggerTimePriorToRPeak",
        "vm": "1",
    },
    "(0020,9155)": {
        "vr": "FL",
        "name": "ActualCardiacTriggerTimePriorToRPeak",
        "vm": "1",
    },
    "(0020,9156)": {
        "vr": "US",
        "name": "FrameAcquisitionNumber",
        "vm": "1",
    },
    "(0020,9157)": {
        "vr": "UL",
        "name": "DimensionIndexValues",
        "vm": "1-n",
    },
    "(0020,9158)": {
        "vr": "LT",
        "name": "FrameComments",
        "vm": "1",
    },
    "(0020,9161)": {
        "vr": "UI",
        "name": "ConcatenationUID",
        "vm": "1",
    },
    "(0020,9162)": {
        "vr": "US",
        "name": "InConcatenationNumber",
        "vm": "1",
    },
    "(0020,9163)": {
        "vr": "US",
        "name": "InConcatenationTotalNumber",
        "vm": "1",
    },
    "(0020,9164)": {
        "vr": "UI",
        "name": "DimensionOrganizationUID",
        "vm": "1",
    },
    "(0020,9165)": {
        "vr": "AT",
        "name": "DimensionIndexPointer",
        "vm": "1",
    },
    "(0020,9167)": {
        "vr": "AT",
        "name": "FunctionalGroupPointer",
        "vm": "1",
    },
    "(0020,9170)": {
        "vr": "SQ",
        "name": "UnassignedSharedConvertedAttributesSequence",
        "vm": "1",
    },
    "(0020,9171)": {
        "vr": "SQ",
        "name": "UnassignedPerFrameConvertedAttributesSequence",
        "vm": "1",
    },
    "(0020,9172)": {
        "vr": "SQ",
        "name": "ConversionSourceAttributesSequence",
        "vm": "1",
    },
    "(0020,9213)": {
        "vr": "LO",
        "name": "DimensionIndexPrivateCreator",
        "vm": "1",
    },
    "(0020,9221)": {
        "vr": "SQ",
        "name": "DimensionOrganizationSequence",
        "vm": "1",
    },
    "(0020,9222)": {
        "vr": "SQ",
        "name": "DimensionIndexSequence",
        "vm": "1",
    },
    "(0020,9228)": {
        "vr": "UL",
        "name": "ConcatenationFrameOffsetNumber",
        "vm": "1",
    },
    "(0020,9238)": {
        "vr": "LO",
        "name": "FunctionalGroupPrivateCreator",
        "vm": "1",
    },
    "(0020,9241)": {
        "vr": "FL",
        "name": "NominalPercentageOfCardiacPhase",
        "vm": "1",
    },
    "(0020,9245)": {
        "vr": "FL",
        "name": "NominalPercentageOfRespiratoryPhase",
        "vm": "1",
    },
    "(0020,9246)": {
        "vr": "FL",
        "name": "StartingRespiratoryAmplitude",
        "vm": "1",
    },
    "(0020,9247)": {
        "vr": "CS",
        "name": "StartingRespiratoryPhase",
        "vm": "1",
    },
    "(0020,9248)": {
        "vr": "FL",
        "name": "EndingRespiratoryAmplitude",
        "vm": "1",
    },
    "(0020,9249)": {
        "vr": "CS",
        "name": "EndingRespiratoryPhase",
        "vm": "1",
    },
    "(0020,9250)": {
        "vr": "CS",
        "name": "RespiratoryTriggerType",
        "vm": "1",
    },
    "(0020,9251)": {
        "vr": "FD",
        "name": "RRIntervalTimeNominal",
        "vm": "1",
    },
    "(0020,9252)": {
        "vr": "FD",
        "name": "ActualCardiacTriggerDelayTime",
        "vm": "1",
    },
    "(0020,9253)": {
        "vr": "SQ",
        "name": "RespiratorySynchronizationSequence",
        "vm": "1",
    },
    "(0020,9254)": {
        "vr": "FD",
        "name": "RespiratoryIntervalTime",
        "vm": "1",
    },
    "(0020,9255)": {
        "vr": "FD",
        "name": "NominalRespiratoryTriggerDelayTime",
        "vm": "1",
    },
    "(0020,9256)": {
        "vr": "FD",
        "name": "RespiratoryTriggerDelayThreshold",
        "vm": "1",
    },
    "(0020,9257)": {
        "vr": "FD",
        "name": "ActualRespiratoryTriggerDelayTime",
        "vm": "1",
    },
    "(0020,9301)": {
        "vr": "FD",
        "name": "ImagePositionVolume",
        "vm": "3",
    },
    "(0020,9302)": {
        "vr": "FD",
        "name": "ImageOrientationVolume",
        "vm": "6",
    },
    "(0020,9307)": {
        "vr": "CS",
        "name": "UltrasoundAcquisitionGeometry",
        "vm": "1",
    },
    "(0020,9308)": {
        "vr": "FD",
        "name": "ApexPosition",
        "vm": "3",
    },
    "(0020,9309)": {
        "vr": "FD",
        "name": "VolumeToTransducerMappingMatrix",
        "vm": "16",
    },
    "(0020,930A)": {
        "vr": "FD",
        "name": "VolumeToTableMappingMatrix",
        "vm": "16",
    },
    "(0020,930B)": {
        "vr": "CS",
        "name": "VolumeToTransducerRelationship",
        "vm": "1",
    },
    "(0020,930C)": {
        "vr": "CS",
        "name": "PatientFrameOfReferenceSource",
        "vm": "1",
    },
    "(0020,930D)": {
        "vr": "FD",
        "name": "TemporalPositionTimeOffset",
        "vm": "1",
    },
    "(0020,930E)": {
        "vr": "SQ",
        "name": "PlanePositionVolumeSequence",
        "vm": "1",
    },
    "(0020,930F)": {
        "vr": "SQ",
        "name": "PlaneOrientationVolumeSequence",
        "vm": "1",
    },
    "(0020,9310)": {
        "vr": "SQ",
        "name": "TemporalPositionSequence",
        "vm": "1",
    },
    "(0020,9311)": {
        "vr": "CS",
        "name": "DimensionOrganizationType",
        "vm": "1",
    },
    "(0020,9312)": {
        "vr": "UI",
        "name": "VolumeFrameOfReferenceUID",
        "vm": "1",
    },
    "(0020,9313)": {
        "vr": "UI",
        "name": "TableFrameOfReferenceUID",
        "vm": "1",
    },
    "(0020,9421)": {
        "vr": "LO",
        "name": "DimensionDescriptionLabel",
        "vm": "1",
    },
    "(0020,9450)": {
        "vr": "SQ",
        "name": "PatientOrientationInFrameSequence",
        "vm": "1",
    },
    "(0020,9453)": {
        "vr": "LO",
        "name": "FrameLabel",
        "vm": "1",
    },
    "(0020,9518)": {
        "vr": "US",
        "name": "AcquisitionIndex",
        "vm": "1-n",
    },
    "(0020,9529)": {
        "vr": "SQ",
        "name": "ContributingSOPInstancesReferenceSequence",
        "vm": "1",
    },
    "(0020,9536)": {
        "vr": "US",
        "name": "ReconstructionIndex",
        "vm": "1",
    },
    "(0022,0001)": {
        "vr": "US",
        "name": "LightPathFilterPassThroughWavelength",
        "vm": "1",
    },
    "(0022,0002)": {
        "vr": "US",
        "name": "LightPathFilterPassBand",
        "vm": "2",
    },
    "(0022,0003)": {
        "vr": "US",
        "name": "ImagePathFilterPassThroughWavelength",
        "vm": "1",
    },
    "(0022,0004)": {
        "vr": "US",
        "name": "ImagePathFilterPassBand",
        "vm": "2",
    },
    "(0022,0005)": {
        "vr": "CS",
        "name": "PatientEyeMovementCommanded",
        "vm": "1",
    },
    "(0022,0006)": {
        "vr": "SQ",
        "name": "PatientEyeMovementCommandCodeSequence",
        "vm": "1",
    },
    "(0022,0007)": {
        "vr": "FL",
        "name": "SphericalLensPower",
        "vm": "1",
    },
    "(0022,0008)": {
        "vr": "FL",
        "name": "CylinderLensPower",
        "vm": "1",
    },
    "(0022,0009)": {
        "vr": "FL",
        "name": "CylinderAxis",
        "vm": "1",
    },
    "(0022,000A)": {
        "vr": "FL",
        "name": "EmmetropicMagnification",
        "vm": "1",
    },
    "(0022,000B)": {
        "vr": "FL",
        "name": "IntraOcularPressure",
        "vm": "1",
    },
    "(0022,000C)": {
        "vr": "FL",
        "name": "HorizontalFieldOfView",
        "vm": "1",
    },
    "(0022,000D)": {
        "vr": "CS",
        "name": "PupilDilated",
        "vm": "1",
    },
    "(0022,000E)": {
        "vr": "FL",
        "name": "DegreeOfDilation",
        "vm": "1",
    },
    "(0022,0010)": {
        "vr": "FL",
        "name": "StereoBaselineAngle",
        "vm": "1",
    },
    "(0022,0011)": {
        "vr": "FL",
        "name": "StereoBaselineDisplacement",
        "vm": "1",
    },
    "(0022,0012)": {
        "vr": "FL",
        "name": "StereoHorizontalPixelOffset",
        "vm": "1",
    },
    "(0022,0013)": {
        "vr": "FL",
        "name": "StereoVerticalPixelOffset",
        "vm": "1",
    },
    "(0022,0014)": {
        "vr": "FL",
        "name": "StereoRotation",
        "vm": "1",
    },
    "(0022,0015)": {
        "vr": "SQ",
        "name": "AcquisitionDeviceTypeCodeSequence",
        "vm": "1",
    },
    "(0022,0016)": {
        "vr": "SQ",
        "name": "IlluminationTypeCodeSequence",
        "vm": "1",
    },
    "(0022,0017)": {
        "vr": "SQ",
        "name": "LightPathFilterTypeStackCodeSequence",
        "vm": "1",
    },
    "(0022,0018)": {
        "vr": "SQ",
        "name": "ImagePathFilterTypeStackCodeSequence",
        "vm": "1",
    },
    "(0022,0019)": {
        "vr": "SQ",
        "name": "LensesCodeSequence",
        "vm": "1",
    },
    "(0022,001A)": {
        "vr": "SQ",
        "name": "ChannelDescriptionCodeSequence",
        "vm": "1",
    },
    "(0022,001B)": {
        "vr": "SQ",
        "name": "RefractiveStateSequence",
        "vm": "1",
    },
    "(0022,001C)": {
        "vr": "SQ",
        "name": "MydriaticAgentCodeSequence",
        "vm": "1",
    },
    "(0022,001D)": {
        "vr": "SQ",
        "name": "RelativeImagePositionCodeSequence",
        "vm": "1",
    },
    "(0022,001E)": {
        "vr": "FL",
        "name": "CameraAngleOfView",
        "vm": "1",
    },
    "(0022,0020)": {
        "vr": "SQ",
        "name": "StereoPairsSequence",
        "vm": "1",
    },
    "(0022,0021)": {
        "vr": "SQ",
        "name": "LeftImageSequence",
        "vm": "1",
    },
    "(0022,0022)": {
        "vr": "SQ",
        "name": "RightImageSequence",
        "vm": "1",
    },
    "(0022,0028)": {
        "vr": "CS",
        "name": "StereoPairsPresent",
        "vm": "1",
    },
    "(0022,0030)": {
        "vr": "FL",
        "name": "AxialLengthOfTheEye",
        "vm": "1",
    },
    "(0022,0031)": {
        "vr": "SQ",
        "name": "OphthalmicFrameLocationSequence",
        "vm": "1",
    },
    "(0022,0032)": {
        "vr": "FL",
        "name": "ReferenceCoordinates",
        "vm": "2-2n",
    },
    "(0022,0035)": {
        "vr": "FL",
        "name": "DepthSpatialResolution",
        "vm": "1",
    },
    "(0022,0036)": {
        "vr": "FL",
        "name": "MaximumDepthDistortion",
        "vm": "1",
    },
    "(0022,0037)": {
        "vr": "FL",
        "name": "AlongScanSpatialResolution",
        "vm": "1",
    },
    "(0022,0038)": {
        "vr": "FL",
        "name": "MaximumAlongScanDistortion",
        "vm": "1",
    },
    "(0022,0039)": {
        "vr": "CS",
        "name": "OphthalmicImageOrientation",
        "vm": "1",
    },
    "(0022,0041)": {
        "vr": "FL",
        "name": "DepthOfTransverseImage",
        "vm": "1",
    },
    "(0022,0042)": {
        "vr": "SQ",
        "name": "MydriaticAgentConcentrationUnitsSequence",
        "vm": "1",
    },
    "(0022,0048)": {
        "vr": "FL",
        "name": "AcrossScanSpatialResolution",
        "vm": "1",
    },
    "(0022,0049)": {
        "vr": "FL",
        "name": "MaximumAcrossScanDistortion",
        "vm": "1",
    },
    "(0022,004E)": {
        "vr": "DS",
        "name": "MydriaticAgentConcentration",
        "vm": "1",
    },
    "(0022,0055)": {
        "vr": "FL",
        "name": "IlluminationWaveLength",
        "vm": "1",
    },
    "(0022,0056)": {
        "vr": "FL",
        "name": "IlluminationPower",
        "vm": "1",
    },
    "(0022,0057)": {
        "vr": "FL",
        "name": "IlluminationBandwidth",
        "vm": "1",
    },
    "(0022,0058)": {
        "vr": "SQ",
        "name": "MydriaticAgentSequence",
        "vm": "1",
    },
    "(0022,1007)": {
        "vr": "SQ",
        "name": "OphthalmicAxialMeasurementsRightEyeSequence",
        "vm": "1",
    },
    "(0022,1008)": {
        "vr": "SQ",
        "name": "OphthalmicAxialMeasurementsLeftEyeSequence",
        "vm": "1",
    },
    "(0022,1009)": {
        "vr": "CS",
        "name": "OphthalmicAxialMeasurementsDeviceType",
        "vm": "1",
    },
    "(0022,1010)": {
        "vr": "CS",
        "name": "OphthalmicAxialLengthMeasurementsType",
        "vm": "1",
    },
    "(0022,1012)": {
        "vr": "SQ",
        "name": "OphthalmicAxialLengthSequence",
        "vm": "1",
    },
    "(0022,1019)": {
        "vr": "FL",
        "name": "OphthalmicAxialLength",
        "vm": "1",
    },
    "(0022,1024)": {
        "vr": "SQ",
        "name": "LensStatusCodeSequence",
        "vm": "1",
    },
    "(0022,1025)": {
        "vr": "SQ",
        "name": "VitreousStatusCodeSequence",
        "vm": "1",
    },
    "(0022,1028)": {
        "vr": "SQ",
        "name": "IOLFormulaCodeSequence",
        "vm": "1",
    },
    "(0022,1029)": {
        "vr": "LO",
        "name": "IOLFormulaDetail",
        "vm": "1",
    },
    "(0022,1033)": {
        "vr": "FL",
        "name": "KeratometerIndex",
        "vm": "1",
    },
    "(0022,1035)": {
        "vr": "SQ",
        "name": "SourceOfOphthalmicAxialLengthCodeSequence",
        "vm": "1",
    },
    "(0022,1037)": {
        "vr": "FL",
        "name": "TargetRefraction",
        "vm": "1",
    },
    "(0022,1039)": {
        "vr": "CS",
        "name": "RefractiveProcedureOccurred",
        "vm": "1",
    },
    "(0022,1040)": {
        "vr": "SQ",
        "name": "RefractiveSurgeryTypeCodeSequence",
        "vm": "1",
    },
    "(0022,1044)": {
        "vr": "SQ",
        "name": "OphthalmicUltrasoundMethodCodeSequence",
        "vm": "1",
    },
    "(0022,1050)": {
        "vr": "SQ",
        "name": "OphthalmicAxialLengthMeasurementsSequence",
        "vm": "1",
    },
    "(0022,1053)": {
        "vr": "FL",
        "name": "IOLPower",
        "vm": "1",
    },
    "(0022,1054)": {
        "vr": "FL",
        "name": "PredictedRefractiveError",
        "vm": "1",
    },
    "(0022,1059)": {
        "vr": "FL",
        "name": "OphthalmicAxialLengthVelocity",
        "vm": "1",
    },
    "(0022,1065)": {
        "vr": "LO",
        "name": "LensStatusDescription",
        "vm": "1",
    },
    "(0022,1066)": {
        "vr": "LO",
        "name": "VitreousStatusDescription",
        "vm": "1",
    },
    "(0022,1090)": {
        "vr": "SQ",
        "name": "IOLPowerSequence",
        "vm": "1",
    },
    "(0022,1092)": {
        "vr": "SQ",
        "name": "LensConstantSequence",
        "vm": "1",
    },
    "(0022,1093)": {
        "vr": "LO",
        "name": "IOLManufacturer",
        "vm": "1",
    },
    "(0022,1095)": {
        "vr": "LO",
        "name": "ImplantName",
        "vm": "1",
    },
    "(0022,1096)": {
        "vr": "SQ",
        "name": "KeratometryMeasurementTypeCodeSequence",
        "vm": "1",
    },
    "(0022,1097)": {
        "vr": "LO",
        "name": "ImplantPartNumber",
        "vm": "1",
    },
    "(0022,1100)": {
        "vr": "SQ",
        "name": "ReferencedOphthalmicAxialMeasurementsSequence",
        "vm": "1",
    },
    "(0022,1101)": {
        "vr": "SQ",
        "name": "OphthalmicAxialLengthMeasurementsSegmentNameCodeSequence",
        "vm": "1",
    },
    "(0022,1103)": {
        "vr": "SQ",
        "name": "RefractiveErrorBeforeRefractiveSurgeryCodeSequence",
        "vm": "1",
    },
    "(0022,1121)": {
        "vr": "FL",
        "name": "IOLPowerForExactEmmetropia",
        "vm": "1",
    },
    "(0022,1122)": {
        "vr": "FL",
        "name": "IOLPowerForExactTargetRefraction",
        "vm": "1",
    },
    "(0022,1125)": {
        "vr": "SQ",
        "name": "AnteriorChamberDepthDefinitionCodeSequence",
        "vm": "1",
    },
    "(0022,1127)": {
        "vr": "SQ",
        "name": "LensThicknessSequence",
        "vm": "1",
    },
    "(0022,1128)": {
        "vr": "SQ",
        "name": "AnteriorChamberDepthSequence",
        "vm": "1",
    },
    "(0022,1130)": {
        "vr": "FL",
        "name": "LensThickness",
        "vm": "1",
    },
    "(0022,1131)": {
        "vr": "FL",
        "name": "AnteriorChamberDepth",
        "vm": "1",
    },
    "(0022,1132)": {
        "vr": "SQ",
        "name": "SourceOfLensThicknessDataCodeSequence",
        "vm": "1",
    },
    "(0022,1133)": {
        "vr": "SQ",
        "name": "SourceOfAnteriorChamberDepthDataCodeSequence",
        "vm": "1",
    },
    "(0022,1134)": {
        "vr": "SQ",
        "name": "SourceOfRefractiveMeasurementsSequence",
        "vm": "1",
    },
    "(0022,1135)": {
        "vr": "SQ",
        "name": "SourceOfRefractiveMeasurementsCodeSequence",
        "vm": "1",
    },
    "(0022,1140)": {
        "vr": "CS",
        "name": "OphthalmicAxialLengthMeasurementModified",
        "vm": "1",
    },
    "(0022,1150)": {
        "vr": "SQ",
        "name": "OphthalmicAxialLengthDataSourceCodeSequence",
        "vm": "1",
    },
    "(0022,1155)": {
        "vr": "FL",
        "name": "SignalToNoiseRatio",
        "vm": "1",
    },
    "(0022,1159)": {
        "vr": "LO",
        "name": "OphthalmicAxialLengthDataSourceDescription",
        "vm": "1",
    },
    "(0022,1210)": {
        "vr": "SQ",
        "name": "OphthalmicAxialLengthMeasurementsTotalLengthSequence",
        "vm": "1",
    },
    "(0022,1211)": {
        "vr": "SQ",
        "name": "OphthalmicAxialLengthMeasurementsSegmentalLengthSequence",
        "vm": "1",
    },
    "(0022,1212)": {
        "vr": "SQ",
        "name": "OphthalmicAxialLengthMeasurementsLengthSummationSequence",
        "vm": "1",
    },
    "(0022,1220)": {
        "vr": "SQ",
        "name": "UltrasoundOphthalmicAxialLengthMeasurementsSequence",
        "vm": "1",
    },
    "(0022,1225)": {
        "vr": "SQ",
        "name": "OpticalOphthalmicAxialLengthMeasurementsSequence",
        "vm": "1",
    },
    "(0022,1230)": {
        "vr": "SQ",
        "name": "UltrasoundSelectedOphthalmicAxialLengthSequence",
        "vm": "1",
    },
    "(0022,1250)": {
        "vr": "SQ",
        "name": "OphthalmicAxialLengthSelectionMethodCodeSequence",
        "vm": "1",
    },
    "(0022,1255)": {
        "vr": "SQ",
        "name": "OpticalSelectedOphthalmicAxialLengthSequence",
        "vm": "1",
    },
    "(0022,1257)": {
        "vr": "SQ",
        "name": "SelectedSegmentalOphthalmicAxialLengthSequence",
        "vm": "1",
    },
    "(0022,1260)": {
        "vr": "SQ",
        "name": "SelectedTotalOphthalmicAxialLengthSequence",
        "vm": "1",
    },
    "(0022,1262)": {
        "vr": "SQ",
        "name": "OphthalmicAxialLengthQualityMetricSequence",
        "vm": "1",
    },
    "(0022,1300)": {
        "vr": "SQ",
        "name": "IntraocularLensCalculationsRightEyeSequence",
        "vm": "1",
    },
    "(0022,1310)": {
        "vr": "SQ",
        "name": "IntraocularLensCalculationsLeftEyeSequence",
        "vm": "1",
    },
    "(0022,1330)": {
        "vr": "SQ",
        "name": "ReferencedOphthalmicAxialLengthMeasurementQCImageSequence",
        "vm": "1",
    },
    "(0022,1415)": {
        "vr": "CS",
        "name": "OphthalmicMappingDeviceType",
        "vm": "1",
    },
    "(0022,1420)": {
        "vr": "SQ",
        "name": "AcquisitionMethodCodeSequence",
        "vm": "1",
    },
    "(0022,1423)": {
        "vr": "SQ",
        "name": "AcquisitionMethodAlgorithmSequence",
        "vm": "1",
    },
    "(0022,1436)": {
        "vr": "SQ",
        "name": "OphthalmicThicknessMapTypeCodeSequence",
        "vm": "1",
    },
    "(0022,1443)": {
        "vr": "SQ",
        "name": "OphthalmicThicknessMappingNormalsSequence",
        "vm": "1",
    },
    "(0022,1445)": {
        "vr": "SQ",
        "name": "RetinalThicknessDefinitionCodeSequence",
        "vm": "1",
    },
    "(0022,1450)": {
        "vr": "SQ",
        "name": "PixelValueMappingToCodedConceptSequence",
        "vm": "1",
    },
    "(0022,1452)": {
        "vr": "xs",
        "name": "MappedPixelValue",
        "vm": "1",
    },
    "(0022,1454)": {
        "vr": "LO",
        "name": "PixelValueMappingExplanation",
        "vm": "1",
    },
    "(0022,1458)": {
        "vr": "SQ",
        "name": "OphthalmicThicknessMapQualityThresholdSequence",
        "vm": "1",
    },
    "(0022,1460)": {
        "vr": "FL",
        "name": "OphthalmicThicknessMapThresholdQualityRating",
        "vm": "1",
    },
    "(0022,1463)": {
        "vr": "FL",
        "name": "AnatomicStructureReferencePoint",
        "vm": "2",
    },
    "(0022,1465)": {
        "vr": "SQ",
        "name": "RegistrationToLocalizerSequence",
        "vm": "1",
    },
    "(0022,1466)": {
        "vr": "CS",
        "name": "RegisteredLocalizerUnits",
        "vm": "1",
    },
    "(0022,1467)": {
        "vr": "FL",
        "name": "RegisteredLocalizerTopLeftHandCorner",
        "vm": "2",
    },
    "(0022,1468)": {
        "vr": "FL",
        "name": "RegisteredLocalizerBottomRightHandCorner",
        "vm": "2",
    },
    "(0022,1470)": {
        "vr": "SQ",
        "name": "OphthalmicThicknessMapQualityRatingSequence",
        "vm": "1",
    },
    "(0022,1472)": {
        "vr": "SQ",
        "name": "RelevantOPTAttributesSequence",
        "vm": "1",
    },
    "(0022,1512)": {
        "vr": "SQ",
        "name": "TransformationMethodCodeSequence",
        "vm": "1",
    },
    "(0022,1513)": {
        "vr": "SQ",
        "name": "TransformationAlgorithmSequence",
        "vm": "1",
    },
    "(0022,1515)": {
        "vr": "CS",
        "name": "OphthalmicAxialLengthMethod",
        "vm": "1",
    },
    "(0022,1517)": {
        "vr": "FL",
        "name": "OphthalmicFOV",
        "vm": "1",
    },
    "(0022,1518)": {
        "vr": "SQ",
        "name": "TwoDimensionalToThreeDimensionalMapSequence",
        "vm": "1",
    },
    "(0022,1525)": {
        "vr": "SQ",
        "name": "WideFieldOphthalmicPhotographyQualityRatingSequence",
        "vm": "1",
    },
    "(0022,1526)": {
        "vr": "SQ",
        "name": "WideFieldOphthalmicPhotographyQualityThresholdSequence",
        "vm": "1",
    },
    "(0022,1527)": {
        "vr": "FL",
        "name": "WideFieldOphthalmicPhotographyThresholdQualityRating",
        "vm": "1",
    },
    "(0022,1528)": {
        "vr": "FL",
        "name": "XCoordinatesCenterPixelViewAngle",
        "vm": "1",
    },
    "(0022,1529)": {
        "vr": "FL",
        "name": "YCoordinatesCenterPixelViewAngle",
        "vm": "1",
    },
    "(0022,1530)": {
        "vr": "UL",
        "name": "NumberOfMapPoints",
        "vm": "1",
    },
    "(0022,1531)": {
        "vr": "OF",
        "name": "TwoDimensionalToThreeDimensionalMapData",
        "vm": "1",
    },
    "(0024,0010)": {
        "vr": "FL",
        "name": "VisualFieldHorizontalExtent",
        "vm": "1",
    },
    "(0024,0011)": {
        "vr": "FL",
        "name": "VisualFieldVerticalExtent",
        "vm": "1",
    },
    "(0024,0012)": {
        "vr": "CS",
        "name": "VisualFieldShape",
        "vm": "1",
    },
    "(0024,0016)": {
        "vr": "SQ",
        "name": "ScreeningTestModeCodeSequence",
        "vm": "1",
    },
    "(0024,0018)": {
        "vr": "FL",
        "name": "MaximumStimulusLuminance",
        "vm": "1",
    },
    "(0024,0020)": {
        "vr": "FL",
        "name": "BackgroundLuminance",
        "vm": "1",
    },
    "(0024,0021)": {
        "vr": "SQ",
        "name": "StimulusColorCodeSequence",
        "vm": "1",
    },
    "(0024,0024)": {
        "vr": "SQ",
        "name": "BackgroundIlluminationColorCodeSequence",
        "vm": "1",
    },
    "(0024,0025)": {
        "vr": "FL",
        "name": "StimulusArea",
        "vm": "1",
    },
    "(0024,0028)": {
        "vr": "FL",
        "name": "StimulusPresentationTime",
        "vm": "1",
    },
    "(0024,0032)": {
        "vr": "SQ",
        "name": "FixationSequence",
        "vm": "1",
    },
    "(0024,0033)": {
        "vr": "SQ",
        "name": "FixationMonitoringCodeSequence",
        "vm": "1",
    },
    "(0024,0034)": {
        "vr": "SQ",
        "name": "VisualFieldCatchTrialSequence",
        "vm": "1",
    },
    "(0024,0035)": {
        "vr": "US",
        "name": "FixationCheckedQuantity",
        "vm": "1",
    },
    "(0024,0036)": {
        "vr": "US",
        "name": "PatientNotProperlyFixatedQuantity",
        "vm": "1",
    },
    "(0024,0037)": {
        "vr": "CS",
        "name": "PresentedVisualStimuliDataFlag",
        "vm": "1",
    },
    "(0024,0038)": {
        "vr": "US",
        "name": "NumberOfVisualStimuli",
        "vm": "1",
    },
    "(0024,0039)": {
        "vr": "CS",
        "name": "ExcessiveFixationLossesDataFlag",
        "vm": "1",
    },
    "(0024,0040)": {
        "vr": "CS",
        "name": "ExcessiveFixationLosses",
        "vm": "1",
    },
    "(0024,0042)": {
        "vr": "US",
        "name": "StimuliRetestingQuantity",
        "vm": "1",
    },
    "(0024,0044)": {
        "vr": "LT",
        "name": "CommentsOnPatientPerformanceOfVisualField",
        "vm": "1",
    },
    "(0024,0045)": {
        "vr": "CS",
        "name": "FalseNegativesEstimateFlag",
        "vm": "1",
    },
    "(0024,0046)": {
        "vr": "FL",
        "name": "FalseNegativesEstimate",
        "vm": "1",
    },
    "(0024,0048)": {
        "vr": "US",
        "name": "NegativeCatchTrialsQuantity",
        "vm": "1",
    },
    "(0024,0050)": {
        "vr": "US",
        "name": "FalseNegativesQuantity",
        "vm": "1",
    },
    "(0024,0051)": {
        "vr": "CS",
        "name": "ExcessiveFalseNegativesDataFlag",
        "vm": "1",
    },
    "(0024,0052)": {
        "vr": "CS",
        "name": "ExcessiveFalseNegatives",
        "vm": "1",
    },
    "(0024,0053)": {
        "vr": "CS",
        "name": "FalsePositivesEstimateFlag",
        "vm": "1",
    },
    "(0024,0054)": {
        "vr": "FL",
        "name": "FalsePositivesEstimate",
        "vm": "1",
    },
    "(0024,0055)": {
        "vr": "CS",
        "name": "CatchTrialsDataFlag",
        "vm": "1",
    },
    "(0024,0056)": {
        "vr": "US",
        "name": "PositiveCatchTrialsQuantity",
        "vm": "1",
    },
    "(0024,0057)": {
        "vr": "CS",
        "name": "TestPointNormalsDataFlag",
        "vm": "1",
    },
    "(0024,0058)": {
        "vr": "SQ",
        "name": "TestPointNormalsSequence",
        "vm": "1",
    },
    "(0024,0059)": {
        "vr": "CS",
        "name": "GlobalDeviationProbabilityNormalsFlag",
        "vm": "1",
    },
    "(0024,0060)": {
        "vr": "US",
        "name": "FalsePositivesQuantity",
        "vm": "1",
    },
    "(0024,0061)": {
        "vr": "CS",
        "name": "ExcessiveFalsePositivesDataFlag",
        "vm": "1",
    },
    "(0024,0062)": {
        "vr": "CS",
        "name": "ExcessiveFalsePositives",
        "vm": "1",
    },
    "(0024,0063)": {
        "vr": "CS",
        "name": "VisualFieldTestNormalsFlag",
        "vm": "1",
    },
    "(0024,0064)": {
        "vr": "SQ",
        "name": "ResultsNormalsSequence",
        "vm": "1",
    },
    "(0024,0065)": {
        "vr": "SQ",
        "name": "AgeCorrectedSensitivityDeviationAlgorithmSequence",
        "vm": "1",
    },
    "(0024,0066)": {
        "vr": "FL",
        "name": "GlobalDeviationFromNormal",
        "vm": "1",
    },
    "(0024,0067)": {
        "vr": "SQ",
        "name": "GeneralizedDefectSensitivityDeviationAlgorithmSequence",
        "vm": "1",
    },
    "(0024,0068)": {
        "vr": "FL",
        "name": "LocalizedDeviationFromNormal",
        "vm": "1",
    },
    "(0024,0069)": {
        "vr": "LO",
        "name": "PatientReliabilityIndicator",
        "vm": "1",
    },
    "(0024,0070)": {
        "vr": "FL",
        "name": "VisualFieldMeanSensitivity",
        "vm": "1",
    },
    "(0024,0071)": {
        "vr": "FL",
        "name": "GlobalDeviationProbability",
        "vm": "1",
    },
    "(0024,0072)": {
        "vr": "CS",
        "name": "LocalDeviationProbabilityNormalsFlag",
        "vm": "1",
    },
    "(0024,0073)": {
        "vr": "FL",
        "name": "LocalizedDeviationProbability",
        "vm": "1",
    },
    "(0024,0074)": {
        "vr": "CS",
        "name": "ShortTermFluctuationCalculated",
        "vm": "1",
    },
    "(0024,0075)": {
        "vr": "FL",
        "name": "ShortTermFluctuation",
        "vm": "1",
    },
    "(0024,0076)": {
        "vr": "CS",
        "name": "ShortTermFluctuationProbabilityCalculated",
        "vm": "1",
    },
    "(0024,0077)": {
        "vr": "FL",
        "name": "ShortTermFluctuationProbability",
        "vm": "1",
    },
    "(0024,0078)": {
        "vr": "CS",
        "name": "CorrectedLocalizedDeviationFromNormalCalculated",
        "vm": "1",
    },
    "(0024,0079)": {
        "vr": "FL",
        "name": "CorrectedLocalizedDeviationFromNormal",
        "vm": "1",
    },
    "(0024,0080)": {
        "vr": "CS",
        "name": "CorrectedLocalizedDeviationFromNormalProbabilityCalculated",
        "vm": "1",
    },
    "(0024,0081)": {
        "vr": "FL",
        "name": "CorrectedLocalizedDeviationFromNormalProbability",
        "vm": "1",
    },
    "(0024,0083)": {
        "vr": "SQ",
        "name": "GlobalDeviationProbabilitySequence",
        "vm": "1",
    },
    "(0024,0085)": {
        "vr": "SQ",
        "name": "LocalizedDeviationProbabilitySequence",
        "vm": "1",
    },
    "(0024,0086)": {
        "vr": "CS",
        "name": "FovealSensitivityMeasured",
        "vm": "1",
    },
    "(0024,0087)": {
        "vr": "FL",
        "name": "FovealSensitivity",
        "vm": "1",
    },
    "(0024,0088)": {
        "vr": "FL",
        "name": "VisualFieldTestDuration",
        "vm": "1",
    },
    "(0024,0089)": {
        "vr": "SQ",
        "name": "VisualFieldTestPointSequence",
        "vm": "1",
    },
    "(0024,0090)": {
        "vr": "FL",
        "name": "VisualFieldTestPointXCoordinate",
        "vm": "1",
    },
    "(0024,0091)": {
        "vr": "FL",
        "name": "VisualFieldTestPointYCoordinate",
        "vm": "1",
    },
    "(0024,0092)": {
        "vr": "FL",
        "name": "AgeCorrectedSensitivityDeviationValue",
        "vm": "1",
    },
    "(0024,0093)": {
        "vr": "CS",
        "name": "StimulusResults",
        "vm": "1",
    },
    "(0024,0094)": {
        "vr": "FL",
        "name": "SensitivityValue",
        "vm": "1",
    },
    "(0024,0095)": {
        "vr": "CS",
        "name": "RetestStimulusSeen",
        "vm": "1",
    },
    "(0024,0096)": {
        "vr": "FL",
        "name": "RetestSensitivityValue",
        "vm": "1",
    },
    "(0024,0097)": {
        "vr": "SQ",
        "name": "VisualFieldTestPointNormalsSequence",
        "vm": "1",
    },
    "(0024,0098)": {
        "vr": "FL",
        "name": "QuantifiedDefect",
        "vm": "1",
    },
    "(0024,0100)": {
        "vr": "FL",
        "name": "AgeCorrectedSensitivityDeviationProbabilityValue",
        "vm": "1",
    },
    "(0024,0102)": {
        "vr": "CS",
        "name": "GeneralizedDefectCorrectedSensitivityDeviationFlag",
        "vm": "1",
    },
    "(0024,0103)": {
        "vr": "FL",
        "name": "GeneralizedDefectCorrectedSensitivityDeviationValue",
        "vm": "1",
    },
    "(0024,0104)": {
        "vr": "FL",
        "name": "GeneralizedDefectCorrectedSensitivityDeviationProbabilityValue",
        "vm": "1",
    },
    "(0024,0105)": {
        "vr": "FL",
        "name": "MinimumSensitivityValue",
        "vm": "1",
    },
    "(0024,0106)": {
        "vr": "CS",
        "name": "BlindSpotLocalized",
        "vm": "1",
    },
    "(0024,0107)": {
        "vr": "FL",
        "name": "BlindSpotXCoordinate",
        "vm": "1",
    },
    "(0024,0108)": {
        "vr": "FL",
        "name": "BlindSpotYCoordinate",
        "vm": "1",
    },
    "(0024,0110)": {
        "vr": "SQ",
        "name": "VisualAcuityMeasurementSequence",
        "vm": "1",
    },
    "(0024,0112)": {
        "vr": "SQ",
        "name": "RefractiveParametersUsedOnPatientSequence",
        "vm": "1",
    },
    "(0024,0113)": {
        "vr": "CS",
        "name": "MeasurementLaterality",
        "vm": "1",
    },
    "(0024,0114)": {
        "vr": "SQ",
        "name": "OphthalmicPatientClinicalInformationLeftEyeSequence",
        "vm": "1",
    },
    "(0024,0115)": {
        "vr": "SQ",
        "name": "OphthalmicPatientClinicalInformationRightEyeSequence",
        "vm": "1",
    },
    "(0024,0117)": {
        "vr": "CS",
        "name": "FovealPointNormativeDataFlag",
        "vm": "1",
    },
    "(0024,0118)": {
        "vr": "FL",
        "name": "FovealPointProbabilityValue",
        "vm": "1",
    },
    "(0024,0120)": {
        "vr": "CS",
        "name": "ScreeningBaselineMeasured",
        "vm": "1",
    },
    "(0024,0122)": {
        "vr": "SQ",
        "name": "ScreeningBaselineMeasuredSequence",
        "vm": "1",
    },
    "(0024,0124)": {
        "vr": "CS",
        "name": "ScreeningBaselineType",
        "vm": "1",
    },
    "(0024,0126)": {
        "vr": "FL",
        "name": "ScreeningBaselineValue",
        "vm": "1",
    },
    "(0024,0202)": {
        "vr": "LO",
        "name": "AlgorithmSource",
        "vm": "1",
    },
    "(0024,0306)": {
        "vr": "LO",
        "name": "DataSetName",
        "vm": "1",
    },
    "(0024,0307)": {
        "vr": "LO",
        "name": "DataSetVersion",
        "vm": "1",
    },
    "(0024,0308)": {
        "vr": "LO",
        "name": "DataSetSource",
        "vm": "1",
    },
    "(0024,0309)": {
        "vr": "LO",
        "name": "DataSetDescription",
        "vm": "1",
    },
    "(0024,0317)": {
        "vr": "SQ",
        "name": "VisualFieldTestReliabilityGlobalIndexSequence",
        "vm": "1",
    },
    "(0024,0320)": {
        "vr": "SQ",
        "name": "VisualFieldGlobalResultsIndexSequence",
        "vm": "1",
    },
    "(0024,0325)": {
        "vr": "SQ",
        "name": "DataObservationSequence",
        "vm": "1",
    },
    "(0024,0338)": {
        "vr": "CS",
        "name": "IndexNormalsFlag",
        "vm": "1",
    },
    "(0024,0341)": {
        "vr": "FL",
        "name": "IndexProbability",
        "vm": "1",
    },
    "(0024,0344)": {
        "vr": "SQ",
        "name": "IndexProbabilitySequence",
        "vm": "1",
    },
    "(0028,0002)": {
        "vr": "US",
        "name": "SamplesPerPixel",
        "vm": "1",
    },
    "(0028,0003)": {
        "vr": "US",
        "name": "SamplesPerPixelUsed",
        "vm": "1",
    },
    "(0028,0004)": {
        "vr": "CS",
        "name": "PhotometricInterpretation",
        "vm": "1",
    },
    "(0028,0006)": {
        "vr": "US",
        "name": "PlanarConfiguration",
        "vm": "1",
    },
    "(0028,0008)": {
        "vr": "IS",
        "name": "NumberOfFrames",
        "vm": "1",
    },
    "(0028,0009)": {
        "vr": "AT",
        "name": "FrameIncrementPointer",
        "vm": "1-n",
    },
    "(0028,000A)": {
        "vr": "AT",
        "name": "FrameDimensionPointer",
        "vm": "1-n",
    },
    "(0028,0010)": {
        "vr": "US",
        "name": "Rows",
        "vm": "1",
    },
    "(0028,0011)": {
        "vr": "US",
        "name": "Columns",
        "vm": "1",
    },
    "(0028,0014)": {
        "vr": "US",
        "name": "UltrasoundColorDataPresent",
        "vm": "1",
    },
    "(0028,0030)": {
        "vr": "DS",
        "name": "PixelSpacing",
        "vm": "2",
    },
    "(0028,0031)": {
        "vr": "DS",
        "name": "ZoomFactor",
        "vm": "2",
    },
    "(0028,0032)": {
        "vr": "DS",
        "name": "ZoomCenter",
        "vm": "2",
    },
    "(0028,0034)": {
        "vr": "IS",
        "name": "PixelAspectRatio",
        "vm": "2",
    },
    "(0028,0051)": {
        "vr": "CS",
        "name": "CorrectedImage",
        "vm": "1-n",
    },
    "(0028,0100)": {
        "vr": "US",
        "name": "BitsAllocated",
        "vm": "1",
    },
    "(0028,0101)": {
        "vr": "US",
        "name": "BitsStored",
        "vm": "1",
    },
    "(0028,0102)": {
        "vr": "US",
        "name": "HighBit",
        "vm": "1",
    },
    "(0028,0103)": {
        "vr": "US",
        "name": "PixelRepresentation",
        "vm": "1",
    },
    "(0028,0106)": {
        "vr": "xs",
        "name": "SmallestImagePixelValue",
        "vm": "1",
    },
    "(0028,0107)": {
        "vr": "xs",
        "name": "LargestImagePixelValue",
        "vm": "1",
    },
    "(0028,0108)": {
        "vr": "xs",
        "name": "SmallestPixelValueInSeries",
        "vm": "1",
    },
    "(0028,0109)": {
        "vr": "xs",
        "name": "LargestPixelValueInSeries",
        "vm": "1",
    },
    "(0028,0120)": {
        "vr": "xs",
        "name": "PixelPaddingValue",
        "vm": "1",
    },
    "(0028,0121)": {
        "vr": "xs",
        "name": "PixelPaddingRangeLimit",
        "vm": "1",
    },
    "(0028,0122)": {
        "vr": "FL",
        "name": "FloatPixelPaddingValue",
        "vm": "1",
    },
    "(0028,0123)": {
        "vr": "FD",
        "name": "DoubleFloatPixelPaddingValue",
        "vm": "1",
    },
    "(0028,0124)": {
        "vr": "FL",
        "name": "FloatPixelPaddingRangeLimit",
        "vm": "1",
    },
    "(0028,0125)": {
        "vr": "FD",
        "name": "DoubleFloatPixelPaddingRangeLimit",
        "vm": "1",
    },
    "(0028,0300)": {
        "vr": "CS",
        "name": "QualityControlImage",
        "vm": "1",
    },
    "(0028,0301)": {
        "vr": "CS",
        "name": "BurnedInAnnotation",
        "vm": "1",
    },
    "(0028,0302)": {
        "vr": "CS",
        "name": "RecognizableVisualFeatures",
        "vm": "1",
    },
    "(0028,0303)": {
        "vr": "CS",
        "name": "LongitudinalTemporalInformationModified",
        "vm": "1",
    },
    "(0028,0304)": {
        "vr": "UI",
        "name": "ReferencedColorPaletteInstanceUID",
        "vm": "1",
    },
    "(0028,0A02)": {
        "vr": "CS",
        "name": "PixelSpacingCalibrationType",
        "vm": "1",
    },
    "(0028,0A04)": {
        "vr": "LO",
        "name": "PixelSpacingCalibrationDescription",
        "vm": "1",
    },
    "(0028,1040)": {
        "vr": "CS",
        "name": "PixelIntensityRelationship",
        "vm": "1",
    },
    "(0028,1041)": {
        "vr": "SS",
        "name": "PixelIntensityRelationshipSign",
        "vm": "1",
    },
    "(0028,1050)": {
        "vr": "DS",
        "name": "WindowCenter",
        "vm": "1-n",
    },
    "(0028,1051)": {
        "vr": "DS",
        "name": "WindowWidth",
        "vm": "1-n",
    },
    "(0028,1052)": {
        "vr": "DS",
        "name": "RescaleIntercept",
        "vm": "1",
    },
    "(0028,1053)": {
        "vr": "DS",
        "name": "RescaleSlope",
        "vm": "1",
    },
    "(0028,1054)": {
        "vr": "LO",
        "name": "RescaleType",
        "vm": "1",
    },
    "(0028,1055)": {
        "vr": "LO",
        "name": "WindowCenterWidthExplanation",
        "vm": "1-n",
    },
    "(0028,1056)": {
        "vr": "CS",
        "name": "VOILUTFunction",
        "vm": "1",
    },
    "(0028,1090)": {
        "vr": "CS",
        "name": "RecommendedViewingMode",
        "vm": "1",
    },
    "(0028,1101)": {
        "vr": "xs",
        "name": "RedPaletteColorLookupTableDescriptor",
        "vm": "3",
    },
    "(0028,1102)": {
        "vr": "xs",
        "name": "GreenPaletteColorLookupTableDescriptor",
        "vm": "3",
    },
    "(0028,1103)": {
        "vr": "xs",
        "name": "BluePaletteColorLookupTableDescriptor",
        "vm": "3",
    },
    "(0028,1104)": {
        "vr": "US",
        "name": "AlphaPaletteColorLookupTableDescriptor",
        "vm": "3",
    },
    "(0028,1199)": {
        "vr": "UI",
        "name": "PaletteColorLookupTableUID",
        "vm": "1",
    },
    "(0028,1201)": {
        "vr": "OW",
        "name": "RedPaletteColorLookupTableData",
        "vm": "1",
    },
    "(0028,1202)": {
        "vr": "OW",
        "name": "GreenPaletteColorLookupTableData",
        "vm": "1",
    },
    "(0028,1203)": {
        "vr": "OW",
        "name": "BluePaletteColorLookupTableData",
        "vm": "1",
    },
    "(0028,1204)": {
        "vr": "OW",
        "name": "AlphaPaletteColorLookupTableData",
        "vm": "1",
    },
    "(0028,1221)": {
        "vr": "OW",
        "name": "SegmentedRedPaletteColorLookupTableData",
        "vm": "1",
    },
    "(0028,1222)": {
        "vr": "OW",
        "name": "SegmentedGreenPaletteColorLookupTableData",
        "vm": "1",
    },
    "(0028,1223)": {
        "vr": "OW",
        "name": "SegmentedBluePaletteColorLookupTableData",
        "vm": "1",
    },
    "(0028,1300)": {
        "vr": "CS",
        "name": "BreastImplantPresent",
        "vm": "1",
    },
    "(0028,1350)": {
        "vr": "CS",
        "name": "PartialView",
        "vm": "1",
    },
    "(0028,1351)": {
        "vr": "ST",
        "name": "PartialViewDescription",
        "vm": "1",
    },
    "(0028,1352)": {
        "vr": "SQ",
        "name": "PartialViewCodeSequence",
        "vm": "1",
    },
    "(0028,135A)": {
        "vr": "CS",
        "name": "SpatialLocationsPreserved",
        "vm": "1",
    },
    "(0028,1401)": {
        "vr": "SQ",
        "name": "DataFrameAssignmentSequence",
        "vm": "1",
    },
    "(0028,1402)": {
        "vr": "CS",
        "name": "DataPathAssignment",
        "vm": "1",
    },
    "(0028,1403)": {
        "vr": "US",
        "name": "BitsMappedToColorLookupTable",
        "vm": "1",
    },
    "(0028,1404)": {
        "vr": "SQ",
        "name": "BlendingLUT1Sequence",
        "vm": "1",
    },
    "(0028,1405)": {
        "vr": "CS",
        "name": "BlendingLUT1TransferFunction",
        "vm": "1",
    },
    "(0028,1406)": {
        "vr": "FD",
        "name": "BlendingWeightConstant",
        "vm": "1",
    },
    "(0028,1407)": {
        "vr": "US",
        "name": "BlendingLookupTableDescriptor",
        "vm": "3",
    },
    "(0028,1408)": {
        "vr": "OW",
        "name": "BlendingLookupTableData",
        "vm": "1",
    },
    "(0028,140B)": {
        "vr": "SQ",
        "name": "EnhancedPaletteColorLookupTableSequence",
        "vm": "1",
    },
    "(0028,140C)": {
        "vr": "SQ",
        "name": "BlendingLUT2Sequence",
        "vm": "1",
    },
    "(0028,140D)": {
        "vr": "CS",
        "name": "BlendingLUT2TransferFunction",
        "vm": "1",
    },
    "(0028,140E)": {
        "vr": "CS",
        "name": "DataPathID",
        "vm": "1",
    },
    "(0028,140F)": {
        "vr": "CS",
        "name": "RGBLUTTransferFunction",
        "vm": "1",
    },
    "(0028,1410)": {
        "vr": "CS",
        "name": "AlphaLUTTransferFunction",
        "vm": "1",
    },
    "(0028,2000)": {
        "vr": "OB",
        "name": "ICCProfile",
        "vm": "1",
    },
    "(0028,2110)": {
        "vr": "CS",
        "name": "LossyImageCompression",
        "vm": "1",
    },
    "(0028,2112)": {
        "vr": "DS",
        "name": "LossyImageCompressionRatio",
        "vm": "1-n",
    },
    "(0028,2114)": {
        "vr": "CS",
        "name": "LossyImageCompressionMethod",
        "vm": "1-n",
    },
    "(0028,3000)": {
        "vr": "SQ",
        "name": "ModalityLUTSequence",
        "vm": "1",
    },
    "(0028,3002)": {
        "vr": "xs",
        "name": "LUTDescriptor",
        "vm": "3",
    },
    "(0028,3003)": {
        "vr": "LO",
        "name": "LUTExplanation",
        "vm": "1",
    },
    "(0028,3004)": {
        "vr": "LO",
        "name": "ModalityLUTType",
        "vm": "1",
    },
    "(0028,3006)": {
        "vr": "lt",
        "name": "LUTData",
        "vm": "1-n",
    },
    "(0028,3010)": {
        "vr": "SQ",
        "name": "VOILUTSequence",
        "vm": "1",
    },
    "(0028,3110)": {
        "vr": "SQ",
        "name": "SoftcopyVOILUTSequence",
        "vm": "1",
    },
    "(0028,6010)": {
        "vr": "US",
        "name": "RepresentativeFrameNumber",
        "vm": "1",
    },
    "(0028,6020)": {
        "vr": "US",
        "name": "FrameNumbersOfInterest",
        "vm": "1-n",
    },
    "(0028,6022)": {
        "vr": "LO",
        "name": "FrameOfInterestDescription",
        "vm": "1-n",
    },
    "(0028,6023)": {
        "vr": "CS",
        "name": "FrameOfInterestType",
        "vm": "1-n",
    },
    "(0028,6040)": {
        "vr": "US",
        "name": "RWavePointer",
        "vm": "1-n",
    },
    "(0028,6100)": {
        "vr": "SQ",
        "name": "MaskSubtractionSequence",
        "vm": "1",
    },
    "(0028,6101)": {
        "vr": "CS",
        "name": "MaskOperation",
        "vm": "1",
    },
    "(0028,6102)": {
        "vr": "US",
        "name": "ApplicableFrameRange",
        "vm": "2-2n",
    },
    "(0028,6110)": {
        "vr": "US",
        "name": "MaskFrameNumbers",
        "vm": "1-n",
    },
    "(0028,6112)": {
        "vr": "US",
        "name": "ContrastFrameAveraging",
        "vm": "1",
    },
    "(0028,6114)": {
        "vr": "FL",
        "name": "MaskSubPixelShift",
        "vm": "2",
    },
    "(0028,6120)": {
        "vr": "SS",
        "name": "TIDOffset",
        "vm": "1",
    },
    "(0028,6190)": {
        "vr": "ST",
        "name": "MaskOperationExplanation",
        "vm": "1",
    },
    "(0028,7000)": {
        "vr": "SQ",
        "name": "EquipmentAdministratorSequence",
        "vm": "1",
    },
    "(0028,7001)": {
        "vr": "US",
        "name": "NumberOfDisplaySubsystems",
        "vm": "1",
    },
    "(0028,7002)": {
        "vr": "US",
        "name": "CurrentConfigurationID",
        "vm": "1",
    },
    "(0028,7003)": {
        "vr": "US",
        "name": "DisplaySubsystemID",
        "vm": "1",
    },
    "(0028,7004)": {
        "vr": "SH",
        "name": "DisplaySubsystemName",
        "vm": "1",
    },
    "(0028,7005)": {
        "vr": "LO",
        "name": "DisplaySubsystemDescription",
        "vm": "1",
    },
    "(0028,7006)": {
        "vr": "CS",
        "name": "SystemStatus",
        "vm": "1",
    },
    "(0028,7007)": {
        "vr": "LO",
        "name": "SystemStatusComment",
        "vm": "1",
    },
    "(0028,7008)": {
        "vr": "SQ",
        "name": "TargetLuminanceCharacteristicsSequence",
        "vm": "1",
    },
    "(0028,7009)": {
        "vr": "US",
        "name": "LuminanceCharacteristicsID",
        "vm": "1",
    },
    "(0028,700A)": {
        "vr": "SQ",
        "name": "DisplaySubsystemConfigurationSequence",
        "vm": "1",
    },
    "(0028,700B)": {
        "vr": "US",
        "name": "ConfigurationID",
        "vm": "1",
    },
    "(0028,700C)": {
        "vr": "SH",
        "name": "ConfigurationName",
        "vm": "1",
    },
    "(0028,700D)": {
        "vr": "LO",
        "name": "ConfigurationDescription",
        "vm": "1",
    },
    "(0028,700E)": {
        "vr": "US",
        "name": "ReferencedTargetLuminanceCharacteristicsID",
        "vm": "1",
    },
    "(0028,700F)": {
        "vr": "SQ",
        "name": "QAResultsSequence",
        "vm": "1",
    },
    "(0028,7010)": {
        "vr": "SQ",
        "name": "DisplaySubsystemQAResultsSequence",
        "vm": "1",
    },
    "(0028,7011)": {
        "vr": "SQ",
        "name": "ConfigurationQAResultsSequence",
        "vm": "1",
    },
    "(0028,7012)": {
        "vr": "SQ",
        "name": "MeasurementEquipmentSequence",
        "vm": "1",
    },
    "(0028,7013)": {
        "vr": "CS",
        "name": "MeasurementFunctions",
        "vm": "1-n",
    },
    "(0028,7014)": {
        "vr": "CS",
        "name": "MeasurementEquipmentType",
        "vm": "1",
    },
    "(0028,7015)": {
        "vr": "SQ",
        "name": "VisualEvaluationResultSequence",
        "vm": "1",
    },
    "(0028,7016)": {
        "vr": "SQ",
        "name": "DisplayCalibrationResultSequence",
        "vm": "1",
    },
    "(0028,7017)": {
        "vr": "US",
        "name": "DDLValue",
        "vm": "1",
    },
    "(0028,7018)": {
        "vr": "FL",
        "name": "CIExyWhitePoint",
        "vm": "2",
    },
    "(0028,7019)": {
        "vr": "CS",
        "name": "DisplayFunctionType",
        "vm": "1",
    },
    "(0028,701A)": {
        "vr": "FL",
        "name": "GammaValue",
        "vm": "1",
    },
    "(0028,701B)": {
        "vr": "US",
        "name": "NumberOfLuminancePoints",
        "vm": "1",
    },
    "(0028,701C)": {
        "vr": "SQ",
        "name": "LuminanceResponseSequence",
        "vm": "1",
    },
    "(0028,701D)": {
        "vr": "FL",
        "name": "TargetMinimumLuminance",
        "vm": "1",
    },
    "(0028,701E)": {
        "vr": "FL",
        "name": "TargetMaximumLuminance",
        "vm": "1",
    },
    "(0028,701F)": {
        "vr": "FL",
        "name": "LuminanceValue",
        "vm": "1",
    },
    "(0028,7020)": {
        "vr": "LO",
        "name": "LuminanceResponseDescription",
        "vm": "1",
    },
    "(0028,7021)": {
        "vr": "CS",
        "name": "WhitePointFlag",
        "vm": "1",
    },
    "(0028,7022)": {
        "vr": "SQ",
        "name": "DisplayDeviceTypeCodeSequence",
        "vm": "1",
    },
    "(0028,7023)": {
        "vr": "SQ",
        "name": "DisplaySubsystemSequence",
        "vm": "1",
    },
    "(0028,7024)": {
        "vr": "SQ",
        "name": "LuminanceResultSequence",
        "vm": "1",
    },
    "(0028,7025)": {
        "vr": "CS",
        "name": "AmbientLightValueSource",
        "vm": "1",
    },
    "(0028,7026)": {
        "vr": "CS",
        "name": "MeasuredCharacteristics",
        "vm": "1-n",
    },
    "(0028,7027)": {
        "vr": "SQ",
        "name": "LuminanceUniformityResultSequence",
        "vm": "1",
    },
    "(0028,7028)": {
        "vr": "SQ",
        "name": "VisualEvaluationTestSequence",
        "vm": "1",
    },
    "(0028,7029)": {
        "vr": "CS",
        "name": "TestResult",
        "vm": "1",
    },
    "(0028,702A)": {
        "vr": "LO",
        "name": "TestResultComment",
        "vm": "1",
    },
    "(0028,702B)": {
        "vr": "CS",
        "name": "TestImageValidation",
        "vm": "1",
    },
    "(0028,702C)": {
        "vr": "SQ",
        "name": "TestPatternCodeSequence",
        "vm": "1",
    },
    "(0028,702D)": {
        "vr": "SQ",
        "name": "MeasurementPatternCodeSequence",
        "vm": "1",
    },
    "(0028,702E)": {
        "vr": "SQ",
        "name": "VisualEvaluationMethodCodeSequence",
        "vm": "1",
    },
    "(0028,7FE0)": {
        "vr": "UR",
        "name": "PixelDataProviderURL",
        "vm": "1",
    },
    "(0028,9001)": {
        "vr": "UL",
        "name": "DataPointRows",
        "vm": "1",
    },
    "(0028,9002)": {
        "vr": "UL",
        "name": "DataPointColumns",
        "vm": "1",
    },
    "(0028,9003)": {
        "vr": "CS",
        "name": "SignalDomainColumns",
        "vm": "1",
    },
    "(0028,9108)": {
        "vr": "CS",
        "name": "DataRepresentation",
        "vm": "1",
    },
    "(0028,9110)": {
        "vr": "SQ",
        "name": "PixelMeasuresSequence",
        "vm": "1",
    },
    "(0028,9132)": {
        "vr": "SQ",
        "name": "FrameVOILUTSequence",
        "vm": "1",
    },
    "(0028,9145)": {
        "vr": "SQ",
        "name": "PixelValueTransformationSequence",
        "vm": "1",
    },
    "(0028,9235)": {
        "vr": "CS",
        "name": "SignalDomainRows",
        "vm": "1",
    },
    "(0028,9411)": {
        "vr": "FL",
        "name": "DisplayFilterPercentage",
        "vm": "1",
    },
    "(0028,9415)": {
        "vr": "SQ",
        "name": "FramePixelShiftSequence",
        "vm": "1",
    },
    "(0028,9416)": {
        "vr": "US",
        "name": "SubtractionItemID",
        "vm": "1",
    },
    "(0028,9422)": {
        "vr": "SQ",
        "name": "PixelIntensityRelationshipLUTSequence",
        "vm": "1",
    },
    "(0028,9443)": {
        "vr": "SQ",
        "name": "FramePixelDataPropertiesSequence",
        "vm": "1",
    },
    "(0028,9444)": {
        "vr": "CS",
        "name": "GeometricalProperties",
        "vm": "1",
    },
    "(0028,9445)": {
        "vr": "FL",
        "name": "GeometricMaximumDistortion",
        "vm": "1",
    },
    "(0028,9446)": {
        "vr": "CS",
        "name": "ImageProcessingApplied",
        "vm": "1-n",
    },
    "(0028,9454)": {
        "vr": "CS",
        "name": "MaskSelectionMode",
        "vm": "1",
    },
    "(0028,9474)": {
        "vr": "CS",
        "name": "LUTFunction",
        "vm": "1",
    },
    "(0028,9478)": {
        "vr": "FL",
        "name": "MaskVisibilityPercentage",
        "vm": "1",
    },
    "(0028,9501)": {
        "vr": "SQ",
        "name": "PixelShiftSequence",
        "vm": "1",
    },
    "(0028,9502)": {
        "vr": "SQ",
        "name": "RegionPixelShiftSequence",
        "vm": "1",
    },
    "(0028,9503)": {
        "vr": "SS",
        "name": "VerticesOfTheRegion",
        "vm": "2-2n",
    },
    "(0028,9505)": {
        "vr": "SQ",
        "name": "MultiFramePresentationSequence",
        "vm": "1",
    },
    "(0028,9506)": {
        "vr": "US",
        "name": "PixelShiftFrameRange",
        "vm": "2-2n",
    },
    "(0028,9507)": {
        "vr": "US",
        "name": "LUTFrameRange",
        "vm": "2-2n",
    },
    "(0028,9520)": {
        "vr": "DS",
        "name": "ImageToEquipmentMappingMatrix",
        "vm": "16",
    },
    "(0028,9537)": {
        "vr": "CS",
        "name": "EquipmentCoordinateSystemIdentification",
        "vm": "1",
    },
    "(0032,1031)": {
        "vr": "SQ",
        "name": "RequestingPhysicianIdentificationSequence",
        "vm": "1",
    },
    "(0032,1032)": {
        "vr": "PN",
        "name": "RequestingPhysician",
        "vm": "1",
    },
    "(0032,1033)": {
        "vr": "LO",
        "name": "RequestingService",
        "vm": "1",
    },
    "(0032,1034)": {
        "vr": "SQ",
        "name": "RequestingServiceCodeSequence",
        "vm": "1",
    },
    "(0032,1060)": {
        "vr": "LO",
        "name": "RequestedProcedureDescription",
        "vm": "1",
    },
    "(0032,1064)": {
        "vr": "SQ",
        "name": "RequestedProcedureCodeSequence",
        "vm": "1",
    },
    "(0032,1070)": {
        "vr": "LO",
        "name": "RequestedContrastAgent",
        "vm": "1",
    },
    "(0038,0004)": {
        "vr": "SQ",
        "name": "ReferencedPatientAliasSequence",
        "vm": "1",
    },
    "(0038,0008)": {
        "vr": "CS",
        "name": "VisitStatusID",
        "vm": "1",
    },
    "(0038,0010)": {
        "vr": "LO",
        "name": "AdmissionID",
        "vm": "1",
    },
    "(0038,0014)": {
        "vr": "SQ",
        "name": "IssuerOfAdmissionIDSequence",
        "vm": "1",
    },
    "(0038,0016)": {
        "vr": "LO",
        "name": "RouteOfAdmissions",
        "vm": "1",
    },
    "(0038,0020)": {
        "vr": "DA",
        "name": "AdmittingDate",
        "vm": "1",
    },
    "(0038,0021)": {
        "vr": "TM",
        "name": "AdmittingTime",
        "vm": "1",
    },
    "(0038,0050)": {
        "vr": "LO",
        "name": "SpecialNeeds",
        "vm": "1",
    },
    "(0038,0060)": {
        "vr": "LO",
        "name": "ServiceEpisodeID",
        "vm": "1",
    },
    "(0038,0062)": {
        "vr": "LO",
        "name": "ServiceEpisodeDescription",
        "vm": "1",
    },
    "(0038,0064)": {
        "vr": "SQ",
        "name": "IssuerOfServiceEpisodeIDSequence",
        "vm": "1",
    },
    "(0038,0100)": {
        "vr": "SQ",
        "name": "PertinentDocumentsSequence",
        "vm": "1",
    },
    "(0038,0101)": {
        "vr": "SQ",
        "name": "PertinentResourcesSequence",
        "vm": "1",
    },
    "(0038,0102)": {
        "vr": "LO",
        "name": "ResourceDescription",
        "vm": "1",
    },
    "(0038,0300)": {
        "vr": "LO",
        "name": "CurrentPatientLocation",
        "vm": "1",
    },
    "(0038,0400)": {
        "vr": "LO",
        "name": "PatientInstitutionResidence",
        "vm": "1",
    },
    "(0038,0500)": {
        "vr": "LO",
        "name": "PatientState",
        "vm": "1",
    },
    "(0038,0502)": {
        "vr": "SQ",
        "name": "PatientClinicalTrialParticipationSequence",
        "vm": "1",
    },
    "(0038,4000)": {
        "vr": "LT",
        "name": "VisitComments",
        "vm": "1",
    },
    "(003A,0004)": {
        "vr": "CS",
        "name": "WaveformOriginality",
        "vm": "1",
    },
    "(003A,0005)": {
        "vr": "US",
        "name": "NumberOfWaveformChannels",
        "vm": "1",
    },
    "(003A,0010)": {
        "vr": "UL",
        "name": "NumberOfWaveformSamples",
        "vm": "1",
    },
    "(003A,001A)": {
        "vr": "DS",
        "name": "SamplingFrequency",
        "vm": "1",
    },
    "(003A,0020)": {
        "vr": "SH",
        "name": "MultiplexGroupLabel",
        "vm": "1",
    },
    "(003A,0200)": {
        "vr": "SQ",
        "name": "ChannelDefinitionSequence",
        "vm": "1",
    },
    "(003A,0202)": {
        "vr": "IS",
        "name": "WaveformChannelNumber",
        "vm": "1",
    },
    "(003A,0203)": {
        "vr": "SH",
        "name": "ChannelLabel",
        "vm": "1",
    },
    "(003A,0205)": {
        "vr": "CS",
        "name": "ChannelStatus",
        "vm": "1-n",
    },
    "(003A,0208)": {
        "vr": "SQ",
        "name": "ChannelSourceSequence",
        "vm": "1",
    },
    "(003A,0209)": {
        "vr": "SQ",
        "name": "ChannelSourceModifiersSequence",
        "vm": "1",
    },
    "(003A,020A)": {
        "vr": "SQ",
        "name": "SourceWaveformSequence",
        "vm": "1",
    },
    "(003A,020C)": {
        "vr": "LO",
        "name": "ChannelDerivationDescription",
        "vm": "1",
    },
    "(003A,0210)": {
        "vr": "DS",
        "name": "ChannelSensitivity",
        "vm": "1",
    },
    "(003A,0211)": {
        "vr": "SQ",
        "name": "ChannelSensitivityUnitsSequence",
        "vm": "1",
    },
    "(003A,0212)": {
        "vr": "DS",
        "name": "ChannelSensitivityCorrectionFactor",
        "vm": "1",
    },
    "(003A,0213)": {
        "vr": "DS",
        "name": "ChannelBaseline",
        "vm": "1",
    },
    "(003A,0214)": {
        "vr": "DS",
        "name": "ChannelTimeSkew",
        "vm": "1",
    },
    "(003A,0215)": {
        "vr": "DS",
        "name": "ChannelSampleSkew",
        "vm": "1",
    },
    "(003A,0218)": {
        "vr": "DS",
        "name": "ChannelOffset",
        "vm": "1",
    },
    "(003A,021A)": {
        "vr": "US",
        "name": "WaveformBitsStored",
        "vm": "1",
    },
    "(003A,0220)": {
        "vr": "DS",
        "name": "FilterLowFrequency",
        "vm": "1",
    },
    "(003A,0221)": {
        "vr": "DS",
        "name": "FilterHighFrequency",
        "vm": "1",
    },
    "(003A,0222)": {
        "vr": "DS",
        "name": "NotchFilterFrequency",
        "vm": "1",
    },
    "(003A,0223)": {
        "vr": "DS",
        "name": "NotchFilterBandwidth",
        "vm": "1",
    },
    "(003A,0230)": {
        "vr": "FL",
        "name": "WaveformDataDisplayScale",
        "vm": "1",
    },
    "(003A,0231)": {
        "vr": "US",
        "name": "WaveformDisplayBackgroundCIELabValue",
        "vm": "3",
    },
    "(003A,0240)": {
        "vr": "SQ",
        "name": "WaveformPresentationGroupSequence",
        "vm": "1",
    },
    "(003A,0241)": {
        "vr": "US",
        "name": "PresentationGroupNumber",
        "vm": "1",
    },
    "(003A,0242)": {
        "vr": "SQ",
        "name": "ChannelDisplaySequence",
        "vm": "1",
    },
    "(003A,0244)": {
        "vr": "US",
        "name": "ChannelRecommendedDisplayCIELabValue",
        "vm": "3",
    },
    "(003A,0245)": {
        "vr": "FL",
        "name": "ChannelPosition",
        "vm": "1",
    },
    "(003A,0246)": {
        "vr": "CS",
        "name": "DisplayShadingFlag",
        "vm": "1",
    },
    "(003A,0247)": {
        "vr": "FL",
        "name": "FractionalChannelDisplayScale",
        "vm": "1",
    },
    "(003A,0248)": {
        "vr": "FL",
        "name": "AbsoluteChannelDisplayScale",
        "vm": "1",
    },
    "(003A,0300)": {
        "vr": "SQ",
        "name": "MultiplexedAudioChannelsDescriptionCodeSequence",
        "vm": "1",
    },
    "(003A,0301)": {
        "vr": "IS",
        "name": "ChannelIdentificationCode",
        "vm": "1",
    },
    "(003A,0302)": {
        "vr": "CS",
        "name": "ChannelMode",
        "vm": "1",
    },
    "(0040,0001)": {
        "vr": "AE",
        "name": "ScheduledStationAETitle",
        "vm": "1-n",
    },
    "(0040,0002)": {
        "vr": "DA",
        "name": "ScheduledProcedureStepStartDate",
        "vm": "1",
    },
    "(0040,0003)": {
        "vr": "TM",
        "name": "ScheduledProcedureStepStartTime",
        "vm": "1",
    },
    "(0040,0004)": {
        "vr": "DA",
        "name": "ScheduledProcedureStepEndDate",
        "vm": "1",
    },
    "(0040,0005)": {
        "vr": "TM",
        "name": "ScheduledProcedureStepEndTime",
        "vm": "1",
    },
    "(0040,0006)": {
        "vr": "PN",
        "name": "ScheduledPerformingPhysicianName",
        "vm": "1",
    },
    "(0040,0007)": {
        "vr": "LO",
        "name": "ScheduledProcedureStepDescription",
        "vm": "1",
    },
    "(0040,0008)": {
        "vr": "SQ",
        "name": "ScheduledProtocolCodeSequence",
        "vm": "1",
    },
    "(0040,0009)": {
        "vr": "SH",
        "name": "ScheduledProcedureStepID",
        "vm": "1",
    },
    "(0040,000A)": {
        "vr": "SQ",
        "name": "StageCodeSequence",
        "vm": "1",
    },
    "(0040,000B)": {
        "vr": "SQ",
        "name": "ScheduledPerformingPhysicianIdentificationSequence",
        "vm": "1",
    },
    "(0040,0010)": {
        "vr": "SH",
        "name": "ScheduledStationName",
        "vm": "1-n",
    },
    "(0040,0011)": {
        "vr": "SH",
        "name": "ScheduledProcedureStepLocation",
        "vm": "1",
    },
    "(0040,0012)": {
        "vr": "LO",
        "name": "PreMedication",
        "vm": "1",
    },
    "(0040,0020)": {
        "vr": "CS",
        "name": "ScheduledProcedureStepStatus",
        "vm": "1",
    },
    "(0040,0026)": {
        "vr": "SQ",
        "name": "OrderPlacerIdentifierSequence",
        "vm": "1",
    },
    "(0040,0027)": {
        "vr": "SQ",
        "name": "OrderFillerIdentifierSequence",
        "vm": "1",
    },
    "(0040,0031)": {
        "vr": "UT",
        "name": "LocalNamespaceEntityID",
        "vm": "1",
    },
    "(0040,0032)": {
        "vr": "UT",
        "name": "UniversalEntityID",
        "vm": "1",
    },
    "(0040,0033)": {
        "vr": "CS",
        "name": "UniversalEntityIDType",
        "vm": "1",
    },
    "(0040,0035)": {
        "vr": "CS",
        "name": "IdentifierTypeCode",
        "vm": "1",
    },
    "(0040,0036)": {
        "vr": "SQ",
        "name": "AssigningFacilitySequence",
        "vm": "1",
    },
    "(0040,0039)": {
        "vr": "SQ",
        "name": "AssigningJurisdictionCodeSequence",
        "vm": "1",
    },
    "(0040,003A)": {
        "vr": "SQ",
        "name": "AssigningAgencyOrDepartmentCodeSequence",
        "vm": "1",
    },
    "(0040,0100)": {
        "vr": "SQ",
        "name": "ScheduledProcedureStepSequence",
        "vm": "1",
    },
    "(0040,0220)": {
        "vr": "SQ",
        "name": "ReferencedNonImageCompositeSOPInstanceSequence",
        "vm": "1",
    },
    "(0040,0241)": {
        "vr": "AE",
        "name": "PerformedStationAETitle",
        "vm": "1",
    },
    "(0040,0242)": {
        "vr": "SH",
        "name": "PerformedStationName",
        "vm": "1",
    },
    "(0040,0243)": {
        "vr": "SH",
        "name": "PerformedLocation",
        "vm": "1",
    },
    "(0040,0244)": {
        "vr": "DA",
        "name": "PerformedProcedureStepStartDate",
        "vm": "1",
    },
    "(0040,0245)": {
        "vr": "TM",
        "name": "PerformedProcedureStepStartTime",
        "vm": "1",
    },
    "(0040,0250)": {
        "vr": "DA",
        "name": "PerformedProcedureStepEndDate",
        "vm": "1",
    },
    "(0040,0251)": {
        "vr": "TM",
        "name": "PerformedProcedureStepEndTime",
        "vm": "1",
    },
    "(0040,0252)": {
        "vr": "CS",
        "name": "PerformedProcedureStepStatus",
        "vm": "1",
    },
    "(0040,0253)": {
        "vr": "SH",
        "name": "PerformedProcedureStepID",
        "vm": "1",
    },
    "(0040,0254)": {
        "vr": "LO",
        "name": "PerformedProcedureStepDescription",
        "vm": "1",
    },
    "(0040,0255)": {
        "vr": "LO",
        "name": "PerformedProcedureTypeDescription",
        "vm": "1",
    },
    "(0040,0260)": {
        "vr": "SQ",
        "name": "PerformedProtocolCodeSequence",
        "vm": "1",
    },
    "(0040,0261)": {
        "vr": "CS",
        "name": "PerformedProtocolType",
        "vm": "1",
    },
    "(0040,0270)": {
        "vr": "SQ",
        "name": "ScheduledStepAttributesSequence",
        "vm": "1",
    },
    "(0040,0275)": {
        "vr": "SQ",
        "name": "RequestAttributesSequence",
        "vm": "1",
    },
    "(0040,0280)": {
        "vr": "ST",
        "name": "CommentsOnThePerformedProcedureStep",
        "vm": "1",
    },
    "(0040,0281)": {
        "vr": "SQ",
        "name": "PerformedProcedureStepDiscontinuationReasonCodeSequence",
        "vm": "1",
    },
    "(0040,0293)": {
        "vr": "SQ",
        "name": "QuantitySequence",
        "vm": "1",
    },
    "(0040,0294)": {
        "vr": "DS",
        "name": "Quantity",
        "vm": "1",
    },
    "(0040,0295)": {
        "vr": "SQ",
        "name": "MeasuringUnitsSequence",
        "vm": "1",
    },
    "(0040,0296)": {
        "vr": "SQ",
        "name": "BillingItemSequence",
        "vm": "1",
    },
    "(0040,0300)": {
        "vr": "US",
        "name": "TotalTimeOfFluoroscopy",
        "vm": "1",
    },
    "(0040,0301)": {
        "vr": "US",
        "name": "TotalNumberOfExposures",
        "vm": "1",
    },
    "(0040,0302)": {
        "vr": "US",
        "name": "EntranceDose",
        "vm": "1",
    },
    "(0040,0303)": {
        "vr": "US",
        "name": "ExposedArea",
        "vm": "1-2",
    },
    "(0040,0306)": {
        "vr": "DS",
        "name": "DistanceSourceToEntrance",
        "vm": "1",
    },
    "(0040,030E)": {
        "vr": "SQ",
        "name": "ExposureDoseSequence",
        "vm": "1",
    },
    "(0040,0310)": {
        "vr": "ST",
        "name": "CommentsOnRadiationDose",
        "vm": "1",
    },
    "(0040,0312)": {
        "vr": "DS",
        "name": "XRayOutput",
        "vm": "1",
    },
    "(0040,0314)": {
        "vr": "DS",
        "name": "HalfValueLayer",
        "vm": "1",
    },
    "(0040,0316)": {
        "vr": "DS",
        "name": "OrganDose",
        "vm": "1",
    },
    "(0040,0318)": {
        "vr": "CS",
        "name": "OrganExposed",
        "vm": "1",
    },
    "(0040,0320)": {
        "vr": "SQ",
        "name": "BillingProcedureStepSequence",
        "vm": "1",
    },
    "(0040,0321)": {
        "vr": "SQ",
        "name": "FilmConsumptionSequence",
        "vm": "1",
    },
    "(0040,0324)": {
        "vr": "SQ",
        "name": "BillingSuppliesAndDevicesSequence",
        "vm": "1",
    },
    "(0040,0340)": {
        "vr": "SQ",
        "name": "PerformedSeriesSequence",
        "vm": "1",
    },
    "(0040,0400)": {
        "vr": "LT",
        "name": "CommentsOnTheScheduledProcedureStep",
        "vm": "1",
    },
    "(0040,0440)": {
        "vr": "SQ",
        "name": "ProtocolContextSequence",
        "vm": "1",
    },
    "(0040,0441)": {
        "vr": "SQ",
        "name": "ContentItemModifierSequence",
        "vm": "1",
    },
    "(0040,0500)": {
        "vr": "SQ",
        "name": "ScheduledSpecimenSequence",
        "vm": "1",
    },
    "(0040,0512)": {
        "vr": "LO",
        "name": "ContainerIdentifier",
        "vm": "1",
    },
    "(0040,0513)": {
        "vr": "SQ",
        "name": "IssuerOfTheContainerIdentifierSequence",
        "vm": "1",
    },
    "(0040,0515)": {
        "vr": "SQ",
        "name": "AlternateContainerIdentifierSequence",
        "vm": "1",
    },
    "(0040,0518)": {
        "vr": "SQ",
        "name": "ContainerTypeCodeSequence",
        "vm": "1",
    },
    "(0040,051A)": {
        "vr": "LO",
        "name": "ContainerDescription",
        "vm": "1",
    },
    "(0040,0520)": {
        "vr": "SQ",
        "name": "ContainerComponentSequence",
        "vm": "1",
    },
    "(0040,0551)": {
        "vr": "LO",
        "name": "SpecimenIdentifier",
        "vm": "1",
    },
    "(0040,0554)": {
        "vr": "UI",
        "name": "SpecimenUID",
        "vm": "1",
    },
    "(0040,0555)": {
        "vr": "SQ",
        "name": "AcquisitionContextSequence",
        "vm": "1",
    },
    "(0040,0556)": {
        "vr": "ST",
        "name": "AcquisitionContextDescription",
        "vm": "1",
    },
    "(0040,0560)": {
        "vr": "SQ",
        "name": "SpecimenDescriptionSequence",
        "vm": "1",
    },
    "(0040,0562)": {
        "vr": "SQ",
        "name": "IssuerOfTheSpecimenIdentifierSequence",
        "vm": "1",
    },
    "(0040,059A)": {
        "vr": "SQ",
        "name": "SpecimenTypeCodeSequence",
        "vm": "1",
    },
    "(0040,0600)": {
        "vr": "LO",
        "name": "SpecimenShortDescription",
        "vm": "1",
    },
    "(0040,0602)": {
        "vr": "UT",
        "name": "SpecimenDetailedDescription",
        "vm": "1",
    },
    "(0040,0610)": {
        "vr": "SQ",
        "name": "SpecimenPreparationSequence",
        "vm": "1",
    },
    "(0040,0612)": {
        "vr": "SQ",
        "name": "SpecimenPreparationStepContentItemSequence",
        "vm": "1",
    },
    "(0040,0620)": {
        "vr": "SQ",
        "name": "SpecimenLocalizationContentItemSequence",
        "vm": "1",
    },
    "(0040,071A)": {
        "vr": "SQ",
        "name": "ImageCenterPointCoordinatesSequence",
        "vm": "1",
    },
    "(0040,072A)": {
        "vr": "DS",
        "name": "XOffsetInSlideCoordinateSystem",
        "vm": "1",
    },
    "(0040,073A)": {
        "vr": "DS",
        "name": "YOffsetInSlideCoordinateSystem",
        "vm": "1",
    },
    "(0040,074A)": {
        "vr": "DS",
        "name": "ZOffsetInSlideCoordinateSystem",
        "vm": "1",
    },
    "(0040,08EA)": {
        "vr": "SQ",
        "name": "MeasurementUnitsCodeSequence",
        "vm": "1",
    },
    "(0040,1001)": {
        "vr": "SH",
        "name": "RequestedProcedureID",
        "vm": "1",
    },
    "(0040,1002)": {
        "vr": "LO",
        "name": "ReasonForTheRequestedProcedure",
        "vm": "1",
    },
    "(0040,1003)": {
        "vr": "SH",
        "name": "RequestedProcedurePriority",
        "vm": "1",
    },
    "(0040,1004)": {
        "vr": "LO",
        "name": "PatientTransportArrangements",
        "vm": "1",
    },
    "(0040,1005)": {
        "vr": "LO",
        "name": "RequestedProcedureLocation",
        "vm": "1",
    },
    "(0040,1008)": {
        "vr": "LO",
        "name": "ConfidentialityCode",
        "vm": "1",
    },
    "(0040,1009)": {
        "vr": "SH",
        "name": "ReportingPriority",
        "vm": "1",
    },
    "(0040,100A)": {
        "vr": "SQ",
        "name": "ReasonForRequestedProcedureCodeSequence",
        "vm": "1",
    },
    "(0040,1010)": {
        "vr": "PN",
        "name": "NamesOfIntendedRecipientsOfResults",
        "vm": "1-n",
    },
    "(0040,1011)": {
        "vr": "SQ",
        "name": "IntendedRecipientsOfResultsIdentificationSequence",
        "vm": "1",
    },
    "(0040,1012)": {
        "vr": "SQ",
        "name": "ReasonForPerformedProcedureCodeSequence",
        "vm": "1",
    },
    "(0040,1101)": {
        "vr": "SQ",
        "name": "PersonIdentificationCodeSequence",
        "vm": "1",
    },
    "(0040,1102)": {
        "vr": "ST",
        "name": "PersonAddress",
        "vm": "1",
    },
    "(0040,1103)": {
        "vr": "LO",
        "name": "PersonTelephoneNumbers",
        "vm": "1-n",
    },
    "(0040,1104)": {
        "vr": "LT",
        "name": "PersonTelecomInformation",
        "vm": "1",
    },
    "(0040,1400)": {
        "vr": "LT",
        "name": "RequestedProcedureComments",
        "vm": "1",
    },
    "(0040,2004)": {
        "vr": "DA",
        "name": "IssueDateOfImagingServiceRequest",
        "vm": "1",
    },
    "(0040,2005)": {
        "vr": "TM",
        "name": "IssueTimeOfImagingServiceRequest",
        "vm": "1",
    },
    "(0040,2008)": {
        "vr": "PN",
        "name": "OrderEnteredBy",
        "vm": "1",
    },
    "(0040,2009)": {
        "vr": "SH",
        "name": "OrderEntererLocation",
        "vm": "1",
    },
    "(0040,2010)": {
        "vr": "SH",
        "name": "OrderCallbackPhoneNumber",
        "vm": "1",
    },
    "(0040,2011)": {
        "vr": "LT",
        "name": "OrderCallbackTelecomInformation",
        "vm": "1",
    },
    "(0040,2016)": {
        "vr": "LO",
        "name": "PlacerOrderNumberImagingServiceRequest",
        "vm": "1",
    },
    "(0040,2017)": {
        "vr": "LO",
        "name": "FillerOrderNumberImagingServiceRequest",
        "vm": "1",
    },
    "(0040,2400)": {
        "vr": "LT",
        "name": "ImagingServiceRequestComments",
        "vm": "1",
    },
    "(0040,3001)": {
        "vr": "LO",
        "name": "ConfidentialityConstraintOnPatientDataDescription",
        "vm": "1",
    },
    "(0040,4005)": {
        "vr": "DT",
        "name": "ScheduledProcedureStepStartDateTime",
        "vm": "1",
    },
    "(0040,4007)": {
        "vr": "SQ",
        "name": "PerformedProcessingApplicationsCodeSequence",
        "vm": "1",
    },
    "(0040,4009)": {
        "vr": "SQ",
        "name": "HumanPerformerCodeSequence",
        "vm": "1",
    },
    "(0040,4010)": {
        "vr": "DT",
        "name": "ScheduledProcedureStepModificationDateTime",
        "vm": "1",
    },
    "(0040,4011)": {
        "vr": "DT",
        "name": "ExpectedCompletionDateTime",
        "vm": "1",
    },
    "(0040,4018)": {
        "vr": "SQ",
        "name": "ScheduledWorkitemCodeSequence",
        "vm": "1",
    },
    "(0040,4019)": {
        "vr": "SQ",
        "name": "PerformedWorkitemCodeSequence",
        "vm": "1",
    },
    "(0040,4020)": {
        "vr": "CS",
        "name": "InputAvailabilityFlag",
        "vm": "1",
    },
    "(0040,4021)": {
        "vr": "SQ",
        "name": "InputInformationSequence",
        "vm": "1",
    },
    "(0040,4025)": {
        "vr": "SQ",
        "name": "ScheduledStationNameCodeSequence",
        "vm": "1",
    },
    "(0040,4026)": {
        "vr": "SQ",
        "name": "ScheduledStationClassCodeSequence",
        "vm": "1",
    },
    "(0040,4027)": {
        "vr": "SQ",
        "name": "ScheduledStationGeographicLocationCodeSequence",
        "vm": "1",
    },
    "(0040,4028)": {
        "vr": "SQ",
        "name": "PerformedStationNameCodeSequence",
        "vm": "1",
    },
    "(0040,4029)": {
        "vr": "SQ",
        "name": "PerformedStationClassCodeSequence",
        "vm": "1",
    },
    "(0040,4030)": {
        "vr": "SQ",
        "name": "PerformedStationGeographicLocationCodeSequence",
        "vm": "1",
    },
    "(0040,4033)": {
        "vr": "SQ",
        "name": "OutputInformationSequence",
        "vm": "1",
    },
    "(0040,4034)": {
        "vr": "SQ",
        "name": "ScheduledHumanPerformersSequence",
        "vm": "1",
    },
    "(0040,4035)": {
        "vr": "SQ",
        "name": "ActualHumanPerformersSequence",
        "vm": "1",
    },
    "(0040,4036)": {
        "vr": "LO",
        "name": "HumanPerformerOrganization",
        "vm": "1",
    },
    "(0040,4037)": {
        "vr": "PN",
        "name": "HumanPerformerName",
        "vm": "1",
    },
    "(0040,4040)": {
        "vr": "CS",
        "name": "RawDataHandling",
        "vm": "1",
    },
    "(0040,4041)": {
        "vr": "CS",
        "name": "InputReadinessState",
        "vm": "1",
    },
    "(0040,4050)": {
        "vr": "DT",
        "name": "PerformedProcedureStepStartDateTime",
        "vm": "1",
    },
    "(0040,4051)": {
        "vr": "DT",
        "name": "PerformedProcedureStepEndDateTime",
        "vm": "1",
    },
    "(0040,4052)": {
        "vr": "DT",
        "name": "ProcedureStepCancellationDateTime",
        "vm": "1",
    },
    "(0040,8302)": {
        "vr": "DS",
        "name": "EntranceDoseInmGy",
        "vm": "1",
    },
    "(0040,9092)": {
        "vr": "SQ",
        "name": "ParametricMapFrameTypeSequence",
        "vm": "1",
    },
    "(0040,9094)": {
        "vr": "SQ",
        "name": "ReferencedImageRealWorldValueMappingSequence",
        "vm": "1",
    },
    "(0040,9096)": {
        "vr": "SQ",
        "name": "RealWorldValueMappingSequence",
        "vm": "1",
    },
    "(0040,9098)": {
        "vr": "SQ",
        "name": "PixelValueMappingCodeSequence",
        "vm": "1",
    },
    "(0040,9210)": {
        "vr": "SH",
        "name": "LUTLabel",
        "vm": "1",
    },
    "(0040,9211)": {
        "vr": "xs",
        "name": "RealWorldValueLastValueMapped",
        "vm": "1",
    },
    "(0040,9212)": {
        "vr": "FD",
        "name": "RealWorldValueLUTData",
        "vm": "1-n",
    },
    "(0040,9216)": {
        "vr": "xs",
        "name": "RealWorldValueFirstValueMapped",
        "vm": "1",
    },
    "(0040,9220)": {
        "vr": "SQ",
        "name": "QuantityDefinitionSequence",
        "vm": "1",
    },
    "(0040,9224)": {
        "vr": "FD",
        "name": "RealWorldValueIntercept",
        "vm": "1",
    },
    "(0040,9225)": {
        "vr": "FD",
        "name": "RealWorldValueSlope",
        "vm": "1",
    },
    "(0040,A010)": {
        "vr": "CS",
        "name": "RelationshipType",
        "vm": "1",
    },
    "(0040,A027)": {
        "vr": "LO",
        "name": "VerifyingOrganization",
        "vm": "1",
    },
    "(0040,A030)": {
        "vr": "DT",
        "name": "VerificationDateTime",
        "vm": "1",
    },
    "(0040,A032)": {
        "vr": "DT",
        "name": "ObservationDateTime",
        "vm": "1",
    },
    "(0040,A040)": {
        "vr": "CS",
        "name": "ValueType",
        "vm": "1",
    },
    "(0040,A043)": {
        "vr": "SQ",
        "name": "ConceptNameCodeSequence",
        "vm": "1",
    },
    "(0040,A050)": {
        "vr": "CS",
        "name": "ContinuityOfContent",
        "vm": "1",
    },
    "(0040,A073)": {
        "vr": "SQ",
        "name": "VerifyingObserverSequence",
        "vm": "1",
    },
    "(0040,A075)": {
        "vr": "PN",
        "name": "VerifyingObserverName",
        "vm": "1",
    },
    "(0040,A078)": {
        "vr": "SQ",
        "name": "AuthorObserverSequence",
        "vm": "1",
    },
    "(0040,A07A)": {
        "vr": "SQ",
        "name": "ParticipantSequence",
        "vm": "1",
    },
    "(0040,A07C)": {
        "vr": "SQ",
        "name": "CustodialOrganizationSequence",
        "vm": "1",
    },
    "(0040,A080)": {
        "vr": "CS",
        "name": "ParticipationType",
        "vm": "1",
    },
    "(0040,A082)": {
        "vr": "DT",
        "name": "ParticipationDateTime",
        "vm": "1",
    },
    "(0040,A084)": {
        "vr": "CS",
        "name": "ObserverType",
        "vm": "1",
    },
    "(0040,A088)": {
        "vr": "SQ",
        "name": "VerifyingObserverIdentificationCodeSequence",
        "vm": "1",
    },
    "(0040,A0B0)": {
        "vr": "US",
        "name": "ReferencedWaveformChannels",
        "vm": "2-2n",
    },
    "(0040,A120)": {
        "vr": "DT",
        "name": "DateTime",
        "vm": "1",
    },
    "(0040,A121)": {
        "vr": "DA",
        "name": "Date",
        "vm": "1",
    },
    "(0040,A122)": {
        "vr": "TM",
        "name": "Time",
        "vm": "1",
    },
    "(0040,A123)": {
        "vr": "PN",
        "name": "PersonName",
        "vm": "1",
    },
    "(0040,A124)": {
        "vr": "UI",
        "name": "UID",
        "vm": "1",
    },
    "(0040,A130)": {
        "vr": "CS",
        "name": "TemporalRangeType",
        "vm": "1",
    },
    "(0040,A132)": {
        "vr": "UL",
        "name": "ReferencedSamplePositions",
        "vm": "1-n",
    },
    "(0040,A136)": {
        "vr": "US",
        "name": "ReferencedFrameNumbers",
        "vm": "1-n",
    },
    "(0040,A138)": {
        "vr": "DS",
        "name": "ReferencedTimeOffsets",
        "vm": "1-n",
    },
    "(0040,A13A)": {
        "vr": "DT",
        "name": "ReferencedDateTime",
        "vm": "1-n",
    },
    "(0040,A160)": {
        "vr": "UT",
        "name": "TextValue",
        "vm": "1",
    },
    "(0040,A161)": {
        "vr": "FD",
        "name": "FloatingPointValue",
        "vm": "1-n",
    },
    "(0040,A162)": {
        "vr": "SL",
        "name": "RationalNumeratorValue",
        "vm": "1-n",
    },
    "(0040,A163)": {
        "vr": "UL",
        "name": "RationalDenominatorValue",
        "vm": "1-n",
    },
    "(0040,A168)": {
        "vr": "SQ",
        "name": "ConceptCodeSequence",
        "vm": "1",
    },
    "(0040,A170)": {
        "vr": "SQ",
        "name": "PurposeOfReferenceCodeSequence",
        "vm": "1",
    },
    "(0040,A171)": {
        "vr": "UI",
        "name": "ObservationUID",
        "vm": "1",
    },
    "(0040,A180)": {
        "vr": "US",
        "name": "AnnotationGroupNumber",
        "vm": "1",
    },
    "(0040,A195)": {
        "vr": "SQ",
        "name": "ModifierCodeSequence",
        "vm": "1",
    },
    "(0040,A300)": {
        "vr": "SQ",
        "name": "MeasuredValueSequence",
        "vm": "1",
    },
    "(0040,A301)": {
        "vr": "SQ",
        "name": "NumericValueQualifierCodeSequence",
        "vm": "1",
    },
    "(0040,A30A)": {
        "vr": "DS",
        "name": "NumericValue",
        "vm": "1-n",
    },
    "(0040,A360)": {
        "vr": "SQ",
        "name": "PredecessorDocumentsSequence",
        "vm": "1",
    },
    "(0040,A370)": {
        "vr": "SQ",
        "name": "ReferencedRequestSequence",
        "vm": "1",
    },
    "(0040,A372)": {
        "vr": "SQ",
        "name": "PerformedProcedureCodeSequence",
        "vm": "1",
    },
    "(0040,A375)": {
        "vr": "SQ",
        "name": "CurrentRequestedProcedureEvidenceSequence",
        "vm": "1",
    },
    "(0040,A385)": {
        "vr": "SQ",
        "name": "PertinentOtherEvidenceSequence",
        "vm": "1",
    },
    "(0040,A390)": {
        "vr": "SQ",
        "name": "HL7StructuredDocumentReferenceSequence",
        "vm": "1",
    },
    "(0040,A491)": {
        "vr": "CS",
        "name": "CompletionFlag",
        "vm": "1",
    },
    "(0040,A492)": {
        "vr": "LO",
        "name": "CompletionFlagDescription",
        "vm": "1",
    },
    "(0040,A493)": {
        "vr": "CS",
        "name": "VerificationFlag",
        "vm": "1",
    },
    "(0040,A494)": {
        "vr": "CS",
        "name": "ArchiveRequested",
        "vm": "1",
    },
    "(0040,A496)": {
        "vr": "CS",
        "name": "PreliminaryFlag",
        "vm": "1",
    },
    "(0040,A504)": {
        "vr": "SQ",
        "name": "ContentTemplateSequence",
        "vm": "1",
    },
    "(0040,A525)": {
        "vr": "SQ",
        "name": "IdenticalDocumentsSequence",
        "vm": "1",
    },
    "(0040,A730)": {
        "vr": "SQ",
        "name": "ContentSequence",
        "vm": "1",
    },
    "(0040,B020)": {
        "vr": "SQ",
        "name": "WaveformAnnotationSequence",
        "vm": "1",
    },
    "(0040,DB00)": {
        "vr": "CS",
        "name": "TemplateIdentifier",
        "vm": "1",
    },
    "(0040,DB73)": {
        "vr": "UL",
        "name": "ReferencedContentItemIdentifier",
        "vm": "1-n",
    },
    "(0040,E001)": {
        "vr": "ST",
        "name": "HL7InstanceIdentifier",
        "vm": "1",
    },
    "(0040,E004)": {
        "vr": "DT",
        "name": "HL7DocumentEffectiveTime",
        "vm": "1",
    },
    "(0040,E006)": {
        "vr": "SQ",
        "name": "HL7DocumentTypeCodeSequence",
        "vm": "1",
    },
    "(0040,E008)": {
        "vr": "SQ",
        "name": "DocumentClassCodeSequence",
        "vm": "1",
    },
    "(0040,E010)": {
        "vr": "UR",
        "name": "RetrieveURI",
        "vm": "1",
    },
    "(0040,E011)": {
        "vr": "UI",
        "name": "RetrieveLocationUID",
        "vm": "1",
    },
    "(0040,E020)": {
        "vr": "CS",
        "name": "TypeOfInstances",
        "vm": "1",
    },
    "(0040,E021)": {
        "vr": "SQ",
        "name": "DICOMRetrievalSequence",
        "vm": "1",
    },
    "(0040,E022)": {
        "vr": "SQ",
        "name": "DICOMMediaRetrievalSequence",
        "vm": "1",
    },
    "(0040,E023)": {
        "vr": "SQ",
        "name": "WADORetrievalSequence",
        "vm": "1",
    },
    "(0040,E024)": {
        "vr": "SQ",
        "name": "XDSRetrievalSequence",
        "vm": "1",
    },
    "(0040,E025)": {
        "vr": "SQ",
        "name": "WADORSRetrievalSequence",
        "vm": "1",
    },
    "(0040,E030)": {
        "vr": "UI",
        "name": "RepositoryUniqueID",
        "vm": "1",
    },
    "(0040,E031)": {
        "vr": "UI",
        "name": "HomeCommunityID",
        "vm": "1",
    },
    "(0042,0010)": {
        "vr": "ST",
        "name": "DocumentTitle",
        "vm": "1",
    },
    "(0042,0011)": {
        "vr": "OB",
        "name": "EncapsulatedDocument",
        "vm": "1",
    },
    "(0042,0012)": {
        "vr": "LO",
        "name": "MIMETypeOfEncapsulatedDocument",
        "vm": "1",
    },
    "(0042,0013)": {
        "vr": "SQ",
        "name": "SourceInstanceSequence",
        "vm": "1",
    },
    "(0042,0014)": {
        "vr": "LO",
        "name": "ListOfMIMETypes",
        "vm": "1-n",
    },
    "(0044,0001)": {
        "vr": "ST",
        "name": "ProductPackageIdentifier",
        "vm": "1",
    },
    "(0044,0002)": {
        "vr": "CS",
        "name": "SubstanceAdministrationApproval",
        "vm": "1",
    },
    "(0044,0003)": {
        "vr": "LT",
        "name": "ApprovalStatusFurtherDescription",
        "vm": "1",
    },
    "(0044,0004)": {
        "vr": "DT",
        "name": "ApprovalStatusDateTime",
        "vm": "1",
    },
    "(0044,0007)": {
        "vr": "SQ",
        "name": "ProductTypeCodeSequence",
        "vm": "1",
    },
    "(0044,0008)": {
        "vr": "LO",
        "name": "ProductName",
        "vm": "1-n",
    },
    "(0044,0009)": {
        "vr": "LT",
        "name": "ProductDescription",
        "vm": "1",
    },
    "(0044,000A)": {
        "vr": "LO",
        "name": "ProductLotIdentifier",
        "vm": "1",
    },
    "(0044,000B)": {
        "vr": "DT",
        "name": "ProductExpirationDateTime",
        "vm": "1",
    },
    "(0044,0010)": {
        "vr": "DT",
        "name": "SubstanceAdministrationDateTime",
        "vm": "1",
    },
    "(0044,0011)": {
        "vr": "LO",
        "name": "SubstanceAdministrationNotes",
        "vm": "1",
    },
    "(0044,0012)": {
        "vr": "LO",
        "name": "SubstanceAdministrationDeviceID",
        "vm": "1",
    },
    "(0044,0013)": {
        "vr": "SQ",
        "name": "ProductParameterSequence",
        "vm": "1",
    },
    "(0044,0019)": {
        "vr": "SQ",
        "name": "SubstanceAdministrationParameterSequence",
        "vm": "1",
    },
    "(0046,0012)": {
        "vr": "LO",
        "name": "LensDescription",
        "vm": "1",
    },
    "(0046,0014)": {
        "vr": "SQ",
        "name": "RightLensSequence",
        "vm": "1",
    },
    "(0046,0015)": {
        "vr": "SQ",
        "name": "LeftLensSequence",
        "vm": "1",
    },
    "(0046,0016)": {
        "vr": "SQ",
        "name": "UnspecifiedLateralityLensSequence",
        "vm": "1",
    },
    "(0046,0018)": {
        "vr": "SQ",
        "name": "CylinderSequence",
        "vm": "1",
    },
    "(0046,0028)": {
        "vr": "SQ",
        "name": "PrismSequence",
        "vm": "1",
    },
    "(0046,0030)": {
        "vr": "FD",
        "name": "HorizontalPrismPower",
        "vm": "1",
    },
    "(0046,0032)": {
        "vr": "CS",
        "name": "HorizontalPrismBase",
        "vm": "1",
    },
    "(0046,0034)": {
        "vr": "FD",
        "name": "VerticalPrismPower",
        "vm": "1",
    },
    "(0046,0036)": {
        "vr": "CS",
        "name": "VerticalPrismBase",
        "vm": "1",
    },
    "(0046,0038)": {
        "vr": "CS",
        "name": "LensSegmentType",
        "vm": "1",
    },
    "(0046,0040)": {
        "vr": "FD",
        "name": "OpticalTransmittance",
        "vm": "1",
    },
    "(0046,0042)": {
        "vr": "FD",
        "name": "ChannelWidth",
        "vm": "1",
    },
    "(0046,0044)": {
        "vr": "FD",
        "name": "PupilSize",
        "vm": "1",
    },
    "(0046,0046)": {
        "vr": "FD",
        "name": "CornealSize",
        "vm": "1",
    },
    "(0046,0050)": {
        "vr": "SQ",
        "name": "AutorefractionRightEyeSequence",
        "vm": "1",
    },
    "(0046,0052)": {
        "vr": "SQ",
        "name": "AutorefractionLeftEyeSequence",
        "vm": "1",
    },
    "(0046,0060)": {
        "vr": "FD",
        "name": "DistancePupillaryDistance",
        "vm": "1",
    },
    "(0046,0062)": {
        "vr": "FD",
        "name": "NearPupillaryDistance",
        "vm": "1",
    },
    "(0046,0063)": {
        "vr": "FD",
        "name": "IntermediatePupillaryDistance",
        "vm": "1",
    },
    "(0046,0064)": {
        "vr": "FD",
        "name": "OtherPupillaryDistance",
        "vm": "1",
    },
    "(0046,0070)": {
        "vr": "SQ",
        "name": "KeratometryRightEyeSequence",
        "vm": "1",
    },
    "(0046,0071)": {
        "vr": "SQ",
        "name": "KeratometryLeftEyeSequence",
        "vm": "1",
    },
    "(0046,0074)": {
        "vr": "SQ",
        "name": "SteepKeratometricAxisSequence",
        "vm": "1",
    },
    "(0046,0075)": {
        "vr": "FD",
        "name": "RadiusOfCurvature",
        "vm": "1",
    },
    "(0046,0076)": {
        "vr": "FD",
        "name": "KeratometricPower",
        "vm": "1",
    },
    "(0046,0077)": {
        "vr": "FD",
        "name": "KeratometricAxis",
        "vm": "1",
    },
    "(0046,0080)": {
        "vr": "SQ",
        "name": "FlatKeratometricAxisSequence",
        "vm": "1",
    },
    "(0046,0092)": {
        "vr": "CS",
        "name": "BackgroundColor",
        "vm": "1",
    },
    "(0046,0094)": {
        "vr": "CS",
        "name": "Optotype",
        "vm": "1",
    },
    "(0046,0095)": {
        "vr": "CS",
        "name": "OptotypePresentation",
        "vm": "1",
    },
    "(0046,0097)": {
        "vr": "SQ",
        "name": "SubjectiveRefractionRightEyeSequence",
        "vm": "1",
    },
    "(0046,0098)": {
        "vr": "SQ",
        "name": "SubjectiveRefractionLeftEyeSequence",
        "vm": "1",
    },
    "(0046,0100)": {
        "vr": "SQ",
        "name": "AddNearSequence",
        "vm": "1",
    },
    "(0046,0101)": {
        "vr": "SQ",
        "name": "AddIntermediateSequence",
        "vm": "1",
    },
    "(0046,0102)": {
        "vr": "SQ",
        "name": "AddOtherSequence",
        "vm": "1",
    },
    "(0046,0104)": {
        "vr": "FD",
        "name": "AddPower",
        "vm": "1",
    },
    "(0046,0106)": {
        "vr": "FD",
        "name": "ViewingDistance",
        "vm": "1",
    },
    "(0046,0121)": {
        "vr": "SQ",
        "name": "VisualAcuityTypeCodeSequence",
        "vm": "1",
    },
    "(0046,0122)": {
        "vr": "SQ",
        "name": "VisualAcuityRightEyeSequence",
        "vm": "1",
    },
    "(0046,0123)": {
        "vr": "SQ",
        "name": "VisualAcuityLeftEyeSequence",
        "vm": "1",
    },
    "(0046,0124)": {
        "vr": "SQ",
        "name": "VisualAcuityBothEyesOpenSequence",
        "vm": "1",
    },
    "(0046,0125)": {
        "vr": "CS",
        "name": "ViewingDistanceType",
        "vm": "1",
    },
    "(0046,0135)": {
        "vr": "SS",
        "name": "VisualAcuityModifiers",
        "vm": "2",
    },
    "(0046,0137)": {
        "vr": "FD",
        "name": "DecimalVisualAcuity",
        "vm": "1",
    },
    "(0046,0139)": {
        "vr": "LO",
        "name": "OptotypeDetailedDefinition",
        "vm": "1",
    },
    "(0046,0145)": {
        "vr": "SQ",
        "name": "ReferencedRefractiveMeasurementsSequence",
        "vm": "1",
    },
    "(0046,0146)": {
        "vr": "FD",
        "name": "SpherePower",
        "vm": "1",
    },
    "(0046,0147)": {
        "vr": "FD",
        "name": "CylinderPower",
        "vm": "1",
    },
    "(0046,0201)": {
        "vr": "CS",
        "name": "CornealTopographySurface",
        "vm": "1",
    },
    "(0046,0202)": {
        "vr": "FL",
        "name": "CornealVertexLocation",
        "vm": "2",
    },
    "(0046,0203)": {
        "vr": "FL",
        "name": "PupilCentroidXCoordinate",
        "vm": "1",
    },
    "(0046,0204)": {
        "vr": "FL",
        "name": "PupilCentroidYCoordinate",
        "vm": "1",
    },
    "(0046,0205)": {
        "vr": "FL",
        "name": "EquivalentPupilRadius",
        "vm": "1",
    },
    "(0046,0207)": {
        "vr": "SQ",
        "name": "CornealTopographyMapTypeCodeSequence",
        "vm": "1",
    },
    "(0046,0208)": {
        "vr": "IS",
        "name": "VerticesOfTheOutlineOfPupil",
        "vm": "2-2n",
    },
    "(0046,0210)": {
        "vr": "SQ",
        "name": "CornealTopographyMappingNormalsSequence",
        "vm": "1",
    },
    "(0046,0211)": {
        "vr": "SQ",
        "name": "MaximumCornealCurvatureSequence",
        "vm": "1",
    },
    "(0046,0212)": {
        "vr": "FL",
        "name": "MaximumCornealCurvature",
        "vm": "1",
    },
    "(0046,0213)": {
        "vr": "FL",
        "name": "MaximumCornealCurvatureLocation",
        "vm": "2",
    },
    "(0046,0215)": {
        "vr": "SQ",
        "name": "MinimumKeratometricSequence",
        "vm": "1",
    },
    "(0046,0218)": {
        "vr": "SQ",
        "name": "SimulatedKeratometricCylinderSequence",
        "vm": "1",
    },
    "(0046,0220)": {
        "vr": "FL",
        "name": "AverageCornealPower",
        "vm": "1",
    },
    "(0046,0224)": {
        "vr": "FL",
        "name": "CornealISValue",
        "vm": "1",
    },
    "(0046,0227)": {
        "vr": "FL",
        "name": "AnalyzedArea",
        "vm": "1",
    },
    "(0046,0230)": {
        "vr": "FL",
        "name": "SurfaceRegularityIndex",
        "vm": "1",
    },
    "(0046,0232)": {
        "vr": "FL",
        "name": "SurfaceAsymmetryIndex",
        "vm": "1",
    },
    "(0046,0234)": {
        "vr": "FL",
        "name": "CornealEccentricityIndex",
        "vm": "1",
    },
    "(0046,0236)": {
        "vr": "FL",
        "name": "KeratoconusPredictionIndex",
        "vm": "1",
    },
    "(0046,0238)": {
        "vr": "FL",
        "name": "DecimalPotentialVisualAcuity",
        "vm": "1",
    },
    "(0046,0242)": {
        "vr": "CS",
        "name": "CornealTopographyMapQualityEvaluation",
        "vm": "1",
    },
    "(0046,0244)": {
        "vr": "SQ",
        "name": "SourceImageCornealProcessedDataSequence",
        "vm": "1",
    },
    "(0046,0247)": {
        "vr": "FL",
        "name": "CornealPointLocation",
        "vm": "3",
    },
    "(0046,0248)": {
        "vr": "CS",
        "name": "CornealPointEstimated",
        "vm": "1",
    },
    "(0046,0249)": {
        "vr": "FL",
        "name": "AxialPower",
        "vm": "1",
    },
    "(0046,0250)": {
        "vr": "FL",
        "name": "TangentialPower",
        "vm": "1",
    },
    "(0046,0251)": {
        "vr": "FL",
        "name": "RefractivePower",
        "vm": "1",
    },
    "(0046,0252)": {
        "vr": "FL",
        "name": "RelativeElevation",
        "vm": "1",
    },
    "(0046,0253)": {
        "vr": "FL",
        "name": "CornealWavefront",
        "vm": "1",
    },
    "(0048,0001)": {
        "vr": "FL",
        "name": "ImagedVolumeWidth",
        "vm": "1",
    },
    "(0048,0002)": {
        "vr": "FL",
        "name": "ImagedVolumeHeight",
        "vm": "1",
    },
    "(0048,0003)": {
        "vr": "FL",
        "name": "ImagedVolumeDepth",
        "vm": "1",
    },
    "(0048,0006)": {
        "vr": "UL",
        "name": "TotalPixelMatrixColumns",
        "vm": "1",
    },
    "(0048,0007)": {
        "vr": "UL",
        "name": "TotalPixelMatrixRows",
        "vm": "1",
    },
    "(0048,0008)": {
        "vr": "SQ",
        "name": "TotalPixelMatrixOriginSequence",
        "vm": "1",
    },
    "(0048,0010)": {
        "vr": "CS",
        "name": "SpecimenLabelInImage",
        "vm": "1",
    },
    "(0048,0011)": {
        "vr": "CS",
        "name": "FocusMethod",
        "vm": "1",
    },
    "(0048,0012)": {
        "vr": "CS",
        "name": "ExtendedDepthOfField",
        "vm": "1",
    },
    "(0048,0013)": {
        "vr": "US",
        "name": "NumberOfFocalPlanes",
        "vm": "1",
    },
    "(0048,0014)": {
        "vr": "FL",
        "name": "DistanceBetweenFocalPlanes",
        "vm": "1",
    },
    "(0048,0015)": {
        "vr": "US",
        "name": "RecommendedAbsentPixelCIELabValue",
        "vm": "3",
    },
    "(0048,0100)": {
        "vr": "SQ",
        "name": "IlluminatorTypeCodeSequence",
        "vm": "1",
    },
    "(0048,0102)": {
        "vr": "DS",
        "name": "ImageOrientationSlide",
        "vm": "6",
    },
    "(0048,0105)": {
        "vr": "SQ",
        "name": "OpticalPathSequence",
        "vm": "1",
    },
    "(0048,0106)": {
        "vr": "SH",
        "name": "OpticalPathIdentifier",
        "vm": "1",
    },
    "(0048,0107)": {
        "vr": "ST",
        "name": "OpticalPathDescription",
        "vm": "1",
    },
    "(0048,0108)": {
        "vr": "SQ",
        "name": "IlluminationColorCodeSequence",
        "vm": "1",
    },
    "(0048,0110)": {
        "vr": "SQ",
        "name": "SpecimenReferenceSequence",
        "vm": "1",
    },
    "(0048,0111)": {
        "vr": "DS",
        "name": "CondenserLensPower",
        "vm": "1",
    },
    "(0048,0112)": {
        "vr": "DS",
        "name": "ObjectiveLensPower",
        "vm": "1",
    },
    "(0048,0113)": {
        "vr": "DS",
        "name": "ObjectiveLensNumericalAperture",
        "vm": "1",
    },
    "(0048,0120)": {
        "vr": "SQ",
        "name": "PaletteColorLookupTableSequence",
        "vm": "1",
    },
    "(0048,0200)": {
        "vr": "SQ",
        "name": "ReferencedImageNavigationSequence",
        "vm": "1",
    },
    "(0048,0201)": {
        "vr": "US",
        "name": "TopLeftHandCornerOfLocalizerArea",
        "vm": "2",
    },
    "(0048,0202)": {
        "vr": "US",
        "name": "BottomRightHandCornerOfLocalizerArea",
        "vm": "2",
    },
    "(0048,0207)": {
        "vr": "SQ",
        "name": "OpticalPathIdentificationSequence",
        "vm": "1",
    },
    "(0048,021A)": {
        "vr": "SQ",
        "name": "PlanePositionSlideSequence",
        "vm": "1",
    },
    "(0048,021E)": {
        "vr": "SL",
        "name": "ColumnPositionInTotalImagePixelMatrix",
        "vm": "1",
    },
    "(0048,021F)": {
        "vr": "SL",
        "name": "RowPositionInTotalImagePixelMatrix",
        "vm": "1",
    },
    "(0048,0301)": {
        "vr": "CS",
        "name": "PixelOriginInterpretation",
        "vm": "1",
    },
    "(0050,0004)": {
        "vr": "CS",
        "name": "CalibrationImage",
        "vm": "1",
    },
    "(0050,0010)": {
        "vr": "SQ",
        "name": "DeviceSequence",
        "vm": "1",
    },
    "(0050,0012)": {
        "vr": "SQ",
        "name": "ContainerComponentTypeCodeSequence",
        "vm": "1",
    },
    "(0050,0013)": {
        "vr": "FD",
        "name": "ContainerComponentThickness",
        "vm": "1",
    },
    "(0050,0014)": {
        "vr": "DS",
        "name": "DeviceLength",
        "vm": "1",
    },
    "(0050,0015)": {
        "vr": "FD",
        "name": "ContainerComponentWidth",
        "vm": "1",
    },
    "(0050,0016)": {
        "vr": "DS",
        "name": "DeviceDiameter",
        "vm": "1",
    },
    "(0050,0017)": {
        "vr": "CS",
        "name": "DeviceDiameterUnits",
        "vm": "1",
    },
    "(0050,0018)": {
        "vr": "DS",
        "name": "DeviceVolume",
        "vm": "1",
    },
    "(0050,0019)": {
        "vr": "DS",
        "name": "InterMarkerDistance",
        "vm": "1",
    },
    "(0050,001A)": {
        "vr": "CS",
        "name": "ContainerComponentMaterial",
        "vm": "1",
    },
    "(0050,001B)": {
        "vr": "LO",
        "name": "ContainerComponentID",
        "vm": "1",
    },
    "(0050,001C)": {
        "vr": "FD",
        "name": "ContainerComponentLength",
        "vm": "1",
    },
    "(0050,001D)": {
        "vr": "FD",
        "name": "ContainerComponentDiameter",
        "vm": "1",
    },
    "(0050,001E)": {
        "vr": "LO",
        "name": "ContainerComponentDescription",
        "vm": "1",
    },
    "(0050,0020)": {
        "vr": "LO",
        "name": "DeviceDescription",
        "vm": "1",
    },
    "(0052,0001)": {
        "vr": "FL",
        "name": "ContrastBolusIngredientPercentByVolume",
        "vm": "1",
    },
    "(0052,0002)": {
        "vr": "FD",
        "name": "OCTFocalDistance",
        "vm": "1",
    },
    "(0052,0003)": {
        "vr": "FD",
        "name": "BeamSpotSize",
        "vm": "1",
    },
    "(0052,0004)": {
        "vr": "FD",
        "name": "EffectiveRefractiveIndex",
        "vm": "1",
    },
    "(0052,0006)": {
        "vr": "CS",
        "name": "OCTAcquisitionDomain",
        "vm": "1",
    },
    "(0052,0007)": {
        "vr": "FD",
        "name": "OCTOpticalCenterWavelength",
        "vm": "1",
    },
    "(0052,0008)": {
        "vr": "FD",
        "name": "AxialResolution",
        "vm": "1",
    },
    "(0052,0009)": {
        "vr": "FD",
        "name": "RangingDepth",
        "vm": "1",
    },
    "(0052,0011)": {
        "vr": "FD",
        "name": "ALineRate",
        "vm": "1",
    },
    "(0052,0012)": {
        "vr": "US",
        "name": "ALinesPerFrame",
        "vm": "1",
    },
    "(0052,0013)": {
        "vr": "FD",
        "name": "CatheterRotationalRate",
        "vm": "1",
    },
    "(0052,0014)": {
        "vr": "FD",
        "name": "ALinePixelSpacing",
        "vm": "1",
    },
    "(0052,0016)": {
        "vr": "SQ",
        "name": "ModeOfPercutaneousAccessSequence",
        "vm": "1",
    },
    "(0052,0025)": {
        "vr": "SQ",
        "name": "IntravascularOCTFrameTypeSequence",
        "vm": "1",
    },
    "(0052,0026)": {
        "vr": "CS",
        "name": "OCTZOffsetApplied",
        "vm": "1",
    },
    "(0052,0027)": {
        "vr": "SQ",
        "name": "IntravascularFrameContentSequence",
        "vm": "1",
    },
    "(0052,0028)": {
        "vr": "FD",
        "name": "IntravascularLongitudinalDistance",
        "vm": "1",
    },
    "(0052,0029)": {
        "vr": "SQ",
        "name": "IntravascularOCTFrameContentSequence",
        "vm": "1",
    },
    "(0052,0030)": {
        "vr": "SS",
        "name": "OCTZOffsetCorrection",
        "vm": "1",
    },
    "(0052,0031)": {
        "vr": "CS",
        "name": "CatheterDirectionOfRotation",
        "vm": "1",
    },
    "(0052,0033)": {
        "vr": "FD",
        "name": "SeamLineLocation",
        "vm": "1",
    },
    "(0052,0034)": {
        "vr": "FD",
        "name": "FirstALineLocation",
        "vm": "1",
    },
    "(0052,0036)": {
        "vr": "US",
        "name": "SeamLineIndex",
        "vm": "1",
    },
    "(0052,0038)": {
        "vr": "US",
        "name": "NumberOfPaddedALines",
        "vm": "1",
    },
    "(0052,0039)": {
        "vr": "CS",
        "name": "InterpolationType",
        "vm": "1",
    },
    "(0052,003A)": {
        "vr": "CS",
        "name": "RefractiveIndexApplied",
        "vm": "1",
    },
    "(0054,0010)": {
        "vr": "US",
        "name": "EnergyWindowVector",
        "vm": "1-n",
    },
    "(0054,0011)": {
        "vr": "US",
        "name": "NumberOfEnergyWindows",
        "vm": "1",
    },
    "(0054,0012)": {
        "vr": "SQ",
        "name": "EnergyWindowInformationSequence",
        "vm": "1",
    },
    "(0054,0013)": {
        "vr": "SQ",
        "name": "EnergyWindowRangeSequence",
        "vm": "1",
    },
    "(0054,0014)": {
        "vr": "DS",
        "name": "EnergyWindowLowerLimit",
        "vm": "1",
    },
    "(0054,0015)": {
        "vr": "DS",
        "name": "EnergyWindowUpperLimit",
        "vm": "1",
    },
    "(0054,0016)": {
        "vr": "SQ",
        "name": "RadiopharmaceuticalInformationSequence",
        "vm": "1",
    },
    "(0054,0017)": {
        "vr": "IS",
        "name": "ResidualSyringeCounts",
        "vm": "1",
    },
    "(0054,0018)": {
        "vr": "SH",
        "name": "EnergyWindowName",
        "vm": "1",
    },
    "(0054,0020)": {
        "vr": "US",
        "name": "DetectorVector",
        "vm": "1-n",
    },
    "(0054,0021)": {
        "vr": "US",
        "name": "NumberOfDetectors",
        "vm": "1",
    },
    "(0054,0022)": {
        "vr": "SQ",
        "name": "DetectorInformationSequence",
        "vm": "1",
    },
    "(0054,0030)": {
        "vr": "US",
        "name": "PhaseVector",
        "vm": "1-n",
    },
    "(0054,0031)": {
        "vr": "US",
        "name": "NumberOfPhases",
        "vm": "1",
    },
    "(0054,0032)": {
        "vr": "SQ",
        "name": "PhaseInformationSequence",
        "vm": "1",
    },
    "(0054,0033)": {
        "vr": "US",
        "name": "NumberOfFramesInPhase",
        "vm": "1",
    },
    "(0054,0036)": {
        "vr": "IS",
        "name": "PhaseDelay",
        "vm": "1",
    },
    "(0054,0038)": {
        "vr": "IS",
        "name": "PauseBetweenFrames",
        "vm": "1",
    },
    "(0054,0039)": {
        "vr": "CS",
        "name": "PhaseDescription",
        "vm": "1",
    },
    "(0054,0050)": {
        "vr": "US",
        "name": "RotationVector",
        "vm": "1-n",
    },
    "(0054,0051)": {
        "vr": "US",
        "name": "NumberOfRotations",
        "vm": "1",
    },
    "(0054,0052)": {
        "vr": "SQ",
        "name": "RotationInformationSequence",
        "vm": "1",
    },
    "(0054,0053)": {
        "vr": "US",
        "name": "NumberOfFramesInRotation",
        "vm": "1",
    },
    "(0054,0060)": {
        "vr": "US",
        "name": "RRIntervalVector",
        "vm": "1-n",
    },
    "(0054,0061)": {
        "vr": "US",
        "name": "NumberOfRRIntervals",
        "vm": "1",
    },
    "(0054,0062)": {
        "vr": "SQ",
        "name": "GatedInformationSequence",
        "vm": "1",
    },
    "(0054,0063)": {
        "vr": "SQ",
        "name": "DataInformationSequence",
        "vm": "1",
    },
    "(0054,0070)": {
        "vr": "US",
        "name": "TimeSlotVector",
        "vm": "1-n",
    },
    "(0054,0071)": {
        "vr": "US",
        "name": "NumberOfTimeSlots",
        "vm": "1",
    },
    "(0054,0072)": {
        "vr": "SQ",
        "name": "TimeSlotInformationSequence",
        "vm": "1",
    },
    "(0054,0073)": {
        "vr": "DS",
        "name": "TimeSlotTime",
        "vm": "1",
    },
    "(0054,0080)": {
        "vr": "US",
        "name": "SliceVector",
        "vm": "1-n",
    },
    "(0054,0081)": {
        "vr": "US",
        "name": "NumberOfSlices",
        "vm": "1",
    },
    "(0054,0090)": {
        "vr": "US",
        "name": "AngularViewVector",
        "vm": "1-n",
    },
    "(0054,0100)": {
        "vr": "US",
        "name": "TimeSliceVector",
        "vm": "1-n",
    },
    "(0054,0101)": {
        "vr": "US",
        "name": "NumberOfTimeSlices",
        "vm": "1",
    },
    "(0054,0200)": {
        "vr": "DS",
        "name": "StartAngle",
        "vm": "1",
    },
    "(0054,0202)": {
        "vr": "CS",
        "name": "TypeOfDetectorMotion",
        "vm": "1",
    },
    "(0054,0210)": {
        "vr": "IS",
        "name": "TriggerVector",
        "vm": "1-n",
    },
    "(0054,0211)": {
        "vr": "US",
        "name": "NumberOfTriggersInPhase",
        "vm": "1",
    },
    "(0054,0220)": {
        "vr": "SQ",
        "name": "ViewCodeSequence",
        "vm": "1",
    },
    "(0054,0222)": {
        "vr": "SQ",
        "name": "ViewModifierCodeSequence",
        "vm": "1",
    },
    "(0054,0300)": {
        "vr": "SQ",
        "name": "RadionuclideCodeSequence",
        "vm": "1",
    },
    "(0054,0302)": {
        "vr": "SQ",
        "name": "AdministrationRouteCodeSequence",
        "vm": "1",
    },
    "(0054,0304)": {
        "vr": "SQ",
        "name": "RadiopharmaceuticalCodeSequence",
        "vm": "1",
    },
    "(0054,0306)": {
        "vr": "SQ",
        "name": "CalibrationDataSequence",
        "vm": "1",
    },
    "(0054,0308)": {
        "vr": "US",
        "name": "EnergyWindowNumber",
        "vm": "1",
    },
    "(0054,0400)": {
        "vr": "SH",
        "name": "ImageID",
        "vm": "1",
    },
    "(0054,0410)": {
        "vr": "SQ",
        "name": "PatientOrientationCodeSequence",
        "vm": "1",
    },
    "(0054,0412)": {
        "vr": "SQ",
        "name": "PatientOrientationModifierCodeSequence",
        "vm": "1",
    },
    "(0054,0414)": {
        "vr": "SQ",
        "name": "PatientGantryRelationshipCodeSequence",
        "vm": "1",
    },
    "(0054,0500)": {
        "vr": "CS",
        "name": "SliceProgressionDirection",
        "vm": "1",
    },
    "(0054,0501)": {
        "vr": "CS",
        "name": "ScanProgressionDirection",
        "vm": "1",
    },
    "(0054,1000)": {
        "vr": "CS",
        "name": "SeriesType",
        "vm": "2",
    },
    "(0054,1001)": {
        "vr": "CS",
        "name": "Units",
        "vm": "1",
    },
    "(0054,1002)": {
        "vr": "CS",
        "name": "CountsSource",
        "vm": "1",
    },
    "(0054,1004)": {
        "vr": "CS",
        "name": "ReprojectionMethod",
        "vm": "1",
    },
    "(0054,1006)": {
        "vr": "CS",
        "name": "SUVType",
        "vm": "1",
    },
    "(0054,1100)": {
        "vr": "CS",
        "name": "RandomsCorrectionMethod",
        "vm": "1",
    },
    "(0054,1101)": {
        "vr": "LO",
        "name": "AttenuationCorrectionMethod",
        "vm": "1",
    },
    "(0054,1102)": {
        "vr": "CS",
        "name": "DecayCorrection",
        "vm": "1",
    },
    "(0054,1103)": {
        "vr": "LO",
        "name": "ReconstructionMethod",
        "vm": "1",
    },
    "(0054,1104)": {
        "vr": "LO",
        "name": "DetectorLinesOfResponseUsed",
        "vm": "1",
    },
    "(0054,1105)": {
        "vr": "LO",
        "name": "ScatterCorrectionMethod",
        "vm": "1",
    },
    "(0054,1200)": {
        "vr": "DS",
        "name": "AxialAcceptance",
        "vm": "1",
    },
    "(0054,1201)": {
        "vr": "IS",
        "name": "AxialMash",
        "vm": "2",
    },
    "(0054,1202)": {
        "vr": "IS",
        "name": "TransverseMash",
        "vm": "1",
    },
    "(0054,1203)": {
        "vr": "DS",
        "name": "DetectorElementSize",
        "vm": "2",
    },
    "(0054,1210)": {
        "vr": "DS",
        "name": "CoincidenceWindowWidth",
        "vm": "1",
    },
    "(0054,1220)": {
        "vr": "CS",
        "name": "SecondaryCountsType",
        "vm": "1-n",
    },
    "(0054,1300)": {
        "vr": "DS",
        "name": "FrameReferenceTime",
        "vm": "1",
    },
    "(0054,1310)": {
        "vr": "IS",
        "name": "PrimaryPromptsCountsAccumulated",
        "vm": "1",
    },
    "(0054,1311)": {
        "vr": "IS",
        "name": "SecondaryCountsAccumulated",
        "vm": "1-n",
    },
    "(0054,1320)": {
        "vr": "DS",
        "name": "SliceSensitivityFactor",
        "vm": "1",
    },
    "(0054,1321)": {
        "vr": "DS",
        "name": "DecayFactor",
        "vm": "1",
    },
    "(0054,1322)": {
        "vr": "DS",
        "name": "DoseCalibrationFactor",
        "vm": "1",
    },
    "(0054,1323)": {
        "vr": "DS",
        "name": "ScatterFractionFactor",
        "vm": "1",
    },
    "(0054,1324)": {
        "vr": "DS",
        "name": "DeadTimeFactor",
        "vm": "1",
    },
    "(0054,1330)": {
        "vr": "US",
        "name": "ImageIndex",
        "vm": "1",
    },
    "(0060,3000)": {
        "vr": "SQ",
        "name": "HistogramSequence",
        "vm": "1",
    },
    "(0060,3002)": {
        "vr": "US",
        "name": "HistogramNumberOfBins",
        "vm": "1",
    },
    "(0060,3004)": {
        "vr": "xs",
        "name": "HistogramFirstBinValue",
        "vm": "1",
    },
    "(0060,3006)": {
        "vr": "xs",
        "name": "HistogramLastBinValue",
        "vm": "1",
    },
    "(0060,3008)": {
        "vr": "US",
        "name": "HistogramBinWidth",
        "vm": "1",
    },
    "(0060,3010)": {
        "vr": "LO",
        "name": "HistogramExplanation",
        "vm": "1",
    },
    "(0060,3020)": {
        "vr": "UL",
        "name": "HistogramData",
        "vm": "1-n",
    },
    "(0062,0001)": {
        "vr": "CS",
        "name": "SegmentationType",
        "vm": "1",
    },
    "(0062,0002)": {
        "vr": "SQ",
        "name": "SegmentSequence",
        "vm": "1",
    },
    "(0062,0003)": {
        "vr": "SQ",
        "name": "SegmentedPropertyCategoryCodeSequence",
        "vm": "1",
    },
    "(0062,0004)": {
        "vr": "US",
        "name": "SegmentNumber",
        "vm": "1",
    },
    "(0062,0005)": {
        "vr": "LO",
        "name": "SegmentLabel",
        "vm": "1",
    },
    "(0062,0006)": {
        "vr": "ST",
        "name": "SegmentDescription",
        "vm": "1",
    },
    "(0062,0008)": {
        "vr": "CS",
        "name": "SegmentAlgorithmType",
        "vm": "1",
    },
    "(0062,0009)": {
        "vr": "LO",
        "name": "SegmentAlgorithmName",
        "vm": "1",
    },
    "(0062,000A)": {
        "vr": "SQ",
        "name": "SegmentIdentificationSequence",
        "vm": "1",
    },
    "(0062,000B)": {
        "vr": "US",
        "name": "ReferencedSegmentNumber",
        "vm": "1-n",
    },
    "(0062,000C)": {
        "vr": "US",
        "name": "RecommendedDisplayGrayscaleValue",
        "vm": "1",
    },
    "(0062,000D)": {
        "vr": "US",
        "name": "RecommendedDisplayCIELabValue",
        "vm": "3",
    },
    "(0062,000E)": {
        "vr": "US",
        "name": "MaximumFractionalValue",
        "vm": "1",
    },
    "(0062,000F)": {
        "vr": "SQ",
        "name": "SegmentedPropertyTypeCodeSequence",
        "vm": "1",
    },
    "(0062,0010)": {
        "vr": "CS",
        "name": "SegmentationFractionalType",
        "vm": "1",
    },
    "(0062,0011)": {
        "vr": "SQ",
        "name": "SegmentedPropertyTypeModifierCodeSequence",
        "vm": "1",
    },
    "(0062,0012)": {
        "vr": "SQ",
        "name": "UsedSegmentsSequence",
        "vm": "1",
    },
    "(0064,0002)": {
        "vr": "SQ",
        "name": "DeformableRegistrationSequence",
        "vm": "1",
    },
    "(0064,0003)": {
        "vr": "UI",
        "name": "SourceFrameOfReferenceUID",
        "vm": "1",
    },
    "(0064,0005)": {
        "vr": "SQ",
        "name": "DeformableRegistrationGridSequence",
        "vm": "1",
    },
    "(0064,0007)": {
        "vr": "UL",
        "name": "GridDimensions",
        "vm": "3",
    },
    "(0064,0008)": {
        "vr": "FD",
        "name": "GridResolution",
        "vm": "3",
    },
    "(0064,0009)": {
        "vr": "OF",
        "name": "VectorGridData",
        "vm": "1",
    },
    "(0064,000F)": {
        "vr": "SQ",
        "name": "PreDeformationMatrixRegistrationSequence",
        "vm": "1",
    },
    "(0064,0010)": {
        "vr": "SQ",
        "name": "PostDeformationMatrixRegistrationSequence",
        "vm": "1",
    },
    "(0066,0001)": {
        "vr": "UL",
        "name": "NumberOfSurfaces",
        "vm": "1",
    },
    "(0066,0002)": {
        "vr": "SQ",
        "name": "SurfaceSequence",
        "vm": "1",
    },
    "(0066,0003)": {
        "vr": "UL",
        "name": "SurfaceNumber",
        "vm": "1",
    },
    "(0066,0004)": {
        "vr": "LT",
        "name": "SurfaceComments",
        "vm": "1",
    },
    "(0066,0009)": {
        "vr": "CS",
        "name": "SurfaceProcessing",
        "vm": "1",
    },
    "(0066,000A)": {
        "vr": "FL",
        "name": "SurfaceProcessingRatio",
        "vm": "1",
    },
    "(0066,000B)": {
        "vr": "LO",
        "name": "SurfaceProcessingDescription",
        "vm": "1",
    },
    "(0066,000C)": {
        "vr": "FL",
        "name": "RecommendedPresentationOpacity",
        "vm": "1",
    },
    "(0066,000D)": {
        "vr": "CS",
        "name": "RecommendedPresentationType",
        "vm": "1",
    },
    "(0066,000E)": {
        "vr": "CS",
        "name": "FiniteVolume",
        "vm": "1",
    },
    "(0066,0010)": {
        "vr": "CS",
        "name": "Manifold",
        "vm": "1",
    },
    "(0066,0011)": {
        "vr": "SQ",
        "name": "SurfacePointsSequence",
        "vm": "1",
    },
    "(0066,0012)": {
        "vr": "SQ",
        "name": "SurfacePointsNormalsSequence",
        "vm": "1",
    },
    "(0066,0013)": {
        "vr": "SQ",
        "name": "SurfaceMeshPrimitivesSequence",
        "vm": "1",
    },
    "(0066,0015)": {
        "vr": "UL",
        "name": "NumberOfSurfacePoints",
        "vm": "1",
    },
    "(0066,0016)": {
        "vr": "OF",
        "name": "PointCoordinatesData",
        "vm": "1",
    },
    "(0066,0017)": {
        "vr": "FL",
        "name": "PointPositionAccuracy",
        "vm": "3",
    },
    "(0066,0018)": {
        "vr": "FL",
        "name": "MeanPointDistance",
        "vm": "1",
    },
    "(0066,0019)": {
        "vr": "FL",
        "name": "MaximumPointDistance",
        "vm": "1",
    },
    "(0066,001A)": {
        "vr": "FL",
        "name": "PointsBoundingBoxCoordinates",
        "vm": "6",
    },
    "(0066,001B)": {
        "vr": "FL",
        "name": "AxisOfRotation",
        "vm": "3",
    },
    "(0066,001C)": {
        "vr": "FL",
        "name": "CenterOfRotation",
        "vm": "3",
    },
    "(0066,001E)": {
        "vr": "UL",
        "name": "NumberOfVectors",
        "vm": "1",
    },
    "(0066,001F)": {
        "vr": "US",
        "name": "VectorDimensionality",
        "vm": "1",
    },
    "(0066,0020)": {
        "vr": "FL",
        "name": "VectorAccuracy",
        "vm": "1-n",
    },
    "(0066,0021)": {
        "vr": "OF",
        "name": "VectorCoordinateData",
        "vm": "1",
    },
    "(0066,0023)": {
        "vr": "OW",
        "name": "TrianglePointIndexList",
        "vm": "1",
    },
    "(0066,0024)": {
        "vr": "OW",
        "name": "EdgePointIndexList",
        "vm": "1",
    },
    "(0066,0025)": {
        "vr": "OW",
        "name": "VertexPointIndexList",
        "vm": "1",
    },
    "(0066,0026)": {
        "vr": "SQ",
        "name": "TriangleStripSequence",
        "vm": "1",
    },
    "(0066,0027)": {
        "vr": "SQ",
        "name": "TriangleFanSequence",
        "vm": "1",
    },
    "(0066,0028)": {
        "vr": "SQ",
        "name": "LineSequence",
        "vm": "1",
    },
    "(0066,0029)": {
        "vr": "OW",
        "name": "PrimitivePointIndexList",
        "vm": "1",
    },
    "(0066,002A)": {
        "vr": "UL",
        "name": "SurfaceCount",
        "vm": "1",
    },
    "(0066,002B)": {
        "vr": "SQ",
        "name": "ReferencedSurfaceSequence",
        "vm": "1",
    },
    "(0066,002C)": {
        "vr": "UL",
        "name": "ReferencedSurfaceNumber",
        "vm": "1",
    },
    "(0066,002D)": {
        "vr": "SQ",
        "name": "SegmentSurfaceGenerationAlgorithmIdentificationSequence",
        "vm": "1",
    },
    "(0066,002E)": {
        "vr": "SQ",
        "name": "SegmentSurfaceSourceInstanceSequence",
        "vm": "1",
    },
    "(0066,002F)": {
        "vr": "SQ",
        "name": "AlgorithmFamilyCodeSequence",
        "vm": "1",
    },
    "(0066,0030)": {
        "vr": "SQ",
        "name": "AlgorithmNameCodeSequence",
        "vm": "1",
    },
    "(0066,0031)": {
        "vr": "LO",
        "name": "AlgorithmVersion",
        "vm": "1",
    },
    "(0066,0032)": {
        "vr": "LT",
        "name": "AlgorithmParameters",
        "vm": "1",
    },
    "(0066,0034)": {
        "vr": "SQ",
        "name": "FacetSequence",
        "vm": "1",
    },
    "(0066,0035)": {
        "vr": "SQ",
        "name": "SurfaceProcessingAlgorithmIdentificationSequence",
        "vm": "1",
    },
    "(0066,0036)": {
        "vr": "LO",
        "name": "AlgorithmName",
        "vm": "1",
    },
    "(0066,0037)": {
        "vr": "FL",
        "name": "RecommendedPointRadius",
        "vm": "1",
    },
    "(0066,0038)": {
        "vr": "FL",
        "name": "RecommendedLineThickness",
        "vm": "1",
    },
    "(0066,0040)": {
        "vr": "UL",
        "name": "LongPrimitivePointIndexList",
        "vm": "1-n",
    },
    "(0066,0041)": {
        "vr": "UL",
        "name": "LongTrianglePointIndexList",
        "vm": "3-3n",
    },
    "(0066,0042)": {
        "vr": "UL",
        "name": "LongEdgePointIndexList",
        "vm": "2-2n",
    },
    "(0066,0043)": {
        "vr": "UL",
        "name": "LongVertexPointIndexList",
        "vm": "1-n",
    },
    "(0068,6210)": {
        "vr": "LO",
        "name": "ImplantSize",
        "vm": "1",
    },
    "(0068,6221)": {
        "vr": "LO",
        "name": "ImplantTemplateVersion",
        "vm": "1",
    },
    "(0068,6222)": {
        "vr": "SQ",
        "name": "ReplacedImplantTemplateSequence",
        "vm": "1",
    },
    "(0068,6223)": {
        "vr": "CS",
        "name": "ImplantType",
        "vm": "1",
    },
    "(0068,6224)": {
        "vr": "SQ",
        "name": "DerivationImplantTemplateSequence",
        "vm": "1",
    },
    "(0068,6225)": {
        "vr": "SQ",
        "name": "OriginalImplantTemplateSequence",
        "vm": "1",
    },
    "(0068,6226)": {
        "vr": "DT",
        "name": "EffectiveDateTime",
        "vm": "1",
    },
    "(0068,6230)": {
        "vr": "SQ",
        "name": "ImplantTargetAnatomySequence",
        "vm": "1",
    },
    "(0068,6260)": {
        "vr": "SQ",
        "name": "InformationFromManufacturerSequence",
        "vm": "1",
    },
    "(0068,6265)": {
        "vr": "SQ",
        "name": "NotificationFromManufacturerSequence",
        "vm": "1",
    },
    "(0068,6270)": {
        "vr": "DT",
        "name": "InformationIssueDateTime",
        "vm": "1",
    },
    "(0068,6280)": {
        "vr": "ST",
        "name": "InformationSummary",
        "vm": "1",
    },
    "(0068,62A0)": {
        "vr": "SQ",
        "name": "ImplantRegulatoryDisapprovalCodeSequence",
        "vm": "1",
    },
    "(0068,62A5)": {
        "vr": "FD",
        "name": "OverallTemplateSpatialTolerance",
        "vm": "1",
    },
    "(0068,62C0)": {
        "vr": "SQ",
        "name": "HPGLDocumentSequence",
        "vm": "1",
    },
    "(0068,62D0)": {
        "vr": "US",
        "name": "HPGLDocumentID",
        "vm": "1",
    },
    "(0068,62D5)": {
        "vr": "LO",
        "name": "HPGLDocumentLabel",
        "vm": "1",
    },
    "(0068,62E0)": {
        "vr": "SQ",
        "name": "ViewOrientationCodeSequence",
        "vm": "1",
    },
    "(0068,62F0)": {
        "vr": "FD",
        "name": "ViewOrientationModifier",
        "vm": "9",
    },
    "(0068,62F2)": {
        "vr": "FD",
        "name": "HPGLDocumentScaling",
        "vm": "1",
    },
    "(0068,6300)": {
        "vr": "OB",
        "name": "HPGLDocument",
        "vm": "1",
    },
    "(0068,6310)": {
        "vr": "US",
        "name": "HPGLContourPenNumber",
        "vm": "1",
    },
    "(0068,6320)": {
        "vr": "SQ",
        "name": "HPGLPenSequence",
        "vm": "1",
    },
    "(0068,6330)": {
        "vr": "US",
        "name": "HPGLPenNumber",
        "vm": "1",
    },
    "(0068,6340)": {
        "vr": "LO",
        "name": "HPGLPenLabel",
        "vm": "1",
    },
    "(0068,6345)": {
        "vr": "ST",
        "name": "HPGLPenDescription",
        "vm": "1",
    },
    "(0068,6346)": {
        "vr": "FD",
        "name": "RecommendedRotationPoint",
        "vm": "2",
    },
    "(0068,6347)": {
        "vr": "FD",
        "name": "BoundingRectangle",
        "vm": "4",
    },
    "(0068,6350)": {
        "vr": "US",
        "name": "ImplantTemplate3DModelSurfaceNumber",
        "vm": "1-n",
    },
    "(0068,6360)": {
        "vr": "SQ",
        "name": "SurfaceModelDescriptionSequence",
        "vm": "1",
    },
    "(0068,6380)": {
        "vr": "LO",
        "name": "SurfaceModelLabel",
        "vm": "1",
    },
    "(0068,6390)": {
        "vr": "FD",
        "name": "SurfaceModelScalingFactor",
        "vm": "1",
    },
    "(0068,63A0)": {
        "vr": "SQ",
        "name": "MaterialsCodeSequence",
        "vm": "1",
    },
    "(0068,63A4)": {
        "vr": "SQ",
        "name": "CoatingMaterialsCodeSequence",
        "vm": "1",
    },
    "(0068,63A8)": {
        "vr": "SQ",
        "name": "ImplantTypeCodeSequence",
        "vm": "1",
    },
    "(0068,63AC)": {
        "vr": "SQ",
        "name": "FixationMethodCodeSequence",
        "vm": "1",
    },
    "(0068,63B0)": {
        "vr": "SQ",
        "name": "MatingFeatureSetsSequence",
        "vm": "1",
    },
    "(0068,63C0)": {
        "vr": "US",
        "name": "MatingFeatureSetID",
        "vm": "1",
    },
    "(0068,63D0)": {
        "vr": "LO",
        "name": "MatingFeatureSetLabel",
        "vm": "1",
    },
    "(0068,63E0)": {
        "vr": "SQ",
        "name": "MatingFeatureSequence",
        "vm": "1",
    },
    "(0068,63F0)": {
        "vr": "US",
        "name": "MatingFeatureID",
        "vm": "1",
    },
    "(0068,6400)": {
        "vr": "SQ",
        "name": "MatingFeatureDegreeOfFreedomSequence",
        "vm": "1",
    },
    "(0068,6410)": {
        "vr": "US",
        "name": "DegreeOfFreedomID",
        "vm": "1",
    },
    "(0068,6420)": {
        "vr": "CS",
        "name": "DegreeOfFreedomType",
        "vm": "1",
    },
    "(0068,6430)": {
        "vr": "SQ",
        "name": "TwoDMatingFeatureCoordinatesSequence",
        "vm": "1",
    },
    "(0068,6440)": {
        "vr": "US",
        "name": "ReferencedHPGLDocumentID",
        "vm": "1",
    },
    "(0068,6450)": {
        "vr": "FD",
        "name": "TwoDMatingPoint",
        "vm": "2",
    },
    "(0068,6460)": {
        "vr": "FD",
        "name": "TwoDMatingAxes",
        "vm": "4",
    },
    "(0068,6470)": {
        "vr": "SQ",
        "name": "TwoDDegreeOfFreedomSequence",
        "vm": "1",
    },
    "(0068,6490)": {
        "vr": "FD",
        "name": "ThreeDDegreeOfFreedomAxis",
        "vm": "3",
    },
    "(0068,64A0)": {
        "vr": "FD",
        "name": "RangeOfFreedom",
        "vm": "2",
    },
    "(0068,64C0)": {
        "vr": "FD",
        "name": "ThreeDMatingPoint",
        "vm": "3",
    },
    "(0068,64D0)": {
        "vr": "FD",
        "name": "ThreeDMatingAxes",
        "vm": "9",
    },
    "(0068,64F0)": {
        "vr": "FD",
        "name": "TwoDDegreeOfFreedomAxis",
        "vm": "3",
    },
    "(0068,6500)": {
        "vr": "SQ",
        "name": "PlanningLandmarkPointSequence",
        "vm": "1",
    },
    "(0068,6510)": {
        "vr": "SQ",
        "name": "PlanningLandmarkLineSequence",
        "vm": "1",
    },
    "(0068,6520)": {
        "vr": "SQ",
        "name": "PlanningLandmarkPlaneSequence",
        "vm": "1",
    },
    "(0068,6530)": {
        "vr": "US",
        "name": "PlanningLandmarkID",
        "vm": "1",
    },
    "(0068,6540)": {
        "vr": "LO",
        "name": "PlanningLandmarkDescription",
        "vm": "1",
    },
    "(0068,6545)": {
        "vr": "SQ",
        "name": "PlanningLandmarkIdentificationCodeSequence",
        "vm": "1",
    },
    "(0068,6550)": {
        "vr": "SQ",
        "name": "TwoDPointCoordinatesSequence",
        "vm": "1",
    },
    "(0068,6560)": {
        "vr": "FD",
        "name": "TwoDPointCoordinates",
        "vm": "2",
    },
    "(0068,6590)": {
        "vr": "FD",
        "name": "ThreeDPointCoordinates",
        "vm": "3",
    },
    "(0068,65A0)": {
        "vr": "SQ",
        "name": "TwoDLineCoordinatesSequence",
        "vm": "1",
    },
    "(0068,65B0)": {
        "vr": "FD",
        "name": "TwoDLineCoordinates",
        "vm": "4",
    },
    "(0068,65D0)": {
        "vr": "FD",
        "name": "ThreeDLineCoordinates",
        "vm": "6",
    },
    "(0068,65E0)": {
        "vr": "SQ",
        "name": "TwoDPlaneCoordinatesSequence",
        "vm": "1",
    },
    "(0068,65F0)": {
        "vr": "FD",
        "name": "TwoDPlaneIntersection",
        "vm": "4",
    },
    "(0068,6610)": {
        "vr": "FD",
        "name": "ThreeDPlaneOrigin",
        "vm": "3",
    },
    "(0068,6620)": {
        "vr": "FD",
        "name": "ThreeDPlaneNormal",
        "vm": "3",
    },
    "(0070,0001)": {
        "vr": "SQ",
        "name": "GraphicAnnotationSequence",
        "vm": "1",
    },
    "(0070,0002)": {
        "vr": "CS",
        "name": "GraphicLayer",
        "vm": "1",
    },
    "(0070,0003)": {
        "vr": "CS",
        "name": "BoundingBoxAnnotationUnits",
        "vm": "1",
    },
    "(0070,0004)": {
        "vr": "CS",
        "name": "AnchorPointAnnotationUnits",
        "vm": "1",
    },
    "(0070,0005)": {
        "vr": "CS",
        "name": "GraphicAnnotationUnits",
        "vm": "1",
    },
    "(0070,0006)": {
        "vr": "ST",
        "name": "UnformattedTextValue",
        "vm": "1",
    },
    "(0070,0008)": {
        "vr": "SQ",
        "name": "TextObjectSequence",
        "vm": "1",
    },
    "(0070,0009)": {
        "vr": "SQ",
        "name": "GraphicObjectSequence",
        "vm": "1",
    },
    "(0070,0010)": {
        "vr": "FL",
        "name": "BoundingBoxTopLeftHandCorner",
        "vm": "2",
    },
    "(0070,0011)": {
        "vr": "FL",
        "name": "BoundingBoxBottomRightHandCorner",
        "vm": "2",
    },
    "(0070,0012)": {
        "vr": "CS",
        "name": "BoundingBoxTextHorizontalJustification",
        "vm": "1",
    },
    "(0070,0014)": {
        "vr": "FL",
        "name": "AnchorPoint",
        "vm": "2",
    },
    "(0070,0015)": {
        "vr": "CS",
        "name": "AnchorPointVisibility",
        "vm": "1",
    },
    "(0070,0020)": {
        "vr": "US",
        "name": "GraphicDimensions",
        "vm": "1",
    },
    "(0070,0021)": {
        "vr": "US",
        "name": "NumberOfGraphicPoints",
        "vm": "1",
    },
    "(0070,0022)": {
        "vr": "FL",
        "name": "GraphicData",
        "vm": "2-n",
    },
    "(0070,0023)": {
        "vr": "CS",
        "name": "GraphicType",
        "vm": "1",
    },
    "(0070,0024)": {
        "vr": "CS",
        "name": "GraphicFilled",
        "vm": "1",
    },
    "(0070,0041)": {
        "vr": "CS",
        "name": "ImageHorizontalFlip",
        "vm": "1",
    },
    "(0070,0042)": {
        "vr": "US",
        "name": "ImageRotation",
        "vm": "1",
    },
    "(0070,0052)": {
        "vr": "SL",
        "name": "DisplayedAreaTopLeftHandCorner",
        "vm": "2",
    },
    "(0070,0053)": {
        "vr": "SL",
        "name": "DisplayedAreaBottomRightHandCorner",
        "vm": "2",
    },
    "(0070,005A)": {
        "vr": "SQ",
        "name": "DisplayedAreaSelectionSequence",
        "vm": "1",
    },
    "(0070,0060)": {
        "vr": "SQ",
        "name": "GraphicLayerSequence",
        "vm": "1",
    },
    "(0070,0062)": {
        "vr": "IS",
        "name": "GraphicLayerOrder",
        "vm": "1",
    },
    "(0070,0066)": {
        "vr": "US",
        "name": "GraphicLayerRecommendedDisplayGrayscaleValue",
        "vm": "1",
    },
    "(0070,0068)": {
        "vr": "LO",
        "name": "GraphicLayerDescription",
        "vm": "1",
    },
    "(0070,0080)": {
        "vr": "CS",
        "name": "ContentLabel",
        "vm": "1",
    },
    "(0070,0081)": {
        "vr": "LO",
        "name": "ContentDescription",
        "vm": "1",
    },
    "(0070,0082)": {
        "vr": "DA",
        "name": "PresentationCreationDate",
        "vm": "1",
    },
    "(0070,0083)": {
        "vr": "TM",
        "name": "PresentationCreationTime",
        "vm": "1",
    },
    "(0070,0084)": {
        "vr": "PN",
        "name": "ContentCreatorName",
        "vm": "1",
    },
    "(0070,0086)": {
        "vr": "SQ",
        "name": "ContentCreatorIdentificationCodeSequence",
        "vm": "1",
    },
    "(0070,0087)": {
        "vr": "SQ",
        "name": "AlternateContentDescriptionSequence",
        "vm": "1",
    },
    "(0070,0100)": {
        "vr": "CS",
        "name": "PresentationSizeMode",
        "vm": "1",
    },
    "(0070,0101)": {
        "vr": "DS",
        "name": "PresentationPixelSpacing",
        "vm": "2",
    },
    "(0070,0102)": {
        "vr": "IS",
        "name": "PresentationPixelAspectRatio",
        "vm": "2",
    },
    "(0070,0103)": {
        "vr": "FL",
        "name": "PresentationPixelMagnificationRatio",
        "vm": "1",
    },
    "(0070,0207)": {
        "vr": "LO",
        "name": "GraphicGroupLabel",
        "vm": "1",
    },
    "(0070,0208)": {
        "vr": "ST",
        "name": "GraphicGroupDescription",
        "vm": "1",
    },
    "(0070,0209)": {
        "vr": "SQ",
        "name": "CompoundGraphicSequence",
        "vm": "1",
    },
    "(0070,0226)": {
        "vr": "UL",
        "name": "CompoundGraphicInstanceID",
        "vm": "1",
    },
    "(0070,0227)": {
        "vr": "LO",
        "name": "FontName",
        "vm": "1",
    },
    "(0070,0228)": {
        "vr": "CS",
        "name": "FontNameType",
        "vm": "1",
    },
    "(0070,0229)": {
        "vr": "LO",
        "name": "CSSFontName",
        "vm": "1",
    },
    "(0070,0230)": {
        "vr": "FD",
        "name": "RotationAngle",
        "vm": "1",
    },
    "(0070,0231)": {
        "vr": "SQ",
        "name": "TextStyleSequence",
        "vm": "1",
    },
    "(0070,0232)": {
        "vr": "SQ",
        "name": "LineStyleSequence",
        "vm": "1",
    },
    "(0070,0233)": {
        "vr": "SQ",
        "name": "FillStyleSequence",
        "vm": "1",
    },
    "(0070,0234)": {
        "vr": "SQ",
        "name": "GraphicGroupSequence",
        "vm": "1",
    },
    "(0070,0241)": {
        "vr": "US",
        "name": "TextColorCIELabValue",
        "vm": "3",
    },
    "(0070,0242)": {
        "vr": "CS",
        "name": "HorizontalAlignment",
        "vm": "1",
    },
    "(0070,0243)": {
        "vr": "CS",
        "name": "VerticalAlignment",
        "vm": "1",
    },
    "(0070,0244)": {
        "vr": "CS",
        "name": "ShadowStyle",
        "vm": "1",
    },
    "(0070,0245)": {
        "vr": "FL",
        "name": "ShadowOffsetX",
        "vm": "1",
    },
    "(0070,0246)": {
        "vr": "FL",
        "name": "ShadowOffsetY",
        "vm": "1",
    },
    "(0070,0247)": {
        "vr": "US",
        "name": "ShadowColorCIELabValue",
        "vm": "3",
    },
    "(0070,0248)": {
        "vr": "CS",
        "name": "Underlined",
        "vm": "1",
    },
    "(0070,0249)": {
        "vr": "CS",
        "name": "Bold",
        "vm": "1",
    },
    "(0070,0250)": {
        "vr": "CS",
        "name": "Italic",
        "vm": "1",
    },
    "(0070,0251)": {
        "vr": "US",
        "name": "PatternOnColorCIELabValue",
        "vm": "3",
    },
    "(0070,0252)": {
        "vr": "US",
        "name": "PatternOffColorCIELabValue",
        "vm": "3",
    },
    "(0070,0253)": {
        "vr": "FL",
        "name": "LineThickness",
        "vm": "1",
    },
    "(0070,0254)": {
        "vr": "CS",
        "name": "LineDashingStyle",
        "vm": "1",
    },
    "(0070,0255)": {
        "vr": "UL",
        "name": "LinePattern",
        "vm": "1",
    },
    "(0070,0256)": {
        "vr": "OB",
        "name": "FillPattern",
        "vm": "1",
    },
    "(0070,0257)": {
        "vr": "CS",
        "name": "FillMode",
        "vm": "1",
    },
    "(0070,0258)": {
        "vr": "FL",
        "name": "ShadowOpacity",
        "vm": "1",
    },
    "(0070,0261)": {
        "vr": "FL",
        "name": "GapLength",
        "vm": "1",
    },
    "(0070,0262)": {
        "vr": "FL",
        "name": "DiameterOfVisibility",
        "vm": "1",
    },
    "(0070,0273)": {
        "vr": "FL",
        "name": "RotationPoint",
        "vm": "2",
    },
    "(0070,0274)": {
        "vr": "CS",
        "name": "TickAlignment",
        "vm": "1",
    },
    "(0070,0278)": {
        "vr": "CS",
        "name": "ShowTickLabel",
        "vm": "1",
    },
    "(0070,0279)": {
        "vr": "CS",
        "name": "TickLabelAlignment",
        "vm": "1",
    },
    "(0070,0282)": {
        "vr": "CS",
        "name": "CompoundGraphicUnits",
        "vm": "1",
    },
    "(0070,0284)": {
        "vr": "FL",
        "name": "PatternOnOpacity",
        "vm": "1",
    },
    "(0070,0285)": {
        "vr": "FL",
        "name": "PatternOffOpacity",
        "vm": "1",
    },
    "(0070,0287)": {
        "vr": "SQ",
        "name": "MajorTicksSequence",
        "vm": "1",
    },
    "(0070,0288)": {
        "vr": "FL",
        "name": "TickPosition",
        "vm": "1",
    },
    "(0070,0289)": {
        "vr": "SH",
        "name": "TickLabel",
        "vm": "1",
    },
    "(0070,0294)": {
        "vr": "CS",
        "name": "CompoundGraphicType",
        "vm": "1",
    },
    "(0070,0295)": {
        "vr": "UL",
        "name": "GraphicGroupID",
        "vm": "1",
    },
    "(0070,0306)": {
        "vr": "CS",
        "name": "ShapeType",
        "vm": "1",
    },
    "(0070,0308)": {
        "vr": "SQ",
        "name": "RegistrationSequence",
        "vm": "1",
    },
    "(0070,0309)": {
        "vr": "SQ",
        "name": "MatrixRegistrationSequence",
        "vm": "1",
    },
    "(0070,030A)": {
        "vr": "SQ",
        "name": "MatrixSequence",
        "vm": "1",
    },
    "(0070,030C)": {
        "vr": "CS",
        "name": "FrameOfReferenceTransformationMatrixType",
        "vm": "1",
    },
    "(0070,030D)": {
        "vr": "SQ",
        "name": "RegistrationTypeCodeSequence",
        "vm": "1",
    },
    "(0070,030F)": {
        "vr": "ST",
        "name": "FiducialDescription",
        "vm": "1",
    },
    "(0070,0310)": {
        "vr": "SH",
        "name": "FiducialIdentifier",
        "vm": "1",
    },
    "(0070,0311)": {
        "vr": "SQ",
        "name": "FiducialIdentifierCodeSequence",
        "vm": "1",
    },
    "(0070,0312)": {
        "vr": "FD",
        "name": "ContourUncertaintyRadius",
        "vm": "1",
    },
    "(0070,0314)": {
        "vr": "SQ",
        "name": "UsedFiducialsSequence",
        "vm": "1",
    },
    "(0070,0318)": {
        "vr": "SQ",
        "name": "GraphicCoordinatesDataSequence",
        "vm": "1",
    },
    "(0070,031A)": {
        "vr": "UI",
        "name": "FiducialUID",
        "vm": "1",
    },
    "(0070,031C)": {
        "vr": "SQ",
        "name": "FiducialSetSequence",
        "vm": "1",
    },
    "(0070,031E)": {
        "vr": "SQ",
        "name": "FiducialSequence",
        "vm": "1",
    },
    "(0070,0401)": {
        "vr": "US",
        "name": "GraphicLayerRecommendedDisplayCIELabValue",
        "vm": "3",
    },
    "(0070,0402)": {
        "vr": "SQ",
        "name": "BlendingSequence",
        "vm": "1",
    },
    "(0070,0403)": {
        "vr": "FL",
        "name": "RelativeOpacity",
        "vm": "1",
    },
    "(0070,0404)": {
        "vr": "SQ",
        "name": "ReferencedSpatialRegistrationSequence",
        "vm": "1",
    },
    "(0070,0405)": {
        "vr": "CS",
        "name": "BlendingPosition",
        "vm": "1",
    },
    "(0072,0002)": {
        "vr": "SH",
        "name": "HangingProtocolName",
        "vm": "1",
    },
    "(0072,0004)": {
        "vr": "LO",
        "name": "HangingProtocolDescription",
        "vm": "1",
    },
    "(0072,0006)": {
        "vr": "CS",
        "name": "HangingProtocolLevel",
        "vm": "1",
    },
    "(0072,0008)": {
        "vr": "LO",
        "name": "HangingProtocolCreator",
        "vm": "1",
    },
    "(0072,000A)": {
        "vr": "DT",
        "name": "HangingProtocolCreationDateTime",
        "vm": "1",
    },
    "(0072,000C)": {
        "vr": "SQ",
        "name": "HangingProtocolDefinitionSequence",
        "vm": "1",
    },
    "(0072,000E)": {
        "vr": "SQ",
        "name": "HangingProtocolUserIdentificationCodeSequence",
        "vm": "1",
    },
    "(0072,0010)": {
        "vr": "LO",
        "name": "HangingProtocolUserGroupName",
        "vm": "1",
    },
    "(0072,0012)": {
        "vr": "SQ",
        "name": "SourceHangingProtocolSequence",
        "vm": "1",
    },
    "(0072,0014)": {
        "vr": "US",
        "name": "NumberOfPriorsReferenced",
        "vm": "1",
    },
    "(0072,0020)": {
        "vr": "SQ",
        "name": "ImageSetsSequence",
        "vm": "1",
    },
    "(0072,0022)": {
        "vr": "SQ",
        "name": "ImageSetSelectorSequence",
        "vm": "1",
    },
    "(0072,0024)": {
        "vr": "CS",
        "name": "ImageSetSelectorUsageFlag",
        "vm": "1",
    },
    "(0072,0026)": {
        "vr": "AT",
        "name": "SelectorAttribute",
        "vm": "1",
    },
    "(0072,0028)": {
        "vr": "US",
        "name": "SelectorValueNumber",
        "vm": "1",
    },
    "(0072,0030)": {
        "vr": "SQ",
        "name": "TimeBasedImageSetsSequence",
        "vm": "1",
    },
    "(0072,0032)": {
        "vr": "US",
        "name": "ImageSetNumber",
        "vm": "1",
    },
    "(0072,0034)": {
        "vr": "CS",
        "name": "ImageSetSelectorCategory",
        "vm": "1",
    },
    "(0072,0038)": {
        "vr": "US",
        "name": "RelativeTime",
        "vm": "2",
    },
    "(0072,003A)": {
        "vr": "CS",
        "name": "RelativeTimeUnits",
        "vm": "1",
    },
    "(0072,003C)": {
        "vr": "SS",
        "name": "AbstractPriorValue",
        "vm": "2",
    },
    "(0072,003E)": {
        "vr": "SQ",
        "name": "AbstractPriorCodeSequence",
        "vm": "1",
    },
    "(0072,0040)": {
        "vr": "LO",
        "name": "ImageSetLabel",
        "vm": "1",
    },
    "(0072,0050)": {
        "vr": "CS",
        "name": "SelectorAttributeVR",
        "vm": "1",
    },
    "(0072,0052)": {
        "vr": "AT",
        "name": "SelectorSequencePointer",
        "vm": "1-n",
    },
    "(0072,0054)": {
        "vr": "LO",
        "name": "SelectorSequencePointerPrivateCreator",
        "vm": "1-n",
    },
    "(0072,0056)": {
        "vr": "LO",
        "name": "SelectorAttributePrivateCreator",
        "vm": "1",
    },
    "(0072,0060)": {
        "vr": "AT",
        "name": "SelectorATValue",
        "vm": "1-n",
    },
    "(0072,0062)": {
        "vr": "CS",
        "name": "SelectorCSValue",
        "vm": "1-n",
    },
    "(0072,0064)": {
        "vr": "IS",
        "name": "SelectorISValue",
        "vm": "1-n",
    },
    "(0072,0066)": {
        "vr": "LO",
        "name": "SelectorLOValue",
        "vm": "1-n",
    },
    "(0072,0068)": {
        "vr": "LT",
        "name": "SelectorLTValue",
        "vm": "1",
    },
    "(0072,006A)": {
        "vr": "PN",
        "name": "SelectorPNValue",
        "vm": "1-n",
    },
    "(0072,006C)": {
        "vr": "SH",
        "name": "SelectorSHValue",
        "vm": "1-n",
    },
    "(0072,006E)": {
        "vr": "ST",
        "name": "SelectorSTValue",
        "vm": "1",
    },
    "(0072,0070)": {
        "vr": "UT",
        "name": "SelectorUTValue",
        "vm": "1",
    },
    "(0072,0072)": {
        "vr": "DS",
        "name": "SelectorDSValue",
        "vm": "1-n",
    },
    "(0072,0074)": {
        "vr": "FD",
        "name": "SelectorFDValue",
        "vm": "1-n",
    },
    "(0072,0076)": {
        "vr": "FL",
        "name": "SelectorFLValue",
        "vm": "1-n",
    },
    "(0072,0078)": {
        "vr": "UL",
        "name": "SelectorULValue",
        "vm": "1-n",
    },
    "(0072,007A)": {
        "vr": "US",
        "name": "SelectorUSValue",
        "vm": "1-n",
    },
    "(0072,007C)": {
        "vr": "SL",
        "name": "SelectorSLValue",
        "vm": "1-n",
    },
    "(0072,007E)": {
        "vr": "SS",
        "name": "SelectorSSValue",
        "vm": "1-n",
    },
    "(0072,007F)": {
        "vr": "UI",
        "name": "SelectorUIValue",
        "vm": "1-n",
    },
    "(0072,0080)": {
        "vr": "SQ",
        "name": "SelectorCodeSequenceValue",
        "vm": "1",
    },
    "(0072,0100)": {
        "vr": "US",
        "name": "NumberOfScreens",
        "vm": "1",
    },
    "(0072,0102)": {
        "vr": "SQ",
        "name": "NominalScreenDefinitionSequence",
        "vm": "1",
    },
    "(0072,0104)": {
        "vr": "US",
        "name": "NumberOfVerticalPixels",
        "vm": "1",
    },
    "(0072,0106)": {
        "vr": "US",
        "name": "NumberOfHorizontalPixels",
        "vm": "1",
    },
    "(0072,0108)": {
        "vr": "FD",
        "name": "DisplayEnvironmentSpatialPosition",
        "vm": "4",
    },
    "(0072,010A)": {
        "vr": "US",
        "name": "ScreenMinimumGrayscaleBitDepth",
        "vm": "1",
    },
    "(0072,010C)": {
        "vr": "US",
        "name": "ScreenMinimumColorBitDepth",
        "vm": "1",
    },
    "(0072,010E)": {
        "vr": "US",
        "name": "ApplicationMaximumRepaintTime",
        "vm": "1",
    },
    "(0072,0200)": {
        "vr": "SQ",
        "name": "DisplaySetsSequence",
        "vm": "1",
    },
    "(0072,0202)": {
        "vr": "US",
        "name": "DisplaySetNumber",
        "vm": "1",
    },
    "(0072,0203)": {
        "vr": "LO",
        "name": "DisplaySetLabel",
        "vm": "1",
    },
    "(0072,0204)": {
        "vr": "US",
        "name": "DisplaySetPresentationGroup",
        "vm": "1",
    },
    "(0072,0206)": {
        "vr": "LO",
        "name": "DisplaySetPresentationGroupDescription",
        "vm": "1",
    },
    "(0072,0208)": {
        "vr": "CS",
        "name": "PartialDataDisplayHandling",
        "vm": "1",
    },
    "(0072,0210)": {
        "vr": "SQ",
        "name": "SynchronizedScrollingSequence",
        "vm": "1",
    },
    "(0072,0212)": {
        "vr": "US",
        "name": "DisplaySetScrollingGroup",
        "vm": "2-n",
    },
    "(0072,0214)": {
        "vr": "SQ",
        "name": "NavigationIndicatorSequence",
        "vm": "1",
    },
    "(0072,0216)": {
        "vr": "US",
        "name": "NavigationDisplaySet",
        "vm": "1",
    },
    "(0072,0218)": {
        "vr": "US",
        "name": "ReferenceDisplaySets",
        "vm": "1-n",
    },
    "(0072,0300)": {
        "vr": "SQ",
        "name": "ImageBoxesSequence",
        "vm": "1",
    },
    "(0072,0302)": {
        "vr": "US",
        "name": "ImageBoxNumber",
        "vm": "1",
    },
    "(0072,0304)": {
        "vr": "CS",
        "name": "ImageBoxLayoutType",
        "vm": "1",
    },
    "(0072,0306)": {
        "vr": "US",
        "name": "ImageBoxTileHorizontalDimension",
        "vm": "1",
    },
    "(0072,0308)": {
        "vr": "US",
        "name": "ImageBoxTileVerticalDimension",
        "vm": "1",
    },
    "(0072,0310)": {
        "vr": "CS",
        "name": "ImageBoxScrollDirection",
        "vm": "1",
    },
    "(0072,0312)": {
        "vr": "CS",
        "name": "ImageBoxSmallScrollType",
        "vm": "1",
    },
    "(0072,0314)": {
        "vr": "US",
        "name": "ImageBoxSmallScrollAmount",
        "vm": "1",
    },
    "(0072,0316)": {
        "vr": "CS",
        "name": "ImageBoxLargeScrollType",
        "vm": "1",
    },
    "(0072,0318)": {
        "vr": "US",
        "name": "ImageBoxLargeScrollAmount",
        "vm": "1",
    },
    "(0072,0320)": {
        "vr": "US",
        "name": "ImageBoxOverlapPriority",
        "vm": "1",
    },
    "(0072,0330)": {
        "vr": "FD",
        "name": "CineRelativeToRealTime",
        "vm": "1",
    },
    "(0072,0400)": {
        "vr": "SQ",
        "name": "FilterOperationsSequence",
        "vm": "1",
    },
    "(0072,0402)": {
        "vr": "CS",
        "name": "FilterByCategory",
        "vm": "1",
    },
    "(0072,0404)": {
        "vr": "CS",
        "name": "FilterByAttributePresence",
        "vm": "1",
    },
    "(0072,0406)": {
        "vr": "CS",
        "name": "FilterByOperator",
        "vm": "1",
    },
    "(0072,0420)": {
        "vr": "US",
        "name": "StructuredDisplayBackgroundCIELabValue",
        "vm": "3",
    },
    "(0072,0421)": {
        "vr": "US",
        "name": "EmptyImageBoxCIELabValue",
        "vm": "3",
    },
    "(0072,0422)": {
        "vr": "SQ",
        "name": "StructuredDisplayImageBoxSequence",
        "vm": "1",
    },
    "(0072,0424)": {
        "vr": "SQ",
        "name": "StructuredDisplayTextBoxSequence",
        "vm": "1",
    },
    "(0072,0427)": {
        "vr": "SQ",
        "name": "ReferencedFirstFrameSequence",
        "vm": "1",
    },
    "(0072,0430)": {
        "vr": "SQ",
        "name": "ImageBoxSynchronizationSequence",
        "vm": "1",
    },
    "(0072,0432)": {
        "vr": "US",
        "name": "SynchronizedImageBoxList",
        "vm": "2-n",
    },
    "(0072,0434)": {
        "vr": "CS",
        "name": "TypeOfSynchronization",
        "vm": "1",
    },
    "(0072,0500)": {
        "vr": "CS",
        "name": "BlendingOperationType",
        "vm": "1",
    },
    "(0072,0510)": {
        "vr": "CS",
        "name": "ReformattingOperationType",
        "vm": "1",
    },
    "(0072,0512)": {
        "vr": "FD",
        "name": "ReformattingThickness",
        "vm": "1",
    },
    "(0072,0514)": {
        "vr": "FD",
        "name": "ReformattingInterval",
        "vm": "1",
    },
    "(0072,0516)": {
        "vr": "CS",
        "name": "ReformattingOperationInitialViewDirection",
        "vm": "1",
    },
    "(0072,0520)": {
        "vr": "CS",
        "name": "ThreeDRenderingType",
        "vm": "1-n",
    },
    "(0072,0600)": {
        "vr": "SQ",
        "name": "SortingOperationsSequence",
        "vm": "1",
    },
    "(0072,0602)": {
        "vr": "CS",
        "name": "SortByCategory",
        "vm": "1",
    },
    "(0072,0604)": {
        "vr": "CS",
        "name": "SortingDirection",
        "vm": "1",
    },
    "(0072,0700)": {
        "vr": "CS",
        "name": "DisplaySetPatientOrientation",
        "vm": "2",
    },
    "(0072,0702)": {
        "vr": "CS",
        "name": "VOIType",
        "vm": "1",
    },
    "(0072,0704)": {
        "vr": "CS",
        "name": "PseudoColorType",
        "vm": "1",
    },
    "(0072,0705)": {
        "vr": "SQ",
        "name": "PseudoColorPaletteInstanceReferenceSequence",
        "vm": "1",
    },
    "(0072,0706)": {
        "vr": "CS",
        "name": "ShowGrayscaleInverted",
        "vm": "1",
    },
    "(0072,0710)": {
        "vr": "CS",
        "name": "ShowImageTrueSizeFlag",
        "vm": "1",
    },
    "(0072,0712)": {
        "vr": "CS",
        "name": "ShowGraphicAnnotationFlag",
        "vm": "1",
    },
    "(0072,0714)": {
        "vr": "CS",
        "name": "ShowPatientDemographicsFlag",
        "vm": "1",
    },
    "(0072,0716)": {
        "vr": "CS",
        "name": "ShowAcquisitionTechniquesFlag",
        "vm": "1",
    },
    "(0072,0717)": {
        "vr": "CS",
        "name": "DisplaySetHorizontalJustification",
        "vm": "1",
    },
    "(0072,0718)": {
        "vr": "CS",
        "name": "DisplaySetVerticalJustification",
        "vm": "1",
    },
    "(0074,0120)": {
        "vr": "FD",
        "name": "ContinuationStartMeterset",
        "vm": "1",
    },
    "(0074,0121)": {
        "vr": "FD",
        "name": "ContinuationEndMeterset",
        "vm": "1",
    },
    "(0074,1000)": {
        "vr": "CS",
        "name": "ProcedureStepState",
        "vm": "1",
    },
    "(0074,1002)": {
        "vr": "SQ",
        "name": "ProcedureStepProgressInformationSequence",
        "vm": "1",
    },
    "(0074,1004)": {
        "vr": "DS",
        "name": "ProcedureStepProgress",
        "vm": "1",
    },
    "(0074,1006)": {
        "vr": "ST",
        "name": "ProcedureStepProgressDescription",
        "vm": "1",
    },
    "(0074,1008)": {
        "vr": "SQ",
        "name": "ProcedureStepCommunicationsURISequence",
        "vm": "1",
    },
    "(0074,100A)": {
        "vr": "UR",
        "name": "ContactURI",
        "vm": "1",
    },
    "(0074,100C)": {
        "vr": "LO",
        "name": "ContactDisplayName",
        "vm": "1",
    },
    "(0074,100E)": {
        "vr": "SQ",
        "name": "ProcedureStepDiscontinuationReasonCodeSequence",
        "vm": "1",
    },
    "(0074,1020)": {
        "vr": "SQ",
        "name": "BeamTaskSequence",
        "vm": "1",
    },
    "(0074,1022)": {
        "vr": "CS",
        "name": "BeamTaskType",
        "vm": "1",
    },
    "(0074,1025)": {
        "vr": "CS",
        "name": "AutosequenceFlag",
        "vm": "1",
    },
    "(0074,1026)": {
        "vr": "FD",
        "name": "TableTopVerticalAdjustedPosition",
        "vm": "1",
    },
    "(0074,1027)": {
        "vr": "FD",
        "name": "TableTopLongitudinalAdjustedPosition",
        "vm": "1",
    },
    "(0074,1028)": {
        "vr": "FD",
        "name": "TableTopLateralAdjustedPosition",
        "vm": "1",
    },
    "(0074,102A)": {
        "vr": "FD",
        "name": "PatientSupportAdjustedAngle",
        "vm": "1",
    },
    "(0074,102B)": {
        "vr": "FD",
        "name": "TableTopEccentricAdjustedAngle",
        "vm": "1",
    },
    "(0074,102C)": {
        "vr": "FD",
        "name": "TableTopPitchAdjustedAngle",
        "vm": "1",
    },
    "(0074,102D)": {
        "vr": "FD",
        "name": "TableTopRollAdjustedAngle",
        "vm": "1",
    },
    "(0074,1030)": {
        "vr": "SQ",
        "name": "DeliveryVerificationImageSequence",
        "vm": "1",
    },
    "(0074,1032)": {
        "vr": "CS",
        "name": "VerificationImageTiming",
        "vm": "1",
    },
    "(0074,1034)": {
        "vr": "CS",
        "name": "DoubleExposureFlag",
        "vm": "1",
    },
    "(0074,1036)": {
        "vr": "CS",
        "name": "DoubleExposureOrdering",
        "vm": "1",
    },
    "(0074,1040)": {
        "vr": "SQ",
        "name": "RelatedReferenceRTImageSequence",
        "vm": "1",
    },
    "(0074,1042)": {
        "vr": "SQ",
        "name": "GeneralMachineVerificationSequence",
        "vm": "1",
    },
    "(0074,1044)": {
        "vr": "SQ",
        "name": "ConventionalMachineVerificationSequence",
        "vm": "1",
    },
    "(0074,1046)": {
        "vr": "SQ",
        "name": "IonMachineVerificationSequence",
        "vm": "1",
    },
    "(0074,1048)": {
        "vr": "SQ",
        "name": "FailedAttributesSequence",
        "vm": "1",
    },
    "(0074,104A)": {
        "vr": "SQ",
        "name": "OverriddenAttributesSequence",
        "vm": "1",
    },
    "(0074,104C)": {
        "vr": "SQ",
        "name": "ConventionalControlPointVerificationSequence",
        "vm": "1",
    },
    "(0074,104E)": {
        "vr": "SQ",
        "name": "IonControlPointVerificationSequence",
        "vm": "1",
    },
    "(0074,1050)": {
        "vr": "SQ",
        "name": "AttributeOccurrenceSequence",
        "vm": "1",
    },
    "(0074,1052)": {
        "vr": "AT",
        "name": "AttributeOccurrencePointer",
        "vm": "1",
    },
    "(0074,1054)": {
        "vr": "UL",
        "name": "AttributeItemSelector",
        "vm": "1",
    },
    "(0074,1056)": {
        "vr": "LO",
        "name": "AttributeOccurrencePrivateCreator",
        "vm": "1",
    },
    "(0074,1057)": {
        "vr": "IS",
        "name": "SelectorSequencePointerItems",
        "vm": "1-n",
    },
    "(0074,1200)": {
        "vr": "CS",
        "name": "ScheduledProcedureStepPriority",
        "vm": "1",
    },
    "(0074,1202)": {
        "vr": "LO",
        "name": "WorklistLabel",
        "vm": "1",
    },
    "(0074,1204)": {
        "vr": "LO",
        "name": "ProcedureStepLabel",
        "vm": "1",
    },
    "(0074,1210)": {
        "vr": "SQ",
        "name": "ScheduledProcessingParametersSequence",
        "vm": "1",
    },
    "(0074,1212)": {
        "vr": "SQ",
        "name": "PerformedProcessingParametersSequence",
        "vm": "1",
    },
    "(0074,1216)": {
        "vr": "SQ",
        "name": "UnifiedProcedureStepPerformedProcedureSequence",
        "vm": "1",
    },
    "(0074,1224)": {
        "vr": "SQ",
        "name": "ReplacedProcedureStepSequence",
        "vm": "1",
    },
    "(0074,1230)": {
        "vr": "LO",
        "name": "DeletionLock",
        "vm": "1",
    },
    "(0074,1234)": {
        "vr": "AE",
        "name": "ReceivingAE",
        "vm": "1",
    },
    "(0074,1236)": {
        "vr": "AE",
        "name": "RequestingAE",
        "vm": "1",
    },
    "(0074,1238)": {
        "vr": "LT",
        "name": "ReasonForCancellation",
        "vm": "1",
    },
    "(0074,1242)": {
        "vr": "CS",
        "name": "SCPStatus",
        "vm": "1",
    },
    "(0074,1244)": {
        "vr": "CS",
        "name": "SubscriptionListStatus",
        "vm": "1",
    },
    "(0074,1246)": {
        "vr": "CS",
        "name": "UnifiedProcedureStepListStatus",
        "vm": "1",
    },
    "(0074,1324)": {
        "vr": "UL",
        "name": "BeamOrderIndex",
        "vm": "1",
    },
    "(0074,1338)": {
        "vr": "FD",
        "name": "DoubleExposureMeterset",
        "vm": "1",
    },
    "(0074,133A)": {
        "vr": "FD",
        "name": "DoubleExposureFieldDelta",
        "vm": "4",
    },
    "(0076,0001)": {
        "vr": "LO",
        "name": "ImplantAssemblyTemplateName",
        "vm": "1",
    },
    "(0076,0003)": {
        "vr": "LO",
        "name": "ImplantAssemblyTemplateIssuer",
        "vm": "1",
    },
    "(0076,0006)": {
        "vr": "LO",
        "name": "ImplantAssemblyTemplateVersion",
        "vm": "1",
    },
    "(0076,0008)": {
        "vr": "SQ",
        "name": "ReplacedImplantAssemblyTemplateSequence",
        "vm": "1",
    },
    "(0076,000A)": {
        "vr": "CS",
        "name": "ImplantAssemblyTemplateType",
        "vm": "1",
    },
    "(0076,000C)": {
        "vr": "SQ",
        "name": "OriginalImplantAssemblyTemplateSequence",
        "vm": "1",
    },
    "(0076,000E)": {
        "vr": "SQ",
        "name": "DerivationImplantAssemblyTemplateSequence",
        "vm": "1",
    },
    "(0076,0010)": {
        "vr": "SQ",
        "name": "ImplantAssemblyTemplateTargetAnatomySequence",
        "vm": "1",
    },
    "(0076,0020)": {
        "vr": "SQ",
        "name": "ProcedureTypeCodeSequence",
        "vm": "1",
    },
    "(0076,0030)": {
        "vr": "LO",
        "name": "SurgicalTechnique",
        "vm": "1",
    },
    "(0076,0032)": {
        "vr": "SQ",
        "name": "ComponentTypesSequence",
        "vm": "1",
    },
    "(0076,0034)": {
        "vr": "CS",
        "name": "ComponentTypeCodeSequence",
        "vm": "1",
    },
    "(0076,0036)": {
        "vr": "CS",
        "name": "ExclusiveComponentType",
        "vm": "1",
    },
    "(0076,0038)": {
        "vr": "CS",
        "name": "MandatoryComponentType",
        "vm": "1",
    },
    "(0076,0040)": {
        "vr": "SQ",
        "name": "ComponentSequence",
        "vm": "1",
    },
    "(0076,0055)": {
        "vr": "US",
        "name": "ComponentID",
        "vm": "1",
    },
    "(0076,0060)": {
        "vr": "SQ",
        "name": "ComponentAssemblySequence",
        "vm": "1",
    },
    "(0076,0070)": {
        "vr": "US",
        "name": "Component1ReferencedID",
        "vm": "1",
    },
    "(0076,0080)": {
        "vr": "US",
        "name": "Component1ReferencedMatingFeatureSetID",
        "vm": "1",
    },
    "(0076,0090)": {
        "vr": "US",
        "name": "Component1ReferencedMatingFeatureID",
        "vm": "1",
    },
    "(0076,00A0)": {
        "vr": "US",
        "name": "Component2ReferencedID",
        "vm": "1",
    },
    "(0076,00B0)": {
        "vr": "US",
        "name": "Component2ReferencedMatingFeatureSetID",
        "vm": "1",
    },
    "(0076,00C0)": {
        "vr": "US",
        "name": "Component2ReferencedMatingFeatureID",
        "vm": "1",
    },
    "(0078,0001)": {
        "vr": "LO",
        "name": "ImplantTemplateGroupName",
        "vm": "1",
    },
    "(0078,0010)": {
        "vr": "ST",
        "name": "ImplantTemplateGroupDescription",
        "vm": "1",
    },
    "(0078,0020)": {
        "vr": "LO",
        "name": "ImplantTemplateGroupIssuer",
        "vm": "1",
    },
    "(0078,0024)": {
        "vr": "LO",
        "name": "ImplantTemplateGroupVersion",
        "vm": "1",
    },
    "(0078,0026)": {
        "vr": "SQ",
        "name": "ReplacedImplantTemplateGroupSequence",
        "vm": "1",
    },
    "(0078,0028)": {
        "vr": "SQ",
        "name": "ImplantTemplateGroupTargetAnatomySequence",
        "vm": "1",
    },
    "(0078,002A)": {
        "vr": "SQ",
        "name": "ImplantTemplateGroupMembersSequence",
        "vm": "1",
    },
    "(0078,002E)": {
        "vr": "US",
        "name": "ImplantTemplateGroupMemberID",
        "vm": "1",
    },
    "(0078,0050)": {
        "vr": "FD",
        "name": "ThreeDImplantTemplateGroupMemberMatchingPoint",
        "vm": "3",
    },
    "(0078,0060)": {
        "vr": "FD",
        "name": "ThreeDImplantTemplateGroupMemberMatchingAxes",
        "vm": "9",
    },
    "(0078,0070)": {
        "vr": "SQ",
        "name": "ImplantTemplateGroupMemberMatching2DCoordinatesSequence",
        "vm": "1",
    },
    "(0078,0090)": {
        "vr": "FD",
        "name": "TwoDImplantTemplateGroupMemberMatchingPoint",
        "vm": "2",
    },
    "(0078,00A0)": {
        "vr": "FD",
        "name": "TwoDImplantTemplateGroupMemberMatchingAxes",
        "vm": "4",
    },
    "(0078,00B0)": {
        "vr": "SQ",
        "name": "ImplantTemplateGroupVariationDimensionSequence",
        "vm": "1",
    },
    "(0078,00B2)": {
        "vr": "LO",
        "name": "ImplantTemplateGroupVariationDimensionName",
        "vm": "1",
    },
    "(0078,00B4)": {
        "vr": "SQ",
        "name": "ImplantTemplateGroupVariationDimensionRankSequence",
        "vm": "1",
    },
    "(0078,00B6)": {
        "vr": "US",
        "name": "ReferencedImplantTemplateGroupMemberID",
        "vm": "1",
    },
    "(0078,00B8)": {
        "vr": "US",
        "name": "ImplantTemplateGroupVariationDimensionRank",
        "vm": "1",
    },
    "(0080,0001)": {
        "vr": "SQ",
        "name": "SurfaceScanAcquisitionTypeCodeSequence",
        "vm": "1",
    },
    "(0080,0002)": {
        "vr": "SQ",
        "name": "SurfaceScanModeCodeSequence",
        "vm": "1",
    },
    "(0080,0003)": {
        "vr": "SQ",
        "name": "RegistrationMethodCodeSequence",
        "vm": "1",
    },
    "(0080,0004)": {
        "vr": "FD",
        "name": "ShotDurationTime",
        "vm": "1",
    },
    "(0080,0005)": {
        "vr": "FD",
        "name": "ShotOffsetTime",
        "vm": "1",
    },
    "(0080,0006)": {
        "vr": "US",
        "name": "SurfacePointPresentationValueData",
        "vm": "1-n",
    },
    "(0080,0007)": {
        "vr": "US",
        "name": "SurfacePointColorCIELabValueData",
        "vm": "3-3n",
    },
    "(0080,0008)": {
        "vr": "SQ",
        "name": "UVMappingSequence",
        "vm": "1",
    },
    "(0080,0009)": {
        "vr": "SH",
        "name": "TextureLabel",
        "vm": "1",
    },
    "(0080,0010)": {
        "vr": "OF",
        "name": "UValueData",
        "vm": "1-n",
    },
    "(0080,0011)": {
        "vr": "OF",
        "name": "VValueData",
        "vm": "1-n",
    },
    "(0080,0012)": {
        "vr": "SQ",
        "name": "ReferencedTextureSequence",
        "vm": "1",
    },
    "(0080,0013)": {
        "vr": "SQ",
        "name": "ReferencedSurfaceDataSequence",
        "vm": "1",
    },
    "(0088,0130)": {
        "vr": "SH",
        "name": "StorageMediaFileSetID",
        "vm": "1",
    },
    "(0088,0140)": {
        "vr": "UI",
        "name": "StorageMediaFileSetUID",
        "vm": "1",
    },
    "(0088,0200)": {
        "vr": "SQ",
        "name": "IconImageSequence",
        "vm": "1",
    },
    "(0100,0410)": {
        "vr": "CS",
        "name": "SOPInstanceStatus",
        "vm": "1",
    },
    "(0100,0420)": {
        "vr": "DT",
        "name": "SOPAuthorizationDateTime",
        "vm": "1",
    },
    "(0100,0424)": {
        "vr": "LT",
        "name": "SOPAuthorizationComment",
        "vm": "1",
    },
    "(0100,0426)": {
        "vr": "LO",
        "name": "AuthorizationEquipmentCertificationNumber",
        "vm": "1",
    },
    "(0400,0005)": {
        "vr": "US",
        "name": "MACIDNumber",
        "vm": "1",
    },
    "(0400,0010)": {
        "vr": "UI",
        "name": "MACCalculationTransferSyntaxUID",
        "vm": "1",
    },
    "(0400,0015)": {
        "vr": "CS",
        "name": "MACAlgorithm",
        "vm": "1",
    },
    "(0400,0020)": {
        "vr": "AT",
        "name": "DataElementsSigned",
        "vm": "1-n",
    },
    "(0400,0100)": {
        "vr": "UI",
        "name": "DigitalSignatureUID",
        "vm": "1",
    },
    "(0400,0105)": {
        "vr": "DT",
        "name": "DigitalSignatureDateTime",
        "vm": "1",
    },
    "(0400,0110)": {
        "vr": "CS",
        "name": "CertificateType",
        "vm": "1",
    },
    "(0400,0115)": {
        "vr": "OB",
        "name": "CertificateOfSigner",
        "vm": "1",
    },
    "(0400,0120)": {
        "vr": "OB",
        "name": "Signature",
        "vm": "1",
    },
    "(0400,0305)": {
        "vr": "CS",
        "name": "CertifiedTimestampType",
        "vm": "1",
    },
    "(0400,0310)": {
        "vr": "OB",
        "name": "CertifiedTimestamp",
        "vm": "1",
    },
    "(0400,0401)": {
        "vr": "SQ",
        "name": "DigitalSignaturePurposeCodeSequence",
        "vm": "1",
    },
    "(0400,0402)": {
        "vr": "SQ",
        "name": "ReferencedDigitalSignatureSequence",
        "vm": "1",
    },
    "(0400,0403)": {
        "vr": "SQ",
        "name": "ReferencedSOPInstanceMACSequence",
        "vm": "1",
    },
    "(0400,0404)": {
        "vr": "OB",
        "name": "MAC",
        "vm": "1",
    },
    "(0400,0500)": {
        "vr": "SQ",
        "name": "EncryptedAttributesSequence",
        "vm": "1",
    },
    "(0400,0510)": {
        "vr": "UI",
        "name": "EncryptedContentTransferSyntaxUID",
        "vm": "1",
    },
    "(0400,0520)": {
        "vr": "OB",
        "name": "EncryptedContent",
        "vm": "1",
    },
    "(0400,0550)": {
        "vr": "SQ",
        "name": "ModifiedAttributesSequence",
        "vm": "1",
    },
    "(0400,0561)": {
        "vr": "SQ",
        "name": "OriginalAttributesSequence",
        "vm": "1",
    },
    "(0400,0562)": {
        "vr": "DT",
        "name": "AttributeModificationDateTime",
        "vm": "1",
    },
    "(0400,0563)": {
        "vr": "LO",
        "name": "ModifyingSystem",
        "vm": "1",
    },
    "(0400,0564)": {
        "vr": "LO",
        "name": "SourceOfPreviousValues",
        "vm": "1",
    },
    "(0400,0565)": {
        "vr": "CS",
        "name": "ReasonForTheAttributeModification",
        "vm": "1",
    },
    "(2000,0010)": {
        "vr": "IS",
        "name": "NumberOfCopies",
        "vm": "1",
    },
    "(2000,001E)": {
        "vr": "SQ",
        "name": "PrinterConfigurationSequence",
        "vm": "1",
    },
    "(2000,0020)": {
        "vr": "CS",
        "name": "PrintPriority",
        "vm": "1",
    },
    "(2000,0030)": {
        "vr": "CS",
        "name": "MediumType",
        "vm": "1",
    },
    "(2000,0040)": {
        "vr": "CS",
        "name": "FilmDestination",
        "vm": "1",
    },
    "(2000,0050)": {
        "vr": "LO",
        "name": "FilmSessionLabel",
        "vm": "1",
    },
    "(2000,0060)": {
        "vr": "IS",
        "name": "MemoryAllocation",
        "vm": "1",
    },
    "(2000,0061)": {
        "vr": "IS",
        "name": "MaximumMemoryAllocation",
        "vm": "1",
    },
    "(2000,00A0)": {
        "vr": "US",
        "name": "MemoryBitDepth",
        "vm": "1",
    },
    "(2000,00A1)": {
        "vr": "US",
        "name": "PrintingBitDepth",
        "vm": "1",
    },
    "(2000,00A2)": {
        "vr": "SQ",
        "name": "MediaInstalledSequence",
        "vm": "1",
    },
    "(2000,00A4)": {
        "vr": "SQ",
        "name": "OtherMediaAvailableSequence",
        "vm": "1",
    },
    "(2000,00A8)": {
        "vr": "SQ",
        "name": "SupportedImageDisplayFormatsSequence",
        "vm": "1",
    },
    "(2000,0500)": {
        "vr": "SQ",
        "name": "ReferencedFilmBoxSequence",
        "vm": "1",
    },
    "(2010,0010)": {
        "vr": "ST",
        "name": "ImageDisplayFormat",
        "vm": "1",
    },
    "(2010,0030)": {
        "vr": "CS",
        "name": "AnnotationDisplayFormatID",
        "vm": "1",
    },
    "(2010,0040)": {
        "vr": "CS",
        "name": "FilmOrientation",
        "vm": "1",
    },
    "(2010,0050)": {
        "vr": "CS",
        "name": "FilmSizeID",
        "vm": "1",
    },
    "(2010,0052)": {
        "vr": "CS",
        "name": "PrinterResolutionID",
        "vm": "1",
    },
    "(2010,0054)": {
        "vr": "CS",
        "name": "DefaultPrinterResolutionID",
        "vm": "1",
    },
    "(2010,0060)": {
        "vr": "CS",
        "name": "MagnificationType",
        "vm": "1",
    },
    "(2010,0080)": {
        "vr": "CS",
        "name": "SmoothingType",
        "vm": "1",
    },
    "(2010,00A6)": {
        "vr": "CS",
        "name": "DefaultMagnificationType",
        "vm": "1",
    },
    "(2010,00A7)": {
        "vr": "CS",
        "name": "OtherMagnificationTypesAvailable",
        "vm": "1-n",
    },
    "(2010,00A8)": {
        "vr": "CS",
        "name": "DefaultSmoothingType",
        "vm": "1",
    },
    "(2010,00A9)": {
        "vr": "CS",
        "name": "OtherSmoothingTypesAvailable",
        "vm": "1-n",
    },
    "(2010,0100)": {
        "vr": "CS",
        "name": "BorderDensity",
        "vm": "1",
    },
    "(2010,0110)": {
        "vr": "CS",
        "name": "EmptyImageDensity",
        "vm": "1",
    },
    "(2010,0120)": {
        "vr": "US",
        "name": "MinDensity",
        "vm": "1",
    },
    "(2010,0130)": {
        "vr": "US",
        "name": "MaxDensity",
        "vm": "1",
    },
    "(2010,0140)": {
        "vr": "CS",
        "name": "Trim",
        "vm": "1",
    },
    "(2010,0150)": {
        "vr": "ST",
        "name": "ConfigurationInformation",
        "vm": "1",
    },
    "(2010,0152)": {
        "vr": "LT",
        "name": "ConfigurationInformationDescription",
        "vm": "1",
    },
    "(2010,0154)": {
        "vr": "IS",
        "name": "MaximumCollatedFilms",
        "vm": "1",
    },
    "(2010,015E)": {
        "vr": "US",
        "name": "Illumination",
        "vm": "1",
    },
    "(2010,0160)": {
        "vr": "US",
        "name": "ReflectedAmbientLight",
        "vm": "1",
    },
    "(2010,0376)": {
        "vr": "DS",
        "name": "PrinterPixelSpacing",
        "vm": "2",
    },
    "(2010,0500)": {
        "vr": "SQ",
        "name": "ReferencedFilmSessionSequence",
        "vm": "1",
    },
    "(2010,0510)": {
        "vr": "SQ",
        "name": "ReferencedImageBoxSequence",
        "vm": "1",
    },
    "(2010,0520)": {
        "vr": "SQ",
        "name": "ReferencedBasicAnnotationBoxSequence",
        "vm": "1",
    },
    "(2020,0010)": {
        "vr": "US",
        "name": "ImageBoxPosition",
        "vm": "1",
    },
    "(2020,0020)": {
        "vr": "CS",
        "name": "Polarity",
        "vm": "1",
    },
    "(2020,0030)": {
        "vr": "DS",
        "name": "RequestedImageSize",
        "vm": "1",
    },
    "(2020,0040)": {
        "vr": "CS",
        "name": "RequestedDecimateCropBehavior",
        "vm": "1",
    },
    "(2020,0050)": {
        "vr": "CS",
        "name": "RequestedResolutionID",
        "vm": "1",
    },
    "(2020,00A0)": {
        "vr": "CS",
        "name": "RequestedImageSizeFlag",
        "vm": "1",
    },
    "(2020,00A2)": {
        "vr": "CS",
        "name": "DecimateCropResult",
        "vm": "1",
    },
    "(2020,0110)": {
        "vr": "SQ",
        "name": "BasicGrayscaleImageSequence",
        "vm": "1",
    },
    "(2020,0111)": {
        "vr": "SQ",
        "name": "BasicColorImageSequence",
        "vm": "1",
    },
    "(2030,0010)": {
        "vr": "US",
        "name": "AnnotationPosition",
        "vm": "1",
    },
    "(2030,0020)": {
        "vr": "LO",
        "name": "TextString",
        "vm": "1",
    },
    "(2050,0010)": {
        "vr": "SQ",
        "name": "PresentationLUTSequence",
        "vm": "1",
    },
    "(2050,0020)": {
        "vr": "CS",
        "name": "PresentationLUTShape",
        "vm": "1",
    },
    "(2050,0500)": {
        "vr": "SQ",
        "name": "ReferencedPresentationLUTSequence",
        "vm": "1",
    },
    "(2100,0020)": {
        "vr": "CS",
        "name": "ExecutionStatus",
        "vm": "1",
    },
    "(2100,0030)": {
        "vr": "CS",
        "name": "ExecutionStatusInfo",
        "vm": "1",
    },
    "(2100,0040)": {
        "vr": "DA",
        "name": "CreationDate",
        "vm": "1",
    },
    "(2100,0050)": {
        "vr": "TM",
        "name": "CreationTime",
        "vm": "1",
    },
    "(2100,0070)": {
        "vr": "AE",
        "name": "Originator",
        "vm": "1",
    },
    "(2100,0160)": {
        "vr": "SH",
        "name": "OwnerID",
        "vm": "1",
    },
    "(2100,0170)": {
        "vr": "IS",
        "name": "NumberOfFilms",
        "vm": "1",
    },
    "(2110,0010)": {
        "vr": "CS",
        "name": "PrinterStatus",
        "vm": "1",
    },
    "(2110,0020)": {
        "vr": "CS",
        "name": "PrinterStatusInfo",
        "vm": "1",
    },
    "(2110,0030)": {
        "vr": "LO",
        "name": "PrinterName",
        "vm": "1",
    },
    "(2200,0001)": {
        "vr": "CS",
        "name": "LabelUsingInformationExtractedFromInstances",
        "vm": "1",
    },
    "(2200,0002)": {
        "vr": "UT",
        "name": "LabelText",
        "vm": "1",
    },
    "(2200,0003)": {
        "vr": "CS",
        "name": "LabelStyleSelection",
        "vm": "1",
    },
    "(2200,0004)": {
        "vr": "LT",
        "name": "MediaDisposition",
        "vm": "1",
    },
    "(2200,0005)": {
        "vr": "LT",
        "name": "BarcodeValue",
        "vm": "1",
    },
    "(2200,0006)": {
        "vr": "CS",
        "name": "BarcodeSymbology",
        "vm": "1",
    },
    "(2200,0007)": {
        "vr": "CS",
        "name": "AllowMediaSplitting",
        "vm": "1",
    },
    "(2200,0008)": {
        "vr": "CS",
        "name": "IncludeNonDICOMObjects",
        "vm": "1",
    },
    "(2200,0009)": {
        "vr": "CS",
        "name": "IncludeDisplayApplication",
        "vm": "1",
    },
    "(2200,000A)": {
        "vr": "CS",
        "name": "PreserveCompositeInstancesAfterMediaCreation",
        "vm": "1",
    },
    "(2200,000B)": {
        "vr": "US",
        "name": "TotalNumberOfPiecesOfMediaCreated",
        "vm": "1",
    },
    "(2200,000C)": {
        "vr": "LO",
        "name": "RequestedMediaApplicationProfile",
        "vm": "1",
    },
    "(2200,000D)": {
        "vr": "SQ",
        "name": "ReferencedStorageMediaSequence",
        "vm": "1",
    },
    "(2200,000E)": {
        "vr": "AT",
        "name": "FailureAttributes",
        "vm": "1-n",
    },
    "(2200,000F)": {
        "vr": "CS",
        "name": "AllowLossyCompression",
        "vm": "1",
    },
    "(2200,0020)": {
        "vr": "CS",
        "name": "RequestPriority",
        "vm": "1",
    },
    "(3002,0002)": {
        "vr": "SH",
        "name": "RTImageLabel",
        "vm": "1",
    },
    "(3002,0003)": {
        "vr": "LO",
        "name": "RTImageName",
        "vm": "1",
    },
    "(3002,0004)": {
        "vr": "ST",
        "name": "RTImageDescription",
        "vm": "1",
    },
    "(3002,000A)": {
        "vr": "CS",
        "name": "ReportedValuesOrigin",
        "vm": "1",
    },
    "(3002,000C)": {
        "vr": "CS",
        "name": "RTImagePlane",
        "vm": "1",
    },
    "(3002,000D)": {
        "vr": "DS",
        "name": "XRayImageReceptorTranslation",
        "vm": "3",
    },
    "(3002,000E)": {
        "vr": "DS",
        "name": "XRayImageReceptorAngle",
        "vm": "1",
    },
    "(3002,0010)": {
        "vr": "DS",
        "name": "RTImageOrientation",
        "vm": "6",
    },
    "(3002,0011)": {
        "vr": "DS",
        "name": "ImagePlanePixelSpacing",
        "vm": "2",
    },
    "(3002,0012)": {
        "vr": "DS",
        "name": "RTImagePosition",
        "vm": "2",
    },
    "(3002,0020)": {
        "vr": "SH",
        "name": "RadiationMachineName",
        "vm": "1",
    },
    "(3002,0022)": {
        "vr": "DS",
        "name": "RadiationMachineSAD",
        "vm": "1",
    },
    "(3002,0024)": {
        "vr": "DS",
        "name": "RadiationMachineSSD",
        "vm": "1",
    },
    "(3002,0026)": {
        "vr": "DS",
        "name": "RTImageSID",
        "vm": "1",
    },
    "(3002,0028)": {
        "vr": "DS",
        "name": "SourceToReferenceObjectDistance",
        "vm": "1",
    },
    "(3002,0029)": {
        "vr": "IS",
        "name": "FractionNumber",
        "vm": "1",
    },
    "(3002,0030)": {
        "vr": "SQ",
        "name": "ExposureSequence",
        "vm": "1",
    },
    "(3002,0032)": {
        "vr": "DS",
        "name": "MetersetExposure",
        "vm": "1",
    },
    "(3002,0034)": {
        "vr": "DS",
        "name": "DiaphragmPosition",
        "vm": "4",
    },
    "(3002,0040)": {
        "vr": "SQ",
        "name": "FluenceMapSequence",
        "vm": "1",
    },
    "(3002,0041)": {
        "vr": "CS",
        "name": "FluenceDataSource",
        "vm": "1",
    },
    "(3002,0042)": {
        "vr": "DS",
        "name": "FluenceDataScale",
        "vm": "1",
    },
    "(3002,0050)": {
        "vr": "SQ",
        "name": "PrimaryFluenceModeSequence",
        "vm": "1",
    },
    "(3002,0051)": {
        "vr": "CS",
        "name": "FluenceMode",
        "vm": "1",
    },
    "(3002,0052)": {
        "vr": "SH",
        "name": "FluenceModeID",
        "vm": "1",
    },
    "(3004,0001)": {
        "vr": "CS",
        "name": "DVHType",
        "vm": "1",
    },
    "(3004,0002)": {
        "vr": "CS",
        "name": "DoseUnits",
        "vm": "1",
    },
    "(3004,0004)": {
        "vr": "CS",
        "name": "DoseType",
        "vm": "1",
    },
    "(3004,0005)": {
        "vr": "CS",
        "name": "SpatialTransformOfDose",
        "vm": "1",
    },
    "(3004,0006)": {
        "vr": "LO",
        "name": "DoseComment",
        "vm": "1",
    },
    "(3004,0008)": {
        "vr": "DS",
        "name": "NormalizationPoint",
        "vm": "3",
    },
    "(3004,000A)": {
        "vr": "CS",
        "name": "DoseSummationType",
        "vm": "1",
    },
    "(3004,000C)": {
        "vr": "DS",
        "name": "GridFrameOffsetVector",
        "vm": "2-n",
    },
    "(3004,000E)": {
        "vr": "DS",
        "name": "DoseGridScaling",
        "vm": "1",
    },
    "(3004,0010)": {
        "vr": "SQ",
        "name": "RTDoseROISequence",
        "vm": "1",
    },
    "(3004,0012)": {
        "vr": "DS",
        "name": "DoseValue",
        "vm": "1",
    },
    "(3004,0014)": {
        "vr": "CS",
        "name": "TissueHeterogeneityCorrection",
        "vm": "1-3",
    },
    "(3004,0040)": {
        "vr": "DS",
        "name": "DVHNormalizationPoint",
        "vm": "3",
    },
    "(3004,0042)": {
        "vr": "DS",
        "name": "DVHNormalizationDoseValue",
        "vm": "1",
    },
    "(3004,0050)": {
        "vr": "SQ",
        "name": "DVHSequence",
        "vm": "1",
    },
    "(3004,0052)": {
        "vr": "DS",
        "name": "DVHDoseScaling",
        "vm": "1",
    },
    "(3004,0054)": {
        "vr": "CS",
        "name": "DVHVolumeUnits",
        "vm": "1",
    },
    "(3004,0056)": {
        "vr": "IS",
        "name": "DVHNumberOfBins",
        "vm": "1",
    },
    "(3004,0058)": {
        "vr": "DS",
        "name": "DVHData",
        "vm": "2-2n",
    },
    "(3004,0060)": {
        "vr": "SQ",
        "name": "DVHReferencedROISequence",
        "vm": "1",
    },
    "(3004,0062)": {
        "vr": "CS",
        "name": "DVHROIContributionType",
        "vm": "1",
    },
    "(3004,0070)": {
        "vr": "DS",
        "name": "DVHMinimumDose",
        "vm": "1",
    },
    "(3004,0072)": {
        "vr": "DS",
        "name": "DVHMaximumDose",
        "vm": "1",
    },
    "(3004,0074)": {
        "vr": "DS",
        "name": "DVHMeanDose",
        "vm": "1",
    },
    "(3006,0002)": {
        "vr": "SH",
        "name": "StructureSetLabel",
        "vm": "1",
    },
    "(3006,0004)": {
        "vr": "LO",
        "name": "StructureSetName",
        "vm": "1",
    },
    "(3006,0006)": {
        "vr": "ST",
        "name": "StructureSetDescription",
        "vm": "1",
    },
    "(3006,0008)": {
        "vr": "DA",
        "name": "StructureSetDate",
        "vm": "1",
    },
    "(3006,0009)": {
        "vr": "TM",
        "name": "StructureSetTime",
        "vm": "1",
    },
    "(3006,0010)": {
        "vr": "SQ",
        "name": "ReferencedFrameOfReferenceSequence",
        "vm": "1",
    },
    "(3006,0012)": {
        "vr": "SQ",
        "name": "RTReferencedStudySequence",
        "vm": "1",
    },
    "(3006,0014)": {
        "vr": "SQ",
        "name": "RTReferencedSeriesSequence",
        "vm": "1",
    },
    "(3006,0016)": {
        "vr": "SQ",
        "name": "ContourImageSequence",
        "vm": "1",
    },
    "(3006,0018)": {
        "vr": "SQ",
        "name": "PredecessorStructureSetSequence",
        "vm": "1",
    },
    "(3006,0020)": {
        "vr": "SQ",
        "name": "StructureSetROISequence",
        "vm": "1",
    },
    "(3006,0022)": {
        "vr": "IS",
        "name": "ROINumber",
        "vm": "1",
    },
    "(3006,0024)": {
        "vr": "UI",
        "name": "ReferencedFrameOfReferenceUID",
        "vm": "1",
    },
    "(3006,0026)": {
        "vr": "LO",
        "name": "ROIName",
        "vm": "1",
    },
    "(3006,0028)": {
        "vr": "ST",
        "name": "ROIDescription",
        "vm": "1",
    },
    "(3006,002A)": {
        "vr": "IS",
        "name": "ROIDisplayColor",
        "vm": "3",
    },
    "(3006,002C)": {
        "vr": "DS",
        "name": "ROIVolume",
        "vm": "1",
    },
    "(3006,0030)": {
        "vr": "SQ",
        "name": "RTRelatedROISequence",
        "vm": "1",
    },
    "(3006,0033)": {
        "vr": "CS",
        "name": "RTROIRelationship",
        "vm": "1",
    },
    "(3006,0036)": {
        "vr": "CS",
        "name": "ROIGenerationAlgorithm",
        "vm": "1",
    },
    "(3006,0038)": {
        "vr": "LO",
        "name": "ROIGenerationDescription",
        "vm": "1",
    },
    "(3006,0039)": {
        "vr": "SQ",
        "name": "ROIContourSequence",
        "vm": "1",
    },
    "(3006,0040)": {
        "vr": "SQ",
        "name": "ContourSequence",
        "vm": "1",
    },
    "(3006,0042)": {
        "vr": "CS",
        "name": "ContourGeometricType",
        "vm": "1",
    },
    "(3006,0044)": {
        "vr": "DS",
        "name": "ContourSlabThickness",
        "vm": "1",
    },
    "(3006,0045)": {
        "vr": "DS",
        "name": "ContourOffsetVector",
        "vm": "3",
    },
    "(3006,0046)": {
        "vr": "IS",
        "name": "NumberOfContourPoints",
        "vm": "1",
    },
    "(3006,0048)": {
        "vr": "IS",
        "name": "ContourNumber",
        "vm": "1",
    },
    "(3006,0049)": {
        "vr": "IS",
        "name": "AttachedContours",
        "vm": "1-n",
    },
    "(3006,0050)": {
        "vr": "DS",
        "name": "ContourData",
        "vm": "3-3n",
    },
    "(3006,0080)": {
        "vr": "SQ",
        "name": "RTROIObservationsSequence",
        "vm": "1",
    },
    "(3006,0082)": {
        "vr": "IS",
        "name": "ObservationNumber",
        "vm": "1",
    },
    "(3006,0084)": {
        "vr": "IS",
        "name": "ReferencedROINumber",
        "vm": "1",
    },
    "(3006,0085)": {
        "vr": "SH",
        "name": "ROIObservationLabel",
        "vm": "1",
    },
    "(3006,0086)": {
        "vr": "SQ",
        "name": "RTROIIdentificationCodeSequence",
        "vm": "1",
    },
    "(3006,0088)": {
        "vr": "ST",
        "name": "ROIObservationDescription",
        "vm": "1",
    },
    "(3006,00A0)": {
        "vr": "SQ",
        "name": "RelatedRTROIObservationsSequence",
        "vm": "1",
    },
    "(3006,00A4)": {
        "vr": "CS",
        "name": "RTROIInterpretedType",
        "vm": "1",
    },
    "(3006,00A6)": {
        "vr": "PN",
        "name": "ROIInterpreter",
        "vm": "1",
    },
    "(3006,00B0)": {
        "vr": "SQ",
        "name": "ROIPhysicalPropertiesSequence",
        "vm": "1",
    },
    "(3006,00B2)": {
        "vr": "CS",
        "name": "ROIPhysicalProperty",
        "vm": "1",
    },
    "(3006,00B4)": {
        "vr": "DS",
        "name": "ROIPhysicalPropertyValue",
        "vm": "1",
    },
    "(3006,00B6)": {
        "vr": "SQ",
        "name": "ROIElementalCompositionSequence",
        "vm": "1",
    },
    "(3006,00B7)": {
        "vr": "US",
        "name": "ROIElementalCompositionAtomicNumber",
        "vm": "1",
    },
    "(3006,00B8)": {
        "vr": "FL",
        "name": "ROIElementalCompositionAtomicMassFraction",
        "vm": "1",
    },
    "(3006,00B9)": {
        "vr": "SQ",
        "name": "AdditionalRTROIIdentificationCodeSequence",
        "vm": "1",
    },
    "(3006,00C6)": {
        "vr": "DS",
        "name": "FrameOfReferenceTransformationMatrix",
        "vm": "16",
    },
    "(3006,00C8)": {
        "vr": "LO",
        "name": "FrameOfReferenceTransformationComment",
        "vm": "1",
    },
    "(3008,0010)": {
        "vr": "SQ",
        "name": "MeasuredDoseReferenceSequence",
        "vm": "1",
    },
    "(3008,0012)": {
        "vr": "ST",
        "name": "MeasuredDoseDescription",
        "vm": "1",
    },
    "(3008,0014)": {
        "vr": "CS",
        "name": "MeasuredDoseType",
        "vm": "1",
    },
    "(3008,0016)": {
        "vr": "DS",
        "name": "MeasuredDoseValue",
        "vm": "1",
    },
    "(3008,0020)": {
        "vr": "SQ",
        "name": "TreatmentSessionBeamSequence",
        "vm": "1",
    },
    "(3008,0021)": {
        "vr": "SQ",
        "name": "TreatmentSessionIonBeamSequence",
        "vm": "1",
    },
    "(3008,0022)": {
        "vr": "IS",
        "name": "CurrentFractionNumber",
        "vm": "1",
    },
    "(3008,0024)": {
        "vr": "DA",
        "name": "TreatmentControlPointDate",
        "vm": "1",
    },
    "(3008,0025)": {
        "vr": "TM",
        "name": "TreatmentControlPointTime",
        "vm": "1",
    },
    "(3008,002A)": {
        "vr": "CS",
        "name": "TreatmentTerminationStatus",
        "vm": "1",
    },
    "(3008,002B)": {
        "vr": "SH",
        "name": "TreatmentTerminationCode",
        "vm": "1",
    },
    "(3008,002C)": {
        "vr": "CS",
        "name": "TreatmentVerificationStatus",
        "vm": "1",
    },
    "(3008,0030)": {
        "vr": "SQ",
        "name": "ReferencedTreatmentRecordSequence",
        "vm": "1",
    },
    "(3008,0032)": {
        "vr": "DS",
        "name": "SpecifiedPrimaryMeterset",
        "vm": "1",
    },
    "(3008,0033)": {
        "vr": "DS",
        "name": "SpecifiedSecondaryMeterset",
        "vm": "1",
    },
    "(3008,0036)": {
        "vr": "DS",
        "name": "DeliveredPrimaryMeterset",
        "vm": "1",
    },
    "(3008,0037)": {
        "vr": "DS",
        "name": "DeliveredSecondaryMeterset",
        "vm": "1",
    },
    "(3008,003A)": {
        "vr": "DS",
        "name": "SpecifiedTreatmentTime",
        "vm": "1",
    },
    "(3008,003B)": {
        "vr": "DS",
        "name": "DeliveredTreatmentTime",
        "vm": "1",
    },
    "(3008,0040)": {
        "vr": "SQ",
        "name": "ControlPointDeliverySequence",
        "vm": "1",
    },
    "(3008,0041)": {
        "vr": "SQ",
        "name": "IonControlPointDeliverySequence",
        "vm": "1",
    },
    "(3008,0042)": {
        "vr": "DS",
        "name": "SpecifiedMeterset",
        "vm": "1",
    },
    "(3008,0044)": {
        "vr": "DS",
        "name": "DeliveredMeterset",
        "vm": "1",
    },
    "(3008,0045)": {
        "vr": "FL",
        "name": "MetersetRateSet",
        "vm": "1",
    },
    "(3008,0046)": {
        "vr": "FL",
        "name": "MetersetRateDelivered",
        "vm": "1",
    },
    "(3008,0047)": {
        "vr": "FL",
        "name": "ScanSpotMetersetsDelivered",
        "vm": "1-n",
    },
    "(3008,0048)": {
        "vr": "DS",
        "name": "DoseRateDelivered",
        "vm": "1",
    },
    "(3008,0050)": {
        "vr": "SQ",
        "name": "TreatmentSummaryCalculatedDoseReferenceSequence",
        "vm": "1",
    },
    "(3008,0052)": {
        "vr": "DS",
        "name": "CumulativeDoseToDoseReference",
        "vm": "1",
    },
    "(3008,0054)": {
        "vr": "DA",
        "name": "FirstTreatmentDate",
        "vm": "1",
    },
    "(3008,0056)": {
        "vr": "DA",
        "name": "MostRecentTreatmentDate",
        "vm": "1",
    },
    "(3008,005A)": {
        "vr": "IS",
        "name": "NumberOfFractionsDelivered",
        "vm": "1",
    },
    "(3008,0060)": {
        "vr": "SQ",
        "name": "OverrideSequence",
        "vm": "1",
    },
    "(3008,0061)": {
        "vr": "AT",
        "name": "ParameterSequencePointer",
        "vm": "1",
    },
    "(3008,0062)": {
        "vr": "AT",
        "name": "OverrideParameterPointer",
        "vm": "1",
    },
    "(3008,0063)": {
        "vr": "IS",
        "name": "ParameterItemIndex",
        "vm": "1",
    },
    "(3008,0064)": {
        "vr": "IS",
        "name": "MeasuredDoseReferenceNumber",
        "vm": "1",
    },
    "(3008,0065)": {
        "vr": "AT",
        "name": "ParameterPointer",
        "vm": "1",
    },
    "(3008,0066)": {
        "vr": "ST",
        "name": "OverrideReason",
        "vm": "1",
    },
    "(3008,0068)": {
        "vr": "SQ",
        "name": "CorrectedParameterSequence",
        "vm": "1",
    },
    "(3008,006A)": {
        "vr": "FL",
        "name": "CorrectionValue",
        "vm": "1",
    },
    "(3008,0070)": {
        "vr": "SQ",
        "name": "CalculatedDoseReferenceSequence",
        "vm": "1",
    },
    "(3008,0072)": {
        "vr": "IS",
        "name": "CalculatedDoseReferenceNumber",
        "vm": "1",
    },
    "(3008,0074)": {
        "vr": "ST",
        "name": "CalculatedDoseReferenceDescription",
        "vm": "1",
    },
    "(3008,0076)": {
        "vr": "DS",
        "name": "CalculatedDoseReferenceDoseValue",
        "vm": "1",
    },
    "(3008,0078)": {
        "vr": "DS",
        "name": "StartMeterset",
        "vm": "1",
    },
    "(3008,007A)": {
        "vr": "DS",
        "name": "EndMeterset",
        "vm": "1",
    },
    "(3008,0080)": {
        "vr": "SQ",
        "name": "ReferencedMeasuredDoseReferenceSequence",
        "vm": "1",
    },
    "(3008,0082)": {
        "vr": "IS",
        "name": "ReferencedMeasuredDoseReferenceNumber",
        "vm": "1",
    },
    "(3008,0090)": {
        "vr": "SQ",
        "name": "ReferencedCalculatedDoseReferenceSequence",
        "vm": "1",
    },
    "(3008,0092)": {
        "vr": "IS",
        "name": "ReferencedCalculatedDoseReferenceNumber",
        "vm": "1",
    },
    "(3008,00A0)": {
        "vr": "SQ",
        "name": "BeamLimitingDeviceLeafPairsSequence",
        "vm": "1",
    },
    "(3008,00B0)": {
        "vr": "SQ",
        "name": "RecordedWedgeSequence",
        "vm": "1",
    },
    "(3008,00C0)": {
        "vr": "SQ",
        "name": "RecordedCompensatorSequence",
        "vm": "1",
    },
    "(3008,00D0)": {
        "vr": "SQ",
        "name": "RecordedBlockSequence",
        "vm": "1",
    },
    "(3008,00E0)": {
        "vr": "SQ",
        "name": "TreatmentSummaryMeasuredDoseReferenceSequence",
        "vm": "1",
    },
    "(3008,00F0)": {
        "vr": "SQ",
        "name": "RecordedSnoutSequence",
        "vm": "1",
    },
    "(3008,00F2)": {
        "vr": "SQ",
        "name": "RecordedRangeShifterSequence",
        "vm": "1",
    },
    "(3008,00F4)": {
        "vr": "SQ",
        "name": "RecordedLateralSpreadingDeviceSequence",
        "vm": "1",
    },
    "(3008,00F6)": {
        "vr": "SQ",
        "name": "RecordedRangeModulatorSequence",
        "vm": "1",
    },
    "(3008,0100)": {
        "vr": "SQ",
        "name": "RecordedSourceSequence",
        "vm": "1",
    },
    "(3008,0105)": {
        "vr": "LO",
        "name": "SourceSerialNumber",
        "vm": "1",
    },
    "(3008,0110)": {
        "vr": "SQ",
        "name": "TreatmentSessionApplicationSetupSequence",
        "vm": "1",
    },
    "(3008,0116)": {
        "vr": "CS",
        "name": "ApplicationSetupCheck",
        "vm": "1",
    },
    "(3008,0120)": {
        "vr": "SQ",
        "name": "RecordedBrachyAccessoryDeviceSequence",
        "vm": "1",
    },
    "(3008,0122)": {
        "vr": "IS",
        "name": "ReferencedBrachyAccessoryDeviceNumber",
        "vm": "1",
    },
    "(3008,0130)": {
        "vr": "SQ",
        "name": "RecordedChannelSequence",
        "vm": "1",
    },
    "(3008,0132)": {
        "vr": "DS",
        "name": "SpecifiedChannelTotalTime",
        "vm": "1",
    },
    "(3008,0134)": {
        "vr": "DS",
        "name": "DeliveredChannelTotalTime",
        "vm": "1",
    },
    "(3008,0136)": {
        "vr": "IS",
        "name": "SpecifiedNumberOfPulses",
        "vm": "1",
    },
    "(3008,0138)": {
        "vr": "IS",
        "name": "DeliveredNumberOfPulses",
        "vm": "1",
    },
    "(3008,013A)": {
        "vr": "DS",
        "name": "SpecifiedPulseRepetitionInterval",
        "vm": "1",
    },
    "(3008,013C)": {
        "vr": "DS",
        "name": "DeliveredPulseRepetitionInterval",
        "vm": "1",
    },
    "(3008,0140)": {
        "vr": "SQ",
        "name": "RecordedSourceApplicatorSequence",
        "vm": "1",
    },
    "(3008,0142)": {
        "vr": "IS",
        "name": "ReferencedSourceApplicatorNumber",
        "vm": "1",
    },
    "(3008,0150)": {
        "vr": "SQ",
        "name": "RecordedChannelShieldSequence",
        "vm": "1",
    },
    "(3008,0152)": {
        "vr": "IS",
        "name": "ReferencedChannelShieldNumber",
        "vm": "1",
    },
    "(3008,0160)": {
        "vr": "SQ",
        "name": "BrachyControlPointDeliveredSequence",
        "vm": "1",
    },
    "(3008,0162)": {
        "vr": "DA",
        "name": "SafePositionExitDate",
        "vm": "1",
    },
    "(3008,0164)": {
        "vr": "TM",
        "name": "SafePositionExitTime",
        "vm": "1",
    },
    "(3008,0166)": {
        "vr": "DA",
        "name": "SafePositionReturnDate",
        "vm": "1",
    },
    "(3008,0168)": {
        "vr": "TM",
        "name": "SafePositionReturnTime",
        "vm": "1",
    },
    "(3008,0171)": {
        "vr": "SQ",
        "name": "PulseSpecificBrachyControlPointDeliveredSequence",
        "vm": "1",
    },
    "(3008,0172)": {
        "vr": "US",
        "name": "PulseNumber",
        "vm": "1",
    },
    "(3008,0173)": {
        "vr": "SQ",
        "name": "BrachyPulseControlPointDeliveredSequence",
        "vm": "1",
    },
    "(3008,0200)": {
        "vr": "CS",
        "name": "CurrentTreatmentStatus",
        "vm": "1",
    },
    "(3008,0202)": {
        "vr": "ST",
        "name": "TreatmentStatusComment",
        "vm": "1",
    },
    "(3008,0220)": {
        "vr": "SQ",
        "name": "FractionGroupSummarySequence",
        "vm": "1",
    },
    "(3008,0223)": {
        "vr": "IS",
        "name": "ReferencedFractionNumber",
        "vm": "1",
    },
    "(3008,0224)": {
        "vr": "CS",
        "name": "FractionGroupType",
        "vm": "1",
    },
    "(3008,0230)": {
        "vr": "CS",
        "name": "BeamStopperPosition",
        "vm": "1",
    },
    "(3008,0240)": {
        "vr": "SQ",
        "name": "FractionStatusSummarySequence",
        "vm": "1",
    },
    "(3008,0250)": {
        "vr": "DA",
        "name": "TreatmentDate",
        "vm": "1",
    },
    "(3008,0251)": {
        "vr": "TM",
        "name": "TreatmentTime",
        "vm": "1",
    },
    "(300A,0002)": {
        "vr": "SH",
        "name": "RTPlanLabel",
        "vm": "1",
    },
    "(300A,0003)": {
        "vr": "LO",
        "name": "RTPlanName",
        "vm": "1",
    },
    "(300A,0004)": {
        "vr": "ST",
        "name": "RTPlanDescription",
        "vm": "1",
    },
    "(300A,0006)": {
        "vr": "DA",
        "name": "RTPlanDate",
        "vm": "1",
    },
    "(300A,0007)": {
        "vr": "TM",
        "name": "RTPlanTime",
        "vm": "1",
    },
    "(300A,0009)": {
        "vr": "LO",
        "name": "TreatmentProtocols",
        "vm": "1-n",
    },
    "(300A,000A)": {
        "vr": "CS",
        "name": "PlanIntent",
        "vm": "1",
    },
    "(300A,000B)": {
        "vr": "LO",
        "name": "TreatmentSites",
        "vm": "1-n",
    },
    "(300A,000C)": {
        "vr": "CS",
        "name": "RTPlanGeometry",
        "vm": "1",
    },
    "(300A,000E)": {
        "vr": "ST",
        "name": "PrescriptionDescription",
        "vm": "1",
    },
    "(300A,0010)": {
        "vr": "SQ",
        "name": "DoseReferenceSequence",
        "vm": "1",
    },
    "(300A,0012)": {
        "vr": "IS",
        "name": "DoseReferenceNumber",
        "vm": "1",
    },
    "(300A,0013)": {
        "vr": "UI",
        "name": "DoseReferenceUID",
        "vm": "1",
    },
    "(300A,0014)": {
        "vr": "CS",
        "name": "DoseReferenceStructureType",
        "vm": "1",
    },
    "(300A,0015)": {
        "vr": "CS",
        "name": "NominalBeamEnergyUnit",
        "vm": "1",
    },
    "(300A,0016)": {
        "vr": "LO",
        "name": "DoseReferenceDescription",
        "vm": "1",
    },
    "(300A,0018)": {
        "vr": "DS",
        "name": "DoseReferencePointCoordinates",
        "vm": "3",
    },
    "(300A,001A)": {
        "vr": "DS",
        "name": "NominalPriorDose",
        "vm": "1",
    },
    "(300A,0020)": {
        "vr": "CS",
        "name": "DoseReferenceType",
        "vm": "1",
    },
    "(300A,0021)": {
        "vr": "DS",
        "name": "ConstraintWeight",
        "vm": "1",
    },
    "(300A,0022)": {
        "vr": "DS",
        "name": "DeliveryWarningDose",
        "vm": "1",
    },
    "(300A,0023)": {
        "vr": "DS",
        "name": "DeliveryMaximumDose",
        "vm": "1",
    },
    "(300A,0025)": {
        "vr": "DS",
        "name": "TargetMinimumDose",
        "vm": "1",
    },
    "(300A,0026)": {
        "vr": "DS",
        "name": "TargetPrescriptionDose",
        "vm": "1",
    },
    "(300A,0027)": {
        "vr": "DS",
        "name": "TargetMaximumDose",
        "vm": "1",
    },
    "(300A,0028)": {
        "vr": "DS",
        "name": "TargetUnderdoseVolumeFraction",
        "vm": "1",
    },
    "(300A,002A)": {
        "vr": "DS",
        "name": "OrganAtRiskFullVolumeDose",
        "vm": "1",
    },
    "(300A,002B)": {
        "vr": "DS",
        "name": "OrganAtRiskLimitDose",
        "vm": "1",
    },
    "(300A,002C)": {
        "vr": "DS",
        "name": "OrganAtRiskMaximumDose",
        "vm": "1",
    },
    "(300A,002D)": {
        "vr": "DS",
        "name": "OrganAtRiskOverdoseVolumeFraction",
        "vm": "1",
    },
    "(300A,0040)": {
        "vr": "SQ",
        "name": "ToleranceTableSequence",
        "vm": "1",
    },
    "(300A,0042)": {
        "vr": "IS",
        "name": "ToleranceTableNumber",
        "vm": "1",
    },
    "(300A,0043)": {
        "vr": "SH",
        "name": "ToleranceTableLabel",
        "vm": "1",
    },
    "(300A,0044)": {
        "vr": "DS",
        "name": "GantryAngleTolerance",
        "vm": "1",
    },
    "(300A,0046)": {
        "vr": "DS",
        "name": "BeamLimitingDeviceAngleTolerance",
        "vm": "1",
    },
    "(300A,0048)": {
        "vr": "SQ",
        "name": "BeamLimitingDeviceToleranceSequence",
        "vm": "1",
    },
    "(300A,004A)": {
        "vr": "DS",
        "name": "BeamLimitingDevicePositionTolerance",
        "vm": "1",
    },
    "(300A,004B)": {
        "vr": "FL",
        "name": "SnoutPositionTolerance",
        "vm": "1",
    },
    "(300A,004C)": {
        "vr": "DS",
        "name": "PatientSupportAngleTolerance",
        "vm": "1",
    },
    "(300A,004E)": {
        "vr": "DS",
        "name": "TableTopEccentricAngleTolerance",
        "vm": "1",
    },
    "(300A,004F)": {
        "vr": "FL",
        "name": "TableTopPitchAngleTolerance",
        "vm": "1",
    },
    "(300A,0050)": {
        "vr": "FL",
        "name": "TableTopRollAngleTolerance",
        "vm": "1",
    },
    "(300A,0051)": {
        "vr": "DS",
        "name": "TableTopVerticalPositionTolerance",
        "vm": "1",
    },
    "(300A,0052)": {
        "vr": "DS",
        "name": "TableTopLongitudinalPositionTolerance",
        "vm": "1",
    },
    "(300A,0053)": {
        "vr": "DS",
        "name": "TableTopLateralPositionTolerance",
        "vm": "1",
    },
    "(300A,0055)": {
        "vr": "CS",
        "name": "RTPlanRelationship",
        "vm": "1",
    },
    "(300A,0070)": {
        "vr": "SQ",
        "name": "FractionGroupSequence",
        "vm": "1",
    },
    "(300A,0071)": {
        "vr": "IS",
        "name": "FractionGroupNumber",
        "vm": "1",
    },
    "(300A,0072)": {
        "vr": "LO",
        "name": "FractionGroupDescription",
        "vm": "1",
    },
    "(300A,0078)": {
        "vr": "IS",
        "name": "NumberOfFractionsPlanned",
        "vm": "1",
    },
    "(300A,0079)": {
        "vr": "IS",
        "name": "NumberOfFractionPatternDigitsPerDay",
        "vm": "1",
    },
    "(300A,007A)": {
        "vr": "IS",
        "name": "RepeatFractionCycleLength",
        "vm": "1",
    },
    "(300A,007B)": {
        "vr": "LT",
        "name": "FractionPattern",
        "vm": "1",
    },
    "(300A,0080)": {
        "vr": "IS",
        "name": "NumberOfBeams",
        "vm": "1",
    },
    "(300A,0082)": {
        "vr": "DS",
        "name": "BeamDoseSpecificationPoint",
        "vm": "3",
    },
    "(300A,0084)": {
        "vr": "DS",
        "name": "BeamDose",
        "vm": "1",
    },
    "(300A,0086)": {
        "vr": "DS",
        "name": "BeamMeterset",
        "vm": "1",
    },
    "(300A,008B)": {
        "vr": "CS",
        "name": "BeamDoseMeaning",
        "vm": "1",
    },
    "(300A,008C)": {
        "vr": "SQ",
        "name": "BeamDoseVerificationControlPointSequence",
        "vm": "1",
    },
    "(300A,008D)": {
        "vr": "FL",
        "name": "AverageBeamDosePointDepth",
        "vm": "1",
    },
    "(300A,008E)": {
        "vr": "FL",
        "name": "AverageBeamDosePointEquivalentDepth",
        "vm": "1",
    },
    "(300A,008F)": {
        "vr": "FL",
        "name": "AverageBeamDosePointSSD",
        "vm": "1",
    },
    "(300A,00A0)": {
        "vr": "IS",
        "name": "NumberOfBrachyApplicationSetups",
        "vm": "1",
    },
    "(300A,00A2)": {
        "vr": "DS",
        "name": "BrachyApplicationSetupDoseSpecificationPoint",
        "vm": "3",
    },
    "(300A,00A4)": {
        "vr": "DS",
        "name": "BrachyApplicationSetupDose",
        "vm": "1",
    },
    "(300A,00B0)": {
        "vr": "SQ",
        "name": "BeamSequence",
        "vm": "1",
    },
    "(300A,00B2)": {
        "vr": "SH",
        "name": "TreatmentMachineName",
        "vm": "1",
    },
    "(300A,00B3)": {
        "vr": "CS",
        "name": "PrimaryDosimeterUnit",
        "vm": "1",
    },
    "(300A,00B4)": {
        "vr": "DS",
        "name": "SourceAxisDistance",
        "vm": "1",
    },
    "(300A,00B6)": {
        "vr": "SQ",
        "name": "BeamLimitingDeviceSequence",
        "vm": "1",
    },
    "(300A,00B8)": {
        "vr": "CS",
        "name": "RTBeamLimitingDeviceType",
        "vm": "1",
    },
    "(300A,00BA)": {
        "vr": "DS",
        "name": "SourceToBeamLimitingDeviceDistance",
        "vm": "1",
    },
    "(300A,00BB)": {
        "vr": "FL",
        "name": "IsocenterToBeamLimitingDeviceDistance",
        "vm": "1",
    },
    "(300A,00BC)": {
        "vr": "IS",
        "name": "NumberOfLeafJawPairs",
        "vm": "1",
    },
    "(300A,00BE)": {
        "vr": "DS",
        "name": "LeafPositionBoundaries",
        "vm": "3-n",
    },
    "(300A,00C0)": {
        "vr": "IS",
        "name": "BeamNumber",
        "vm": "1",
    },
    "(300A,00C2)": {
        "vr": "LO",
        "name": "BeamName",
        "vm": "1",
    },
    "(300A,00C3)": {
        "vr": "ST",
        "name": "BeamDescription",
        "vm": "1",
    },
    "(300A,00C4)": {
        "vr": "CS",
        "name": "BeamType",
        "vm": "1",
    },
    "(300A,00C5)": {
        "vr": "FD",
        "name": "BeamDeliveryDurationLimit",
        "vm": "1",
    },
    "(300A,00C6)": {
        "vr": "CS",
        "name": "RadiationType",
        "vm": "1",
    },
    "(300A,00C7)": {
        "vr": "CS",
        "name": "HighDoseTechniqueType",
        "vm": "1",
    },
    "(300A,00C8)": {
        "vr": "IS",
        "name": "ReferenceImageNumber",
        "vm": "1",
    },
    "(300A,00CA)": {
        "vr": "SQ",
        "name": "PlannedVerificationImageSequence",
        "vm": "1",
    },
    "(300A,00CC)": {
        "vr": "LO",
        "name": "ImagingDeviceSpecificAcquisitionParameters",
        "vm": "1-n",
    },
    "(300A,00CE)": {
        "vr": "CS",
        "name": "TreatmentDeliveryType",
        "vm": "1",
    },
    "(300A,00D0)": {
        "vr": "IS",
        "name": "NumberOfWedges",
        "vm": "1",
    },
    "(300A,00D1)": {
        "vr": "SQ",
        "name": "WedgeSequence",
        "vm": "1",
    },
    "(300A,00D2)": {
        "vr": "IS",
        "name": "WedgeNumber",
        "vm": "1",
    },
    "(300A,00D3)": {
        "vr": "CS",
        "name": "WedgeType",
        "vm": "1",
    },
    "(300A,00D4)": {
        "vr": "SH",
        "name": "WedgeID",
        "vm": "1",
    },
    "(300A,00D5)": {
        "vr": "IS",
        "name": "WedgeAngle",
        "vm": "1",
    },
    "(300A,00D6)": {
        "vr": "DS",
        "name": "WedgeFactor",
        "vm": "1",
    },
    "(300A,00D7)": {
        "vr": "FL",
        "name": "TotalWedgeTrayWaterEquivalentThickness",
        "vm": "1",
    },
    "(300A,00D8)": {
        "vr": "DS",
        "name": "WedgeOrientation",
        "vm": "1",
    },
    "(300A,00D9)": {
        "vr": "FL",
        "name": "IsocenterToWedgeTrayDistance",
        "vm": "1",
    },
    "(300A,00DA)": {
        "vr": "DS",
        "name": "SourceToWedgeTrayDistance",
        "vm": "1",
    },
    "(300A,00DB)": {
        "vr": "FL",
        "name": "WedgeThinEdgePosition",
        "vm": "1",
    },
    "(300A,00DC)": {
        "vr": "SH",
        "name": "BolusID",
        "vm": "1",
    },
    "(300A,00DD)": {
        "vr": "ST",
        "name": "BolusDescription",
        "vm": "1",
    },
    "(300A,00DE)": {
        "vr": "DS",
        "name": "EffectiveWedgeAngle",
        "vm": "1",
    },
    "(300A,00E0)": {
        "vr": "IS",
        "name": "NumberOfCompensators",
        "vm": "1",
    },
    "(300A,00E1)": {
        "vr": "SH",
        "name": "MaterialID",
        "vm": "1",
    },
    "(300A,00E2)": {
        "vr": "DS",
        "name": "TotalCompensatorTrayFactor",
        "vm": "1",
    },
    "(300A,00E3)": {
        "vr": "SQ",
        "name": "CompensatorSequence",
        "vm": "1",
    },
    "(300A,00E4)": {
        "vr": "IS",
        "name": "CompensatorNumber",
        "vm": "1",
    },
    "(300A,00E5)": {
        "vr": "SH",
        "name": "CompensatorID",
        "vm": "1",
    },
    "(300A,00E6)": {
        "vr": "DS",
        "name": "SourceToCompensatorTrayDistance",
        "vm": "1",
    },
    "(300A,00E7)": {
        "vr": "IS",
        "name": "CompensatorRows",
        "vm": "1",
    },
    "(300A,00E8)": {
        "vr": "IS",
        "name": "CompensatorColumns",
        "vm": "1",
    },
    "(300A,00E9)": {
        "vr": "DS",
        "name": "CompensatorPixelSpacing",
        "vm": "2",
    },
    "(300A,00EA)": {
        "vr": "DS",
        "name": "CompensatorPosition",
        "vm": "2",
    },
    "(300A,00EB)": {
        "vr": "DS",
        "name": "CompensatorTransmissionData",
        "vm": "1-n",
    },
    "(300A,00EC)": {
        "vr": "DS",
        "name": "CompensatorThicknessData",
        "vm": "1-n",
    },
    "(300A,00ED)": {
        "vr": "IS",
        "name": "NumberOfBoli",
        "vm": "1",
    },
    "(300A,00EE)": {
        "vr": "CS",
        "name": "CompensatorType",
        "vm": "1",
    },
    "(300A,00EF)": {
        "vr": "SH",
        "name": "CompensatorTrayID",
        "vm": "1",
    },
    "(300A,00F0)": {
        "vr": "IS",
        "name": "NumberOfBlocks",
        "vm": "1",
    },
    "(300A,00F2)": {
        "vr": "DS",
        "name": "TotalBlockTrayFactor",
        "vm": "1",
    },
    "(300A,00F3)": {
        "vr": "FL",
        "name": "TotalBlockTrayWaterEquivalentThickness",
        "vm": "1",
    },
    "(300A,00F4)": {
        "vr": "SQ",
        "name": "BlockSequence",
        "vm": "1",
    },
    "(300A,00F5)": {
        "vr": "SH",
        "name": "BlockTrayID",
        "vm": "1",
    },
    "(300A,00F6)": {
        "vr": "DS",
        "name": "SourceToBlockTrayDistance",
        "vm": "1",
    },
    "(300A,00F7)": {
        "vr": "FL",
        "name": "IsocenterToBlockTrayDistance",
        "vm": "1",
    },
    "(300A,00F8)": {
        "vr": "CS",
        "name": "BlockType",
        "vm": "1",
    },
    "(300A,00F9)": {
        "vr": "LO",
        "name": "AccessoryCode",
        "vm": "1",
    },
    "(300A,00FA)": {
        "vr": "CS",
        "name": "BlockDivergence",
        "vm": "1",
    },
    "(300A,00FB)": {
        "vr": "CS",
        "name": "BlockMountingPosition",
        "vm": "1",
    },
    "(300A,00FC)": {
        "vr": "IS",
        "name": "BlockNumber",
        "vm": "1",
    },
    "(300A,00FE)": {
        "vr": "LO",
        "name": "BlockName",
        "vm": "1",
    },
    "(300A,0100)": {
        "vr": "DS",
        "name": "BlockThickness",
        "vm": "1",
    },
    "(300A,0102)": {
        "vr": "DS",
        "name": "BlockTransmission",
        "vm": "1",
    },
    "(300A,0104)": {
        "vr": "IS",
        "name": "BlockNumberOfPoints",
        "vm": "1",
    },
    "(300A,0106)": {
        "vr": "DS",
        "name": "BlockData",
        "vm": "2-2n",
    },
    "(300A,0107)": {
        "vr": "SQ",
        "name": "ApplicatorSequence",
        "vm": "1",
    },
    "(300A,0108)": {
        "vr": "SH",
        "name": "ApplicatorID",
        "vm": "1",
    },
    "(300A,0109)": {
        "vr": "CS",
        "name": "ApplicatorType",
        "vm": "1",
    },
    "(300A,010A)": {
        "vr": "LO",
        "name": "ApplicatorDescription",
        "vm": "1",
    },
    "(300A,010C)": {
        "vr": "DS",
        "name": "CumulativeDoseReferenceCoefficient",
        "vm": "1",
    },
    "(300A,010E)": {
        "vr": "DS",
        "name": "FinalCumulativeMetersetWeight",
        "vm": "1",
    },
    "(300A,0110)": {
        "vr": "IS",
        "name": "NumberOfControlPoints",
        "vm": "1",
    },
    "(300A,0111)": {
        "vr": "SQ",
        "name": "ControlPointSequence",
        "vm": "1",
    },
    "(300A,0112)": {
        "vr": "IS",
        "name": "ControlPointIndex",
        "vm": "1",
    },
    "(300A,0114)": {
        "vr": "DS",
        "name": "NominalBeamEnergy",
        "vm": "1",
    },
    "(300A,0115)": {
        "vr": "DS",
        "name": "DoseRateSet",
        "vm": "1",
    },
    "(300A,0116)": {
        "vr": "SQ",
        "name": "WedgePositionSequence",
        "vm": "1",
    },
    "(300A,0118)": {
        "vr": "CS",
        "name": "WedgePosition",
        "vm": "1",
    },
    "(300A,011A)": {
        "vr": "SQ",
        "name": "BeamLimitingDevicePositionSequence",
        "vm": "1",
    },
    "(300A,011C)": {
        "vr": "DS",
        "name": "LeafJawPositions",
        "vm": "2-2n",
    },
    "(300A,011E)": {
        "vr": "DS",
        "name": "GantryAngle",
        "vm": "1",
    },
    "(300A,011F)": {
        "vr": "CS",
        "name": "GantryRotationDirection",
        "vm": "1",
    },
    "(300A,0120)": {
        "vr": "DS",
        "name": "BeamLimitingDeviceAngle",
        "vm": "1",
    },
    "(300A,0121)": {
        "vr": "CS",
        "name": "BeamLimitingDeviceRotationDirection",
        "vm": "1",
    },
    "(300A,0122)": {
        "vr": "DS",
        "name": "PatientSupportAngle",
        "vm": "1",
    },
    "(300A,0123)": {
        "vr": "CS",
        "name": "PatientSupportRotationDirection",
        "vm": "1",
    },
    "(300A,0124)": {
        "vr": "DS",
        "name": "TableTopEccentricAxisDistance",
        "vm": "1",
    },
    "(300A,0125)": {
        "vr": "DS",
        "name": "TableTopEccentricAngle",
        "vm": "1",
    },
    "(300A,0126)": {
        "vr": "CS",
        "name": "TableTopEccentricRotationDirection",
        "vm": "1",
    },
    "(300A,0128)": {
        "vr": "DS",
        "name": "TableTopVerticalPosition",
        "vm": "1",
    },
    "(300A,0129)": {
        "vr": "DS",
        "name": "TableTopLongitudinalPosition",
        "vm": "1",
    },
    "(300A,012A)": {
        "vr": "DS",
        "name": "TableTopLateralPosition",
        "vm": "1",
    },
    "(300A,012C)": {
        "vr": "DS",
        "name": "IsocenterPosition",
        "vm": "3",
    },
    "(300A,012E)": {
        "vr": "DS",
        "name": "SurfaceEntryPoint",
        "vm": "3",
    },
    "(300A,0130)": {
        "vr": "DS",
        "name": "SourceToSurfaceDistance",
        "vm": "1",
    },
    "(300A,0131)": {
        "vr": "FL",
        "name": "AverageBeamDosePointSourceToExternalContourSurfaceDistance",
        "vm": "1",
    },
    "(300A,0132)": {
        "vr": "FL",
        "name": "SourceToExternalContourDistance",
        "vm": "1",
    },
    "(300A,0133)": {
        "vr": "FL",
        "name": "ExternalContourEntryPoint",
        "vm": "3",
    },
    "(300A,0134)": {
        "vr": "DS",
        "name": "CumulativeMetersetWeight",
        "vm": "1",
    },
    "(300A,0140)": {
        "vr": "FL",
        "name": "TableTopPitchAngle",
        "vm": "1",
    },
    "(300A,0142)": {
        "vr": "CS",
        "name": "TableTopPitchRotationDirection",
        "vm": "1",
    },
    "(300A,0144)": {
        "vr": "FL",
        "name": "TableTopRollAngle",
        "vm": "1",
    },
    "(300A,0146)": {
        "vr": "CS",
        "name": "TableTopRollRotationDirection",
        "vm": "1",
    },
    "(300A,0148)": {
        "vr": "FL",
        "name": "HeadFixationAngle",
        "vm": "1",
    },
    "(300A,014A)": {
        "vr": "FL",
        "name": "GantryPitchAngle",
        "vm": "1",
    },
    "(300A,014C)": {
        "vr": "CS",
        "name": "GantryPitchRotationDirection",
        "vm": "1",
    },
    "(300A,014E)": {
        "vr": "FL",
        "name": "GantryPitchAngleTolerance",
        "vm": "1",
    },
    "(300A,0180)": {
        "vr": "SQ",
        "name": "PatientSetupSequence",
        "vm": "1",
    },
    "(300A,0182)": {
        "vr": "IS",
        "name": "PatientSetupNumber",
        "vm": "1",
    },
    "(300A,0183)": {
        "vr": "LO",
        "name": "PatientSetupLabel",
        "vm": "1",
    },
    "(300A,0184)": {
        "vr": "LO",
        "name": "PatientAdditionalPosition",
        "vm": "1",
    },
    "(300A,0190)": {
        "vr": "SQ",
        "name": "FixationDeviceSequence",
        "vm": "1",
    },
    "(300A,0192)": {
        "vr": "CS",
        "name": "FixationDeviceType",
        "vm": "1",
    },
    "(300A,0194)": {
        "vr": "SH",
        "name": "FixationDeviceLabel",
        "vm": "1",
    },
    "(300A,0196)": {
        "vr": "ST",
        "name": "FixationDeviceDescription",
        "vm": "1",
    },
    "(300A,0198)": {
        "vr": "SH",
        "name": "FixationDevicePosition",
        "vm": "1",
    },
    "(300A,0199)": {
        "vr": "FL",
        "name": "FixationDevicePitchAngle",
        "vm": "1",
    },
    "(300A,019A)": {
        "vr": "FL",
        "name": "FixationDeviceRollAngle",
        "vm": "1",
    },
    "(300A,01A0)": {
        "vr": "SQ",
        "name": "ShieldingDeviceSequence",
        "vm": "1",
    },
    "(300A,01A2)": {
        "vr": "CS",
        "name": "ShieldingDeviceType",
        "vm": "1",
    },
    "(300A,01A4)": {
        "vr": "SH",
        "name": "ShieldingDeviceLabel",
        "vm": "1",
    },
    "(300A,01A6)": {
        "vr": "ST",
        "name": "ShieldingDeviceDescription",
        "vm": "1",
    },
    "(300A,01A8)": {
        "vr": "SH",
        "name": "ShieldingDevicePosition",
        "vm": "1",
    },
    "(300A,01B0)": {
        "vr": "CS",
        "name": "SetupTechnique",
        "vm": "1",
    },
    "(300A,01B2)": {
        "vr": "ST",
        "name": "SetupTechniqueDescription",
        "vm": "1",
    },
    "(300A,01B4)": {
        "vr": "SQ",
        "name": "SetupDeviceSequence",
        "vm": "1",
    },
    "(300A,01B6)": {
        "vr": "CS",
        "name": "SetupDeviceType",
        "vm": "1",
    },
    "(300A,01B8)": {
        "vr": "SH",
        "name": "SetupDeviceLabel",
        "vm": "1",
    },
    "(300A,01BA)": {
        "vr": "ST",
        "name": "SetupDeviceDescription",
        "vm": "1",
    },
    "(300A,01BC)": {
        "vr": "DS",
        "name": "SetupDeviceParameter",
        "vm": "1",
    },
    "(300A,01D0)": {
        "vr": "ST",
        "name": "SetupReferenceDescription",
        "vm": "1",
    },
    "(300A,01D2)": {
        "vr": "DS",
        "name": "TableTopVerticalSetupDisplacement",
        "vm": "1",
    },
    "(300A,01D4)": {
        "vr": "DS",
        "name": "TableTopLongitudinalSetupDisplacement",
        "vm": "1",
    },
    "(300A,01D6)": {
        "vr": "DS",
        "name": "TableTopLateralSetupDisplacement",
        "vm": "1",
    },
    "(300A,0200)": {
        "vr": "CS",
        "name": "BrachyTreatmentTechnique",
        "vm": "1",
    },
    "(300A,0202)": {
        "vr": "CS",
        "name": "BrachyTreatmentType",
        "vm": "1",
    },
    "(300A,0206)": {
        "vr": "SQ",
        "name": "TreatmentMachineSequence",
        "vm": "1",
    },
    "(300A,0210)": {
        "vr": "SQ",
        "name": "SourceSequence",
        "vm": "1",
    },
    "(300A,0212)": {
        "vr": "IS",
        "name": "SourceNumber",
        "vm": "1",
    },
    "(300A,0214)": {
        "vr": "CS",
        "name": "SourceType",
        "vm": "1",
    },
    "(300A,0216)": {
        "vr": "LO",
        "name": "SourceManufacturer",
        "vm": "1",
    },
    "(300A,0218)": {
        "vr": "DS",
        "name": "ActiveSourceDiameter",
        "vm": "1",
    },
    "(300A,021A)": {
        "vr": "DS",
        "name": "ActiveSourceLength",
        "vm": "1",
    },
    "(300A,021B)": {
        "vr": "SH",
        "name": "SourceModelID",
        "vm": "1",
    },
    "(300A,021C)": {
        "vr": "LO",
        "name": "SourceDescription",
        "vm": "1",
    },
    "(300A,0222)": {
        "vr": "DS",
        "name": "SourceEncapsulationNominalThickness",
        "vm": "1",
    },
    "(300A,0224)": {
        "vr": "DS",
        "name": "SourceEncapsulationNominalTransmission",
        "vm": "1",
    },
    "(300A,0226)": {
        "vr": "LO",
        "name": "SourceIsotopeName",
        "vm": "1",
    },
    "(300A,0228)": {
        "vr": "DS",
        "name": "SourceIsotopeHalfLife",
        "vm": "1",
    },
    "(300A,0229)": {
        "vr": "CS",
        "name": "SourceStrengthUnits",
        "vm": "1",
    },
    "(300A,022A)": {
        "vr": "DS",
        "name": "ReferenceAirKermaRate",
        "vm": "1",
    },
    "(300A,022B)": {
        "vr": "DS",
        "name": "SourceStrength",
        "vm": "1",
    },
    "(300A,022C)": {
        "vr": "DA",
        "name": "SourceStrengthReferenceDate",
        "vm": "1",
    },
    "(300A,022E)": {
        "vr": "TM",
        "name": "SourceStrengthReferenceTime",
        "vm": "1",
    },
    "(300A,0230)": {
        "vr": "SQ",
        "name": "ApplicationSetupSequence",
        "vm": "1",
    },
    "(300A,0232)": {
        "vr": "CS",
        "name": "ApplicationSetupType",
        "vm": "1",
    },
    "(300A,0234)": {
        "vr": "IS",
        "name": "ApplicationSetupNumber",
        "vm": "1",
    },
    "(300A,0236)": {
        "vr": "LO",
        "name": "ApplicationSetupName",
        "vm": "1",
    },
    "(300A,0238)": {
        "vr": "LO",
        "name": "ApplicationSetupManufacturer",
        "vm": "1",
    },
    "(300A,0240)": {
        "vr": "IS",
        "name": "TemplateNumber",
        "vm": "1",
    },
    "(300A,0242)": {
        "vr": "SH",
        "name": "TemplateType",
        "vm": "1",
    },
    "(300A,0244)": {
        "vr": "LO",
        "name": "TemplateName",
        "vm": "1",
    },
    "(300A,0250)": {
        "vr": "DS",
        "name": "TotalReferenceAirKerma",
        "vm": "1",
    },
    "(300A,0260)": {
        "vr": "SQ",
        "name": "BrachyAccessoryDeviceSequence",
        "vm": "1",
    },
    "(300A,0262)": {
        "vr": "IS",
        "name": "BrachyAccessoryDeviceNumber",
        "vm": "1",
    },
    "(300A,0263)": {
        "vr": "SH",
        "name": "BrachyAccessoryDeviceID",
        "vm": "1",
    },
    "(300A,0264)": {
        "vr": "CS",
        "name": "BrachyAccessoryDeviceType",
        "vm": "1",
    },
    "(300A,0266)": {
        "vr": "LO",
        "name": "BrachyAccessoryDeviceName",
        "vm": "1",
    },
    "(300A,026A)": {
        "vr": "DS",
        "name": "BrachyAccessoryDeviceNominalThickness",
        "vm": "1",
    },
    "(300A,026C)": {
        "vr": "DS",
        "name": "BrachyAccessoryDeviceNominalTransmission",
        "vm": "1",
    },
    "(300A,0280)": {
        "vr": "SQ",
        "name": "ChannelSequence",
        "vm": "1",
    },
    "(300A,0282)": {
        "vr": "IS",
        "name": "ChannelNumber",
        "vm": "1",
    },
    "(300A,0284)": {
        "vr": "DS",
        "name": "ChannelLength",
        "vm": "1",
    },
    "(300A,0286)": {
        "vr": "DS",
        "name": "ChannelTotalTime",
        "vm": "1",
    },
    "(300A,0288)": {
        "vr": "CS",
        "name": "SourceMovementType",
        "vm": "1",
    },
    "(300A,028A)": {
        "vr": "IS",
        "name": "NumberOfPulses",
        "vm": "1",
    },
    "(300A,028C)": {
        "vr": "DS",
        "name": "PulseRepetitionInterval",
        "vm": "1",
    },
    "(300A,0290)": {
        "vr": "IS",
        "name": "SourceApplicatorNumber",
        "vm": "1",
    },
    "(300A,0291)": {
        "vr": "SH",
        "name": "SourceApplicatorID",
        "vm": "1",
    },
    "(300A,0292)": {
        "vr": "CS",
        "name": "SourceApplicatorType",
        "vm": "1",
    },
    "(300A,0294)": {
        "vr": "LO",
        "name": "SourceApplicatorName",
        "vm": "1",
    },
    "(300A,0296)": {
        "vr": "DS",
        "name": "SourceApplicatorLength",
        "vm": "1",
    },
    "(300A,0298)": {
        "vr": "LO",
        "name": "SourceApplicatorManufacturer",
        "vm": "1",
    },
    "(300A,029C)": {
        "vr": "DS",
        "name": "SourceApplicatorWallNominalThickness",
        "vm": "1",
    },
    "(300A,029E)": {
        "vr": "DS",
        "name": "SourceApplicatorWallNominalTransmission",
        "vm": "1",
    },
    "(300A,02A0)": {
        "vr": "DS",
        "name": "SourceApplicatorStepSize",
        "vm": "1",
    },
    "(300A,02A2)": {
        "vr": "IS",
        "name": "TransferTubeNumber",
        "vm": "1",
    },
    "(300A,02A4)": {
        "vr": "DS",
        "name": "TransferTubeLength",
        "vm": "1",
    },
    "(300A,02B0)": {
        "vr": "SQ",
        "name": "ChannelShieldSequence",
        "vm": "1",
    },
    "(300A,02B2)": {
        "vr": "IS",
        "name": "ChannelShieldNumber",
        "vm": "1",
    },
    "(300A,02B3)": {
        "vr": "SH",
        "name": "ChannelShieldID",
        "vm": "1",
    },
    "(300A,02B4)": {
        "vr": "LO",
        "name": "ChannelShieldName",
        "vm": "1",
    },
    "(300A,02B8)": {
        "vr": "DS",
        "name": "ChannelShieldNominalThickness",
        "vm": "1",
    },
    "(300A,02BA)": {
        "vr": "DS",
        "name": "ChannelShieldNominalTransmission",
        "vm": "1",
    },
    "(300A,02C8)": {
        "vr": "DS",
        "name": "FinalCumulativeTimeWeight",
        "vm": "1",
    },
    "(300A,02D0)": {
        "vr": "SQ",
        "name": "BrachyControlPointSequence",
        "vm": "1",
    },
    "(300A,02D2)": {
        "vr": "DS",
        "name": "ControlPointRelativePosition",
        "vm": "1",
    },
    "(300A,02D4)": {
        "vr": "DS",
        "name": "ControlPoint3DPosition",
        "vm": "3",
    },
    "(300A,02D6)": {
        "vr": "DS",
        "name": "CumulativeTimeWeight",
        "vm": "1",
    },
    "(300A,02E0)": {
        "vr": "CS",
        "name": "CompensatorDivergence",
        "vm": "1",
    },
    "(300A,02E1)": {
        "vr": "CS",
        "name": "CompensatorMountingPosition",
        "vm": "1",
    },
    "(300A,02E2)": {
        "vr": "DS",
        "name": "SourceToCompensatorDistance",
        "vm": "1-n",
    },
    "(300A,02E3)": {
        "vr": "FL",
        "name": "TotalCompensatorTrayWaterEquivalentThickness",
        "vm": "1",
    },
    "(300A,02E4)": {
        "vr": "FL",
        "name": "IsocenterToCompensatorTrayDistance",
        "vm": "1",
    },
    "(300A,02E5)": {
        "vr": "FL",
        "name": "CompensatorColumnOffset",
        "vm": "1",
    },
    "(300A,02E6)": {
        "vr": "FL",
        "name": "IsocenterToCompensatorDistances",
        "vm": "1-n",
    },
    "(300A,02E7)": {
        "vr": "FL",
        "name": "CompensatorRelativeStoppingPowerRatio",
        "vm": "1",
    },
    "(300A,02E8)": {
        "vr": "FL",
        "name": "CompensatorMillingToolDiameter",
        "vm": "1",
    },
    "(300A,02EA)": {
        "vr": "SQ",
        "name": "IonRangeCompensatorSequence",
        "vm": "1",
    },
    "(300A,02EB)": {
        "vr": "LT",
        "name": "CompensatorDescription",
        "vm": "1",
    },
    "(300A,0302)": {
        "vr": "IS",
        "name": "RadiationMassNumber",
        "vm": "1",
    },
    "(300A,0304)": {
        "vr": "IS",
        "name": "RadiationAtomicNumber",
        "vm": "1",
    },
    "(300A,0306)": {
        "vr": "SS",
        "name": "RadiationChargeState",
        "vm": "1",
    },
    "(300A,0308)": {
        "vr": "CS",
        "name": "ScanMode",
        "vm": "1",
    },
    "(300A,030A)": {
        "vr": "FL",
        "name": "VirtualSourceAxisDistances",
        "vm": "2",
    },
    "(300A,030C)": {
        "vr": "SQ",
        "name": "SnoutSequence",
        "vm": "1",
    },
    "(300A,030D)": {
        "vr": "FL",
        "name": "SnoutPosition",
        "vm": "1",
    },
    "(300A,030F)": {
        "vr": "SH",
        "name": "SnoutID",
        "vm": "1",
    },
    "(300A,0312)": {
        "vr": "IS",
        "name": "NumberOfRangeShifters",
        "vm": "1",
    },
    "(300A,0314)": {
        "vr": "SQ",
        "name": "RangeShifterSequence",
        "vm": "1",
    },
    "(300A,0316)": {
        "vr": "IS",
        "name": "RangeShifterNumber",
        "vm": "1",
    },
    "(300A,0318)": {
        "vr": "SH",
        "name": "RangeShifterID",
        "vm": "1",
    },
    "(300A,0320)": {
        "vr": "CS",
        "name": "RangeShifterType",
        "vm": "1",
    },
    "(300A,0322)": {
        "vr": "LO",
        "name": "RangeShifterDescription",
        "vm": "1",
    },
    "(300A,0330)": {
        "vr": "IS",
        "name": "NumberOfLateralSpreadingDevices",
        "vm": "1",
    },
    "(300A,0332)": {
        "vr": "SQ",
        "name": "LateralSpreadingDeviceSequence",
        "vm": "1",
    },
    "(300A,0334)": {
        "vr": "IS",
        "name": "LateralSpreadingDeviceNumber",
        "vm": "1",
    },
    "(300A,0336)": {
        "vr": "SH",
        "name": "LateralSpreadingDeviceID",
        "vm": "1",
    },
    "(300A,0338)": {
        "vr": "CS",
        "name": "LateralSpreadingDeviceType",
        "vm": "1",
    },
    "(300A,033A)": {
        "vr": "LO",
        "name": "LateralSpreadingDeviceDescription",
        "vm": "1",
    },
    "(300A,033C)": {
        "vr": "FL",
        "name": "LateralSpreadingDeviceWaterEquivalentThickness",
        "vm": "1",
    },
    "(300A,0340)": {
        "vr": "IS",
        "name": "NumberOfRangeModulators",
        "vm": "1",
    },
    "(300A,0342)": {
        "vr": "SQ",
        "name": "RangeModulatorSequence",
        "vm": "1",
    },
    "(300A,0344)": {
        "vr": "IS",
        "name": "RangeModulatorNumber",
        "vm": "1",
    },
    "(300A,0346)": {
        "vr": "SH",
        "name": "RangeModulatorID",
        "vm": "1",
    },
    "(300A,0348)": {
        "vr": "CS",
        "name": "RangeModulatorType",
        "vm": "1",
    },
    "(300A,034A)": {
        "vr": "LO",
        "name": "RangeModulatorDescription",
        "vm": "1",
    },
    "(300A,034C)": {
        "vr": "SH",
        "name": "BeamCurrentModulationID",
        "vm": "1",
    },
    "(300A,0350)": {
        "vr": "CS",
        "name": "PatientSupportType",
        "vm": "1",
    },
    "(300A,0352)": {
        "vr": "SH",
        "name": "PatientSupportID",
        "vm": "1",
    },
    "(300A,0354)": {
        "vr": "LO",
        "name": "PatientSupportAccessoryCode",
        "vm": "1",
    },
    "(300A,0356)": {
        "vr": "FL",
        "name": "FixationLightAzimuthalAngle",
        "vm": "1",
    },
    "(300A,0358)": {
        "vr": "FL",
        "name": "FixationLightPolarAngle",
        "vm": "1",
    },
    "(300A,035A)": {
        "vr": "FL",
        "name": "MetersetRate",
        "vm": "1",
    },
    "(300A,0360)": {
        "vr": "SQ",
        "name": "RangeShifterSettingsSequence",
        "vm": "1",
    },
    "(300A,0362)": {
        "vr": "LO",
        "name": "RangeShifterSetting",
        "vm": "1",
    },
    "(300A,0364)": {
        "vr": "FL",
        "name": "IsocenterToRangeShifterDistance",
        "vm": "1",
    },
    "(300A,0366)": {
        "vr": "FL",
        "name": "RangeShifterWaterEquivalentThickness",
        "vm": "1",
    },
    "(300A,0370)": {
        "vr": "SQ",
        "name": "LateralSpreadingDeviceSettingsSequence",
        "vm": "1",
    },
    "(300A,0372)": {
        "vr": "LO",
        "name": "LateralSpreadingDeviceSetting",
        "vm": "1",
    },
    "(300A,0374)": {
        "vr": "FL",
        "name": "IsocenterToLateralSpreadingDeviceDistance",
        "vm": "1",
    },
    "(300A,0380)": {
        "vr": "SQ",
        "name": "RangeModulatorSettingsSequence",
        "vm": "1",
    },
    "(300A,0382)": {
        "vr": "FL",
        "name": "RangeModulatorGatingStartValue",
        "vm": "1",
    },
    "(300A,0384)": {
        "vr": "FL",
        "name": "RangeModulatorGatingStopValue",
        "vm": "1",
    },
    "(300A,0386)": {
        "vr": "FL",
        "name": "RangeModulatorGatingStartWaterEquivalentThickness",
        "vm": "1",
    },
    "(300A,0388)": {
        "vr": "FL",
        "name": "RangeModulatorGatingStopWaterEquivalentThickness",
        "vm": "1",
    },
    "(300A,038A)": {
        "vr": "FL",
        "name": "IsocenterToRangeModulatorDistance",
        "vm": "1",
    },
    "(300A,0390)": {
        "vr": "SH",
        "name": "ScanSpotTuneID",
        "vm": "1",
    },
    "(300A,0392)": {
        "vr": "IS",
        "name": "NumberOfScanSpotPositions",
        "vm": "1",
    },
    "(300A,0394)": {
        "vr": "FL",
        "name": "ScanSpotPositionMap",
        "vm": "1-n",
    },
    "(300A,0396)": {
        "vr": "FL",
        "name": "ScanSpotMetersetWeights",
        "vm": "1-n",
    },
    "(300A,0398)": {
        "vr": "FL",
        "name": "ScanningSpotSize",
        "vm": "2",
    },
    "(300A,039A)": {
        "vr": "IS",
        "name": "NumberOfPaintings",
        "vm": "1",
    },
    "(300A,03A0)": {
        "vr": "SQ",
        "name": "IonToleranceTableSequence",
        "vm": "1",
    },
    "(300A,03A2)": {
        "vr": "SQ",
        "name": "IonBeamSequence",
        "vm": "1",
    },
    "(300A,03A4)": {
        "vr": "SQ",
        "name": "IonBeamLimitingDeviceSequence",
        "vm": "1",
    },
    "(300A,03A6)": {
        "vr": "SQ",
        "name": "IonBlockSequence",
        "vm": "1",
    },
    "(300A,03A8)": {
        "vr": "SQ",
        "name": "IonControlPointSequence",
        "vm": "1",
    },
    "(300A,03AA)": {
        "vr": "SQ",
        "name": "IonWedgeSequence",
        "vm": "1",
    },
    "(300A,03AC)": {
        "vr": "SQ",
        "name": "IonWedgePositionSequence",
        "vm": "1",
    },
    "(300A,0401)": {
        "vr": "SQ",
        "name": "ReferencedSetupImageSequence",
        "vm": "1",
    },
    "(300A,0402)": {
        "vr": "ST",
        "name": "SetupImageComment",
        "vm": "1",
    },
    "(300A,0410)": {
        "vr": "SQ",
        "name": "MotionSynchronizationSequence",
        "vm": "1",
    },
    "(300A,0412)": {
        "vr": "FL",
        "name": "ControlPointOrientation",
        "vm": "3",
    },
    "(300A,0420)": {
        "vr": "SQ",
        "name": "GeneralAccessorySequence",
        "vm": "1",
    },
    "(300A,0421)": {
        "vr": "SH",
        "name": "GeneralAccessoryID",
        "vm": "1",
    },
    "(300A,0422)": {
        "vr": "ST",
        "name": "GeneralAccessoryDescription",
        "vm": "1",
    },
    "(300A,0423)": {
        "vr": "CS",
        "name": "GeneralAccessoryType",
        "vm": "1",
    },
    "(300A,0424)": {
        "vr": "IS",
        "name": "GeneralAccessoryNumber",
        "vm": "1",
    },
    "(300A,0425)": {
        "vr": "FL",
        "name": "SourceToGeneralAccessoryDistance",
        "vm": "1",
    },
    "(300A,0431)": {
        "vr": "SQ",
        "name": "ApplicatorGeometrySequence",
        "vm": "1",
    },
    "(300A,0432)": {
        "vr": "CS",
        "name": "ApplicatorApertureShape",
        "vm": "1",
    },
    "(300A,0433)": {
        "vr": "FL",
        "name": "ApplicatorOpening",
        "vm": "1",
    },
    "(300A,0434)": {
        "vr": "FL",
        "name": "ApplicatorOpeningX",
        "vm": "1",
    },
    "(300A,0435)": {
        "vr": "FL",
        "name": "ApplicatorOpeningY",
        "vm": "1",
    },
    "(300A,0436)": {
        "vr": "FL",
        "name": "SourceToApplicatorMountingPositionDistance",
        "vm": "1",
    },
    "(300A,0440)": {
        "vr": "IS",
        "name": "NumberOfBlockSlabItems",
        "vm": "1",
    },
    "(300A,0441)": {
        "vr": "SQ",
        "name": "BlockSlabSequence",
        "vm": "1",
    },
    "(300A,0442)": {
        "vr": "DS",
        "name": "BlockSlabThickness",
        "vm": "1",
    },
    "(300A,0443)": {
        "vr": "US",
        "name": "BlockSlabNumber",
        "vm": "1",
    },
    "(300A,0450)": {
        "vr": "SQ",
        "name": "DeviceMotionControlSequence",
        "vm": "1",
    },
    "(300A,0451)": {
        "vr": "CS",
        "name": "DeviceMotionExecutionMode",
        "vm": "1",
    },
    "(300A,0452)": {
        "vr": "CS",
        "name": "DeviceMotionObservationMode",
        "vm": "1",
    },
    "(300A,0453)": {
        "vr": "SQ",
        "name": "DeviceMotionParameterCodeSequence",
        "vm": "1",
    },
    "(300C,0002)": {
        "vr": "SQ",
        "name": "ReferencedRTPlanSequence",
        "vm": "1",
    },
    "(300C,0004)": {
        "vr": "SQ",
        "name": "ReferencedBeamSequence",
        "vm": "1",
    },
    "(300C,0006)": {
        "vr": "IS",
        "name": "ReferencedBeamNumber",
        "vm": "1",
    },
    "(300C,0007)": {
        "vr": "IS",
        "name": "ReferencedReferenceImageNumber",
        "vm": "1",
    },
    "(300C,0008)": {
        "vr": "DS",
        "name": "StartCumulativeMetersetWeight",
        "vm": "1",
    },
    "(300C,0009)": {
        "vr": "DS",
        "name": "EndCumulativeMetersetWeight",
        "vm": "1",
    },
    "(300C,000A)": {
        "vr": "SQ",
        "name": "ReferencedBrachyApplicationSetupSequence",
        "vm": "1",
    },
    "(300C,000C)": {
        "vr": "IS",
        "name": "ReferencedBrachyApplicationSetupNumber",
        "vm": "1",
    },
    "(300C,000E)": {
        "vr": "IS",
        "name": "ReferencedSourceNumber",
        "vm": "1",
    },
    "(300C,0020)": {
        "vr": "SQ",
        "name": "ReferencedFractionGroupSequence",
        "vm": "1",
    },
    "(300C,0022)": {
        "vr": "IS",
        "name": "ReferencedFractionGroupNumber",
        "vm": "1",
    },
    "(300C,0040)": {
        "vr": "SQ",
        "name": "ReferencedVerificationImageSequence",
        "vm": "1",
    },
    "(300C,0042)": {
        "vr": "SQ",
        "name": "ReferencedReferenceImageSequence",
        "vm": "1",
    },
    "(300C,0050)": {
        "vr": "SQ",
        "name": "ReferencedDoseReferenceSequence",
        "vm": "1",
    },
    "(300C,0051)": {
        "vr": "IS",
        "name": "ReferencedDoseReferenceNumber",
        "vm": "1",
    },
    "(300C,0055)": {
        "vr": "SQ",
        "name": "BrachyReferencedDoseReferenceSequence",
        "vm": "1",
    },
    "(300C,0060)": {
        "vr": "SQ",
        "name": "ReferencedStructureSetSequence",
        "vm": "1",
    },
    "(300C,006A)": {
        "vr": "IS",
        "name": "ReferencedPatientSetupNumber",
        "vm": "1",
    },
    "(300C,0080)": {
        "vr": "SQ",
        "name": "ReferencedDoseSequence",
        "vm": "1",
    },
    "(300C,00A0)": {
        "vr": "IS",
        "name": "ReferencedToleranceTableNumber",
        "vm": "1",
    },
    "(300C,00B0)": {
        "vr": "SQ",
        "name": "ReferencedBolusSequence",
        "vm": "1",
    },
    "(300C,00C0)": {
        "vr": "IS",
        "name": "ReferencedWedgeNumber",
        "vm": "1",
    },
    "(300C,00D0)": {
        "vr": "IS",
        "name": "ReferencedCompensatorNumber",
        "vm": "1",
    },
    "(300C,00E0)": {
        "vr": "IS",
        "name": "ReferencedBlockNumber",
        "vm": "1",
    },
    "(300C,00F0)": {
        "vr": "IS",
        "name": "ReferencedControlPointIndex",
        "vm": "1",
    },
    "(300C,00F2)": {
        "vr": "SQ",
        "name": "ReferencedControlPointSequence",
        "vm": "1",
    },
    "(300C,00F4)": {
        "vr": "IS",
        "name": "ReferencedStartControlPointIndex",
        "vm": "1",
    },
    "(300C,00F6)": {
        "vr": "IS",
        "name": "ReferencedStopControlPointIndex",
        "vm": "1",
    },
    "(300C,0100)": {
        "vr": "IS",
        "name": "ReferencedRangeShifterNumber",
        "vm": "1",
    },
    "(300C,0102)": {
        "vr": "IS",
        "name": "ReferencedLateralSpreadingDeviceNumber",
        "vm": "1",
    },
    "(300C,0104)": {
        "vr": "IS",
        "name": "ReferencedRangeModulatorNumber",
        "vm": "1",
    },
    "(300C,0111)": {
        "vr": "SQ",
        "name": "OmittedBeamTaskSequence",
        "vm": "1",
    },
    "(300C,0112)": {
        "vr": "CS",
        "name": "ReasonForOmission",
        "vm": "1",
    },
    "(300C,0113)": {
        "vr": "LO",
        "name": "ReasonForOmissionDescription",
        "vm": "1",
    },
    "(300E,0002)": {
        "vr": "CS",
        "name": "ApprovalStatus",
        "vm": "1",
    },
    "(300E,0004)": {
        "vr": "DA",
        "name": "ReviewDate",
        "vm": "1",
    },
    "(300E,0005)": {
        "vr": "TM",
        "name": "ReviewTime",
        "vm": "1",
    },
    "(300E,0008)": {
        "vr": "PN",
        "name": "ReviewerName",
        "vm": "1",
    },
    "(4010,0001)": {
        "vr": "CS",
        "name": "LowEnergyDetectors",
        "vm": "1",
    },
    "(4010,0002)": {
        "vr": "CS",
        "name": "HighEnergyDetectors",
        "vm": "1",
    },
    "(4010,0004)": {
        "vr": "SQ",
        "name": "DetectorGeometrySequence",
        "vm": "1",
    },
    "(4010,1001)": {
        "vr": "SQ",
        "name": "ThreatROIVoxelSequence",
        "vm": "1",
    },
    "(4010,1004)": {
        "vr": "FL",
        "name": "ThreatROIBase",
        "vm": "3",
    },
    "(4010,1005)": {
        "vr": "FL",
        "name": "ThreatROIExtents",
        "vm": "3",
    },
    "(4010,1006)": {
        "vr": "OB",
        "name": "ThreatROIBitmap",
        "vm": "1",
    },
    "(4010,1007)": {
        "vr": "SH",
        "name": "RouteSegmentID",
        "vm": "1",
    },
    "(4010,1008)": {
        "vr": "CS",
        "name": "GantryType",
        "vm": "1",
    },
    "(4010,1009)": {
        "vr": "CS",
        "name": "OOIOwnerType",
        "vm": "1",
    },
    "(4010,100A)": {
        "vr": "SQ",
        "name": "RouteSegmentSequence",
        "vm": "1",
    },
    "(4010,1010)": {
        "vr": "US",
        "name": "PotentialThreatObjectID",
        "vm": "1",
    },
    "(4010,1011)": {
        "vr": "SQ",
        "name": "ThreatSequence",
        "vm": "1",
    },
    "(4010,1012)": {
        "vr": "CS",
        "name": "ThreatCategory",
        "vm": "1",
    },
    "(4010,1013)": {
        "vr": "LT",
        "name": "ThreatCategoryDescription",
        "vm": "1",
    },
    "(4010,1014)": {
        "vr": "CS",
        "name": "ATDAbilityAssessment",
        "vm": "1",
    },
    "(4010,1015)": {
        "vr": "CS",
        "name": "ATDAssessmentFlag",
        "vm": "1",
    },
    "(4010,1016)": {
        "vr": "FL",
        "name": "ATDAssessmentProbability",
        "vm": "1",
    },
    "(4010,1017)": {
        "vr": "FL",
        "name": "Mass",
        "vm": "1",
    },
    "(4010,1018)": {
        "vr": "FL",
        "name": "Density",
        "vm": "1",
    },
    "(4010,1019)": {
        "vr": "FL",
        "name": "ZEffective",
        "vm": "1",
    },
    "(4010,101A)": {
        "vr": "SH",
        "name": "BoardingPassID",
        "vm": "1",
    },
    "(4010,101B)": {
        "vr": "FL",
        "name": "CenterOfMass",
        "vm": "3",
    },
    "(4010,101C)": {
        "vr": "FL",
        "name": "CenterOfPTO",
        "vm": "3",
    },
    "(4010,101D)": {
        "vr": "FL",
        "name": "BoundingPolygon",
        "vm": "6-n",
    },
    "(4010,101E)": {
        "vr": "SH",
        "name": "RouteSegmentStartLocationID",
        "vm": "1",
    },
    "(4010,101F)": {
        "vr": "SH",
        "name": "RouteSegmentEndLocationID",
        "vm": "1",
    },
    "(4010,1020)": {
        "vr": "CS",
        "name": "RouteSegmentLocationIDType",
        "vm": "1",
    },
    "(4010,1021)": {
        "vr": "CS",
        "name": "AbortReason",
        "vm": "1-n",
    },
    "(4010,1023)": {
        "vr": "FL",
        "name": "VolumeOfPTO",
        "vm": "1",
    },
    "(4010,1024)": {
        "vr": "CS",
        "name": "AbortFlag",
        "vm": "1",
    },
    "(4010,1025)": {
        "vr": "DT",
        "name": "RouteSegmentStartTime",
        "vm": "1",
    },
    "(4010,1026)": {
        "vr": "DT",
        "name": "RouteSegmentEndTime",
        "vm": "1",
    },
    "(4010,1027)": {
        "vr": "CS",
        "name": "TDRType",
        "vm": "1",
    },
    "(4010,1028)": {
        "vr": "CS",
        "name": "InternationalRouteSegment",
        "vm": "1",
    },
    "(4010,1029)": {
        "vr": "LO",
        "name": "ThreatDetectionAlgorithmandVersion",
        "vm": "1-n",
    },
    "(4010,102A)": {
        "vr": "SH",
        "name": "AssignedLocation",
        "vm": "1",
    },
    "(4010,102B)": {
        "vr": "DT",
        "name": "AlarmDecisionTime",
        "vm": "1",
    },
    "(4010,1031)": {
        "vr": "CS",
        "name": "AlarmDecision",
        "vm": "1",
    },
    "(4010,1033)": {
        "vr": "US",
        "name": "NumberOfTotalObjects",
        "vm": "1",
    },
    "(4010,1034)": {
        "vr": "US",
        "name": "NumberOfAlarmObjects",
        "vm": "1",
    },
    "(4010,1037)": {
        "vr": "SQ",
        "name": "PTORepresentationSequence",
        "vm": "1",
    },
    "(4010,1038)": {
        "vr": "SQ",
        "name": "ATDAssessmentSequence",
        "vm": "1",
    },
    "(4010,1039)": {
        "vr": "CS",
        "name": "TIPType",
        "vm": "1",
    },
    "(4010,103A)": {
        "vr": "CS",
        "name": "DICOSVersion",
        "vm": "1",
    },
    "(4010,1041)": {
        "vr": "DT",
        "name": "OOIOwnerCreationTime",
        "vm": "1",
    },
    "(4010,1042)": {
        "vr": "CS",
        "name": "OOIType",
        "vm": "1",
    },
    "(4010,1043)": {
        "vr": "FL",
        "name": "OOISize",
        "vm": "3",
    },
    "(4010,1044)": {
        "vr": "CS",
        "name": "AcquisitionStatus",
        "vm": "1",
    },
    "(4010,1045)": {
        "vr": "SQ",
        "name": "BasisMaterialsCodeSequence",
        "vm": "1",
    },
    "(4010,1046)": {
        "vr": "CS",
        "name": "PhantomType",
        "vm": "1",
    },
    "(4010,1047)": {
        "vr": "SQ",
        "name": "OOIOwnerSequence",
        "vm": "1",
    },
    "(4010,1048)": {
        "vr": "CS",
        "name": "ScanType",
        "vm": "1",
    },
    "(4010,1051)": {
        "vr": "LO",
        "name": "ItineraryID",
        "vm": "1",
    },
    "(4010,1052)": {
        "vr": "SH",
        "name": "ItineraryIDType",
        "vm": "1",
    },
    "(4010,1053)": {
        "vr": "LO",
        "name": "ItineraryIDAssigningAuthority",
        "vm": "1",
    },
    "(4010,1054)": {
        "vr": "SH",
        "name": "RouteID",
        "vm": "1",
    },
    "(4010,1055)": {
        "vr": "SH",
        "name": "RouteIDAssigningAuthority",
        "vm": "1",
    },
    "(4010,1056)": {
        "vr": "CS",
        "name": "InboundArrivalType",
        "vm": "1",
    },
    "(4010,1058)": {
        "vr": "SH",
        "name": "CarrierID",
        "vm": "1",
    },
    "(4010,1059)": {
        "vr": "CS",
        "name": "CarrierIDAssigningAuthority",
        "vm": "1",
    },
    "(4010,1060)": {
        "vr": "FL",
        "name": "SourceOrientation",
        "vm": "3",
    },
    "(4010,1061)": {
        "vr": "FL",
        "name": "SourcePosition",
        "vm": "3",
    },
    "(4010,1062)": {
        "vr": "FL",
        "name": "BeltHeight",
        "vm": "1",
    },
    "(4010,1064)": {
        "vr": "SQ",
        "name": "AlgorithmRoutingCodeSequence",
        "vm": "1",
    },
    "(4010,1067)": {
        "vr": "CS",
        "name": "TransportClassification",
        "vm": "1",
    },
    "(4010,1068)": {
        "vr": "LT",
        "name": "OOITypeDescriptor",
        "vm": "1",
    },
    "(4010,1069)": {
        "vr": "FL",
        "name": "TotalProcessingTime",
        "vm": "1",
    },
    "(4010,106C)": {
        "vr": "OB",
        "name": "DetectorCalibrationData",
        "vm": "1",
    },
    "(4010,106D)": {
        "vr": "CS",
        "name": "AdditionalScreeningPerformed",
        "vm": "1",
    },
    "(4010,106E)": {
        "vr": "CS",
        "name": "AdditionalInspectionSelectionCriteria",
        "vm": "1",
    },
    "(4010,106F)": {
        "vr": "SQ",
        "name": "AdditionalInspectionMethodSequence",
        "vm": "1",
    },
    "(4010,1070)": {
        "vr": "CS",
        "name": "AITDeviceType",
        "vm": "1",
    },
    "(4010,1071)": {
        "vr": "SQ",
        "name": "QRMeasurementsSequence",
        "vm": "1",
    },
    "(4010,1072)": {
        "vr": "SQ",
        "name": "TargetMaterialSequence",
        "vm": "1",
    },
    "(4010,1073)": {
        "vr": "FD",
        "name": "SNRThreshold",
        "vm": "1",
    },
    "(4010,1075)": {
        "vr": "DS",
        "name": "ImageScaleRepresentation",
        "vm": "1",
    },
    "(4010,1076)": {
        "vr": "SQ",
        "name": "ReferencedPTOSequence",
        "vm": "1",
    },
    "(4010,1077)": {
        "vr": "SQ",
        "name": "ReferencedTDRInstanceSequence",
        "vm": "1",
    },
    "(4010,1078)": {
        "vr": "ST",
        "name": "PTOLocationDescription",
        "vm": "1",
    },
    "(4010,1079)": {
        "vr": "SQ",
        "name": "AnomalyLocatorIndicatorSequence",
        "vm": "1",
    },
    "(4010,107A)": {
        "vr": "FL",
        "name": "AnomalyLocatorIndicator",
        "vm": "3",
    },
    "(4010,107B)": {
        "vr": "SQ",
        "name": "PTORegionSequence",
        "vm": "1",
    },
    "(4010,107C)": {
        "vr": "CS",
        "name": "InspectionSelectionCriteria",
        "vm": "1",
    },
    "(4010,107D)": {
        "vr": "SQ",
        "name": "SecondaryInspectionMethodSequence",
        "vm": "1",
    },
    "(4010,107E)": {
        "vr": "DS",
        "name": "PRCSToRCSOrientation",
        "vm": "6",
    },
    "(4FFE,0001)": {
        "vr": "SQ",
        "name": "MACParametersSequence",
        "vm": "1",
    },
    "(5200,9229)": {
        "vr": "SQ",
        "name": "SharedFunctionalGroupsSequence",
        "vm": "1",
    },
    "(5200,9230)": {
        "vr": "SQ",
        "name": "PerFrameFunctionalGroupsSequence",
        "vm": "1",
    },
    "(5400,0100)": {
        "vr": "SQ",
        "name": "WaveformSequence",
        "vm": "1",
    },
    "(5400,0110)": {
        "vr": "ox",
        "name": "ChannelMinimumValue",
        "vm": "1",
    },
    "(5400,0112)": {
        "vr": "ox",
        "name": "ChannelMaximumValue",
        "vm": "1",
    },
    "(5400,1004)": {
        "vr": "US",
        "name": "WaveformBitsAllocated",
        "vm": "1",
    },
    "(5400,1006)": {
        "vr": "CS",
        "name": "WaveformSampleInterpretation",
        "vm": "1",
    },
    "(5400,100A)": {
        "vr": "ox",
        "name": "WaveformPaddingValue",
        "vm": "1",
    },
    "(5400,1010)": {
        "vr": "ox",
        "name": "WaveformData",
        "vm": "1",
    },
    "(5600,0010)": {
        "vr": "OF",
        "name": "FirstOrderPhaseCorrectionAngle",
        "vm": "1",
    },
    "(5600,0020)": {
        "vr": "OF",
        "name": "SpectroscopyData",
        "vm": "1",
    },
    "(6000-60FF,0010)": {
        "vr": "US",
        "name": "OverlayRows",
        "vm": "1",
    },
    "(6000-60FF,0011)": {
        "vr": "US",
        "name": "OverlayColumns",
        "vm": "1",
    },
    "(6000-60FF,0015)": {
        "vr": "IS",
        "name": "NumberOfFramesInOverlay",
        "vm": "1",
    },
    "(6000-60FF,0022)": {
        "vr": "LO",
        "name": "OverlayDescription",
        "vm": "1",
    },
    "(6000-60FF,0040)": {
        "vr": "CS",
        "name": "OverlayType",
        "vm": "1",
    },
    "(6000-60FF,0045)": {
        "vr": "LO",
        "name": "OverlaySubtype",
        "vm": "1",
    },
    "(6000-60FF,0050)": {
        "vr": "SS",
        "name": "OverlayOrigin",
        "vm": "2",
    },
    "(6000-60FF,0051)": {
        "vr": "US",
        "name": "ImageFrameOrigin",
        "vm": "1",
    },
    "(6000-60FF,0100)": {
        "vr": "US",
        "name": "OverlayBitsAllocated",
        "vm": "1",
    },
    "(6000-60FF,0102)": {
        "vr": "US",
        "name": "OverlayBitPosition",
        "vm": "1",
    },
    "(6000-60FF,1001)": {
        "vr": "CS",
        "name": "OverlayActivationLayer",
        "vm": "1",
    },
    "(6000-60FF,1301)": {
        "vr": "IS",
        "name": "ROIArea",
        "vm": "1",
    },
    "(6000-60FF,1302)": {
        "vr": "DS",
        "name": "ROIMean",
        "vm": "1",
    },
    "(6000-60FF,1303)": {
        "vr": "DS",
        "name": "ROIStandardDeviation",
        "vm": "1",
    },
    "(6000-60FF,1500)": {
        "vr": "LO",
        "name": "OverlayLabel",
        "vm": "1",
    },
    "(6000-60FF,3000)": {
        "vr": "ox",
        "name": "OverlayData",
        "vm": "1",
    },
    "(7FE0,0008)": {
        "vr": "OF",
        "name": "FloatPixelData",
        "vm": "1",
    },
    "(7FE0,0009)": {
        "vr": "OD",
        "name": "DoubleFloatPixelData",
        "vm": "1",
    },
    "(7FE0,0010)": {
        "vr": "ox",
        "name": "PixelData",
        "vm": "1",
    },
    "(FFFA,FFFA)": {
        "vr": "SQ",
        "name": "DigitalSignaturesSequence",
        "vm": "1",
    },
    "(FFFC,FFFC)": {
        "vr": "OB",
        "name": "DataSetTrailingPadding",
        "vm": "1",
    },
    "(FFFE,E000)": {
        "vr": "na",
        "name": "Item",
        "vm": "1",
    },
    "(FFFE,E00D)": {
        "vr": "na",
        "name": "ItemDelimitationItem",
        "vm": "1",
    },
    "(FFFE,E0DD)": {
        "vr": "na",
        "name": "SequenceDelimitationItem",
        "vm": "1",
    },
    "(0028,1224)": {
        "vr": "OW",
        "name": "SegmentedAlphaPaletteColorLookupTableData",
        "vm": "1",
    },
    "(0070,1101)": {
        "vr": "UI",
        "name": "PresentationDisplayCollectionUID",
        "vm": "1",
    },
    "(0070,1102)": {
        "vr": "UI",
        "name": "PresentationSequenceCollectionUID",
        "vm": "1",
    },
    "(0070,1103)": {
        "vr": "US",
        "name": "PresentationSequencePositionIndex",
        "vm": "1",
    },
    "(0070,1104)": {
        "vr": "SQ",
        "name": "RenderedImageReferenceSequence",
        "vm": "1",
    },
    "(0070,1201)": {
        "vr": "SQ",
        "name": "VolumetricPresentationStateInputSequence",
        "vm": "1",
    },
    "(0070,1202)": {
        "vr": "CS",
        "name": "PresentationInputType",
        "vm": "1",
    },
    "(0070,1203)": {
        "vr": "US",
        "name": "InputSequencePositionIndex",
        "vm": "1",
    },
    "(0070,1204)": {
        "vr": "CS",
        "name": "Crop",
        "vm": "1",
    },
    "(0070,1205)": {
        "vr": "US",
        "name": "CroppingSpecificationIndex",
        "vm": "1-n",
    },
    "(0070,1206)": {
        "vr": "CS",
        "name": "CompositingMethod",
        "vm": "1",
    },
    "(0070,1207)": {
        "vr": "US",
        "name": "VolumetricPresentationInputNumber",
        "vm": "1",
    },
    "(0070,1208)": {
        "vr": "CS",
        "name": "ImageVolumeGeometry",
        "vm": "1",
    },
    "(0070,1301)": {
        "vr": "SQ",
        "name": "VolumeCroppingSequence",
        "vm": "1",
    },
    "(0070,1302)": {
        "vr": "CS",
        "name": "VolumeCroppingMethod",
        "vm": "1",
    },
    "(0070,1303)": {
        "vr": "FD",
        "name": "BoundingBoxCrop",
        "vm": "6",
    },
    "(0070,1304)": {
        "vr": "SQ",
        "name": "ObliqueCroppingPlaneSequence",
        "vm": "1",
    },
    "(0070,1305)": {
        "vr": "FD",
        "name": "ObliqueCroppingPlane",
        "vm": "4",
    },
    "(0070,1306)": {
        "vr": "FD",
        "name": "ObliqueCroppingPlaneNormal",
        "vm": "3",
    },
    "(0070,1309)": {
        "vr": "US",
        "name": "CroppingSpecificationNumber",
        "vm": "1",
    },
    "(0070,1501)": {
        "vr": "CS",
        "name": "MultiPlanarReconstructionStyle",
        "vm": "1",
    },
    "(0070,1502)": {
        "vr": "CS",
        "name": "MPRThicknessType",
        "vm": "1",
    },
    "(0070,1503)": {
        "vr": "FD",
        "name": "MPRSlabThickness",
        "vm": "1",
    },
    "(0070,1505)": {
        "vr": "FD",
        "name": "MPRTopLeftHandCorner",
        "vm": "3",
    },
    "(0070,1507)": {
        "vr": "FD",
        "name": "MPRViewWidthDirection",
        "vm": "3",
    },
    "(0070,1508)": {
        "vr": "FD",
        "name": "MPRViewWidth",
        "vm": "1",
    },
    "(0070,150C)": {
        "vr": "FL",
        "name": "NumberOfVolumetricCurvePoints",
        "vm": "1",
    },
    "(0070,150D)": {
        "vr": "OD",
        "name": "VolumetricCurvePoints",
        "vm": "1",
    },
    "(0070,1511)": {
        "vr": "FD",
        "name": "MPRViewHeightDirection",
        "vm": "3",
    },
    "(0070,1512)": {
        "vr": "FD",
        "name": "MPRViewHeight",
        "vm": "1",
    },
    "(0070,1801)": {
        "vr": "SQ",
        "name": "PresentationStateClassificationComponentSequence",
        "vm": "1",
    },
    "(0070,1802)": {
        "vr": "CS",
        "name": "ComponentType",
        "vm": "1",
    },
    "(0070,1803)": {
        "vr": "SQ",
        "name": "ComponentInputSequence",
        "vm": "1",
    },
    "(0070,1804)": {
        "vr": "US",
        "name": "VolumetricPresentationInputIndex",
        "vm": "1",
    },
    "(0070,1805)": {
        "vr": "SQ",
        "name": "PresentationStateCompositorComponentSequence",
        "vm": "1",
    },
    "(0070,1806)": {
        "vr": "SQ",
        "name": "WeightingTransferFunctionSequence",
        "vm": "1",
    },
    "(0070,1807)": {
        "vr": "US",
        "name": "WeightingLookupTableDescriptor",
        "vm": "3",
    },
    "(0070,1808)": {
        "vr": "OB",
        "name": "WeightingLookupTableData",
        "vm": "1",
    },
    "(0070,1901)": {
        "vr": "SQ",
        "name": "VolumetricAnnotationSequence",
        "vm": "1",
    },
    "(0070,1903)": {
        "vr": "SQ",
        "name": "ReferencedStructuredContextSequence",
        "vm": "1",
    },
    "(0070,1904)": {
        "vr": "UI",
        "name": "ReferencedContentItem",
        "vm": "1",
    },
    "(0070,1905)": {
        "vr": "SQ",
        "name": "VolumetricPresentationInputAnnotationSequence",
        "vm": "1",
    },
    "(0070,1907)": {
        "vr": "CS",
        "name": "AnnotationClipping",
        "vm": "1",
    },
    "(0070,1A01)": {
        "vr": "CS",
        "name": "PresentationAnimationStyle",
        "vm": "1",
    },
    "(0070,1A03)": {
        "vr": "FD",
        "name": "RecommendedAnimationRate",
        "vm": "1",
    },
    "(0070,1A04)": {
        "vr": "SQ",
        "name": "AnimationCurveSequence",
        "vm": "1",
    },
    "(0070,1A05)": {
        "vr": "FD",
        "name": "AnimationStepSize",
        "vm": "1",
    },
    "(0040,4070)": {
        "vr": "SQ",
        "name": "OutputDestinationSequence",
        "vm": "1",
    },
    "(0040,4071)": {
        "vr": "SQ",
        "name": "DICOMStorageSequence",
        "vm": "1",
    },
    "(0040,4072)": {
        "vr": "SQ",
        "name": "STOWRSStorageSequence",
        "vm": "1",
    },
    "(0040,4073)": {
        "vr": "UR",
        "name": "StorageURL",
        "vm": "1",
    },
    "(0040,4074)": {
        "vr": "SQ",
        "name": "XDSStorageSequence",
        "vm": "1",
    },
    "(0028,2002)": {
        "vr": "CS",
        "name": "ColorSpace",
        "vm": "1",
    },
    "(0040,9213)": {
        "vr": "FD",
        "name": "DoubleFloatRealWorldValueLastValueMapped",
        "vm": "1",
    },
    "(0040,9214)": {
        "vr": "FD",
        "name": "DoubleFloatRealWorldValueFirstValueMapped",
        "vm": "1",
    },
    "(0018,1320)": {
        "vr": "FL",
        "name": "B1rms",
        "vm": "1",
    },
    "(0009-o-FFFF,0000)": {
        "vr": "UL",
        "name": "PrivateGroupLength",
        "vm": "1",
    },
    "(0009-o-FFFF,0010-u-00FF)": {
        "vr": "LO",
        "name": "PrivateCreator",
        "vm": "1",
    },
    "(0001-o-0007,0000)": {
        "vr": "UL",
        "name": "IllegalGroupLength",
        "vm": "1",
    },
    "(0001-o-0007,0010-u-00FF)": {
        "vr": "LO",
        "name": "IllegalPrivateCreator",
        "vm": "1",
    },
    "(0000-u-FFFF,0000)": {
        "vr": "UL",
        "name": "GenericGroupLength",
        "vm": "1",
    },
    "(0000,0001)": {
        "vr": "UL",
        "name": "RETIRED_CommandLengthToEnd",
        "vm": "1",
    },
    "(0000,0010)": {
        "vr": "SH",
        "name": "RETIRED_CommandRecognitionCode",
        "vm": "1",
    },
    "(0000,0200)": {
        "vr": "AE",
        "name": "RETIRED_Initiator",
        "vm": "1",
    },
    "(0000,0300)": {
        "vr": "AE",
        "name": "RETIRED_Receiver",
        "vm": "1",
    },
    "(0000,0400)": {
        "vr": "AE",
        "name": "RETIRED_FindLocation",
        "vm": "1",
    },
    "(0000,0850)": {
        "vr": "US",
        "name": "RETIRED_NumberOfMatches",
        "vm": "1",
    },
    "(0000,0860)": {
        "vr": "US",
        "name": "RETIRED_ResponseSequenceNumber",
        "vm": "1",
    },
    "(0000,4000)": {
        "vr": "LT",
        "name": "RETIRED_DialogReceiver",
        "vm": "1",
    },
    "(0000,4010)": {
        "vr": "LT",
        "name": "RETIRED_TerminalType",
        "vm": "1",
    },
    "(0000,5010)": {
        "vr": "SH",
        "name": "RETIRED_MessageSetID",
        "vm": "1",
    },
    "(0000,5020)": {
        "vr": "SH",
        "name": "RETIRED_EndMessageID",
        "vm": "1",
    },
    "(0000,5110)": {
        "vr": "LT",
        "name": "RETIRED_DisplayFormat",
        "vm": "1",
    },
    "(0000,5120)": {
        "vr": "LT",
        "name": "RETIRED_PagePositionID",
        "vm": "1",
    },
    "(0000,5130)": {
        "vr": "CS",
        "name": "RETIRED_TextFormatID",
        "vm": "1",
    },
    "(0000,5140)": {
        "vr": "CS",
        "name": "RETIRED_NormalReverse",
        "vm": "1",
    },
    "(0000,5150)": {
        "vr": "CS",
        "name": "RETIRED_AddGrayScale",
        "vm": "1",
    },
    "(0000,5160)": {
        "vr": "CS",
        "name": "RETIRED_Borders",
        "vm": "1",
    },
    "(0000,5170)": {
        "vr": "IS",
        "name": "RETIRED_Copies",
        "vm": "1",
    },
    "(0000,5180)": {
        "vr": "CS",
        "name": "RETIRED_CommandMagnificationType",
        "vm": "1",
    },
    "(0000,5190)": {
        "vr": "CS",
        "name": "RETIRED_Erase",
        "vm": "1",
    },
    "(0000,51A0)": {
        "vr": "CS",
        "name": "RETIRED_Print",
        "vm": "1",
    },
    "(0000,51B0)": {
        "vr": "US",
        "name": "RETIRED_Overlays",
        "vm": "1-n",
    },
    "(0004,1504)": {
        "vr": "up",
        "name": "RETIRED_MRDRDirectoryRecordOffset",
        "vm": "1",
    },
    "(0004,1600)": {
        "vr": "UL",
        "name": "RETIRED_NumberOfReferences",
        "vm": "1",
    },
    "(0008,0001)": {
        "vr": "UL",
        "name": "RETIRED_LengthToEnd",
        "vm": "1",
    },
    "(0008,0010)": {
        "vr": "SH",
        "name": "RETIRED_RecognitionCode",
        "vm": "1",
    },
    "(0008,0024)": {
        "vr": "DA",
        "name": "RETIRED_OverlayDate",
        "vm": "1",
    },
    "(0008,0025)": {
        "vr": "DA",
        "name": "RETIRED_CurveDate",
        "vm": "1",
    },
    "(0008,0034)": {
        "vr": "TM",
        "name": "RETIRED_OverlayTime",
        "vm": "1",
    },
    "(0008,0035)": {
        "vr": "TM",
        "name": "RETIRED_CurveTime",
        "vm": "1",
    },
    "(0008,0040)": {
        "vr": "US",
        "name": "RETIRED_DataSetType",
        "vm": "1",
    },
    "(0008,0041)": {
        "vr": "LO",
        "name": "RETIRED_DataSetSubtype",
        "vm": "1",
    },
    "(0008,0042)": {
        "vr": "CS",
        "name": "RETIRED_NuclearMedicineSeriesType",
        "vm": "1",
    },
    "(0008,1000)": {
        "vr": "AE",
        "name": "RETIRED_NetworkID",
        "vm": "1",
    },
    "(0008,1100)": {
        "vr": "SQ",
        "name": "RETIRED_ReferencedResultsSequence",
        "vm": "1",
    },
    "(0008,1130)": {
        "vr": "SQ",
        "name": "RETIRED_ReferencedOverlaySequence",
        "vm": "1",
    },
    "(0008,1145)": {
        "vr": "SQ",
        "name": "RETIRED_ReferencedCurveSequence",
        "vm": "1",
    },
    "(0008,2110)": {
        "vr": "CS",
        "name": "RETIRED_LossyImageCompressionRetired",
        "vm": "1",
    },
    "(0008,2200)": {
        "vr": "CS",
        "name": "RETIRED_TransducerPosition",
        "vm": "1",
    },
    "(0008,2204)": {
        "vr": "CS",
        "name": "RETIRED_TransducerOrientation",
        "vm": "1",
    },
    "(0008,2208)": {
        "vr": "CS",
        "name": "RETIRED_AnatomicStructure",
        "vm": "1",
    },
    "(0008,2240)": {
        "vr": "SQ",
        "name": "RETIRED_TransducerPositionSequence",
        "vm": "1",
    },
    "(0008,2242)": {
        "vr": "SQ",
        "name": "RETIRED_TransducerPositionModifierSequence",
        "vm": "1",
    },
    "(0008,2244)": {
        "vr": "SQ",
        "name": "RETIRED_TransducerOrientationSequence",
        "vm": "1",
    },
    "(0008,2246)": {
        "vr": "SQ",
        "name": "RETIRED_TransducerOrientationModifierSequence",
        "vm": "1",
    },
    "(0008,2251)": {
        "vr": "SQ",
        "name": "RETIRED_AnatomicStructureSpaceOrRegionCodeSequenceTrial",
        "vm": "1",
    },
    "(0008,2253)": {
        "vr": "SQ",
        "name": "RETIRED_AnatomicPortalOfEntranceCodeSequenceTrial",
        "vm": "1",
    },
    "(0008,2255)": {
        "vr": "SQ",
        "name": "RETIRED_AnatomicApproachDirectionCodeSequenceTrial",
        "vm": "1",
    },
    "(0008,2256)": {
        "vr": "ST",
        "name": "RETIRED_AnatomicPerspectiveDescriptionTrial",
        "vm": "1",
    },
    "(0008,2257)": {
        "vr": "SQ",
        "name": "RETIRED_AnatomicPerspectiveCodeSequenceTrial",
        "vm": "1",
    },
    "(0008,2258)": {
        "vr": "ST",
        "name": "RETIRED_AnatomicLocationOfExaminingInstrumentDescriptionTrial",
        "vm": "1",
    },
    "(0008,2259)": {
        "vr": "SQ",
        "name": "RETIRED_AnatomicLocationOfExaminingInstrumentCodeSequenceTrial",
        "vm": "1",
    },
    "(0008,225A)": {
        "vr": "SQ",
        "name": "RETIRED_AnatomicStructureSpaceOrRegionModifierCodeSequenceTrial",
        "vm": "1",
    },
    "(0008,225C)": {
        "vr": "SQ",
        "name": "RETIRED_OnAxisBackgroundAnatomicStructureCodeSequenceTrial",
        "vm": "1",
    },
    "(0008,4000)": {
        "vr": "LT",
        "name": "RETIRED_IdentifyingComments",
        "vm": "1",
    },
    "(0010,1050)": {
        "vr": "LO",
        "name": "RETIRED_InsurancePlanIdentification",
        "vm": "1-n",
    },
    "(0014,0023)": {
        "vr": "ST",
        "name": "RETIRED_CADFileFormat",
        "vm": "1-n",
    },
    "(0014,0024)": {
        "vr": "ST",
        "name": "RETIRED_ComponentReferenceSystem",
        "vm": "1-n",
    },
    "(0014,0045)": {
        "vr": "ST",
        "name": "RETIRED_MaterialPropertiesFileFormatRetired",
        "vm": "1-n",
    },
    "(0018,0030)": {
        "vr": "LO",
        "name": "RETIRED_Radionuclide",
        "vm": "1-n",
    },
    "(0018,0032)": {
        "vr": "DS",
        "name": "RETIRED_EnergyWindowCenterline",
        "vm": "1",
    },
    "(0018,0033)": {
        "vr": "DS",
        "name": "RETIRED_EnergyWindowTotalWidth",
        "vm": "1-n",
    },
    "(0018,0037)": {
        "vr": "CS",
        "name": "RETIRED_TherapyType",
        "vm": "1",
    },
    "(0018,0039)": {
        "vr": "CS",
        "name": "RETIRED_TherapyDescription",
        "vm": "1",
    },
    "(0018,1011)": {
        "vr": "LO",
        "name": "RETIRED_HardcopyCreationDeviceID",
        "vm": "1",
    },
    "(0018,1017)": {
        "vr": "LO",
        "name": "RETIRED_HardcopyDeviceManufacturer",
        "vm": "1",
    },
    "(0018,101A)": {
        "vr": "LO",
        "name": "RETIRED_HardcopyDeviceSoftwareVersion",
        "vm": "1-n",
    },
    "(0018,101B)": {
        "vr": "LO",
        "name": "RETIRED_HardcopyDeviceManufacturerModelName",
        "vm": "1",
    },
    "(0018,1141)": {
        "vr": "DS",
        "name": "RETIRED_AngularPosition",
        "vm": "1",
    },
    "(0018,1146)": {
        "vr": "DS",
        "name": "RETIRED_RotationOffset",
        "vm": "1-n",
    },
    "(0018,1240)": {
        "vr": "IS",
        "name": "RETIRED_UpperLowerPixelValues",
        "vm": "1-n",
    },
    "(0018,4000)": {
        "vr": "LT",
        "name": "RETIRED_AcquisitionComments",
        "vm": "1",
    },
    "(0018,5021)": {
        "vr": "LO",
        "name": "RETIRED_PostprocessingFunction",
        "vm": "1",
    },
    "(0018,5030)": {
        "vr": "DS",
        "name": "RETIRED_DynamicRange",
        "vm": "1",
    },
    "(0018,5040)": {
        "vr": "DS",
        "name": "RETIRED_TotalGain",
        "vm": "1",
    },
    "(0018,5210)": {
        "vr": "DS",
        "name": "RETIRED_ImageTransformationMatrix",
        "vm": "6",
    },
    "(0018,5212)": {
        "vr": "DS",
        "name": "RETIRED_ImageTranslationVector",
        "vm": "3",
    },
    "(0018,6038)": {
        "vr": "UL",
        "name": "RETIRED_DopplerSampleVolumeXPositionRetired",
        "vm": "1",
    },
    "(0018,603A)": {
        "vr": "UL",
        "name": "RETIRED_DopplerSampleVolumeYPositionRetired",
        "vm": "1",
    },
    "(0018,603C)": {
        "vr": "UL",
        "name": "RETIRED_TMLinePositionX0Retired",
        "vm": "1",
    },
    "(0018,603E)": {
        "vr": "UL",
        "name": "RETIRED_TMLinePositionY0Retired",
        "vm": "1",
    },
    "(0018,6040)": {
        "vr": "UL",
        "name": "RETIRED_TMLinePositionX1Retired",
        "vm": "1",
    },
    "(0018,6042)": {
        "vr": "UL",
        "name": "RETIRED_TMLinePositionY1Retired",
        "vm": "1",
    },
    "(0018,9096)": {
        "vr": "FD",
        "name": "RETIRED_ParallelReductionFactorInPlaneRetired",
        "vm": "1",
    },
    "(0018,9166)": {
        "vr": "CS",
        "name": "RETIRED_BulkMotionStatus",
        "vm": "1",
    },
    "(0018,9195)": {
        "vr": "FD",
        "name": "RETIRED_ChemicalShiftMinimumIntegrationLimitInHz",
        "vm": "1",
    },
    "(0018,9196)": {
        "vr": "FD",
        "name": "RETIRED_ChemicalShiftMaximumIntegrationLimitInHz",
        "vm": "1",
    },
    "(0020,0014)": {
        "vr": "IS",
        "name": "RETIRED_IsotopeNumber",
        "vm": "1",
    },
    "(0020,0015)": {
        "vr": "IS",
        "name": "RETIRED_PhaseNumber",
        "vm": "1",
    },
    "(0020,0016)": {
        "vr": "IS",
        "name": "RETIRED_IntervalNumber",
        "vm": "1",
    },
    "(0020,0017)": {
        "vr": "IS",
        "name": "RETIRED_TimeSlotNumber",
        "vm": "1",
    },
    "(0020,0018)": {
        "vr": "IS",
        "name": "RETIRED_AngleNumber",
        "vm": "1",
    },
    "(0020,0022)": {
        "vr": "IS",
        "name": "RETIRED_OverlayNumber",
        "vm": "1",
    },
    "(0020,0024)": {
        "vr": "IS",
        "name": "RETIRED_CurveNumber",
        "vm": "1",
    },
    "(0020,0026)": {
        "vr": "IS",
        "name": "RETIRED_LUTNumber",
        "vm": "1",
    },
    "(0020,0030)": {
        "vr": "DS",
        "name": "RETIRED_ImagePosition",
        "vm": "3",
    },
    "(0020,0035)": {
        "vr": "DS",
        "name": "RETIRED_ImageOrientation",
        "vm": "6",
    },
    "(0020,0050)": {
        "vr": "DS",
        "name": "RETIRED_Location",
        "vm": "1",
    },
    "(0020,0070)": {
        "vr": "LO",
        "name": "RETIRED_ImageGeometryType",
        "vm": "1",
    },
    "(0020,0080)": {
        "vr": "CS",
        "name": "RETIRED_MaskingImage",
        "vm": "1-n",
    },
    "(0020,00AA)": {
        "vr": "IS",
        "name": "RETIRED_ReportNumber",
        "vm": "1",
    },
    "(0020,1000)": {
        "vr": "IS",
        "name": "RETIRED_SeriesInStudy",
        "vm": "1",
    },
    "(0020,1001)": {
        "vr": "IS",
        "name": "RETIRED_AcquisitionsInSeries",
        "vm": "1",
    },
    "(0020,1003)": {
        "vr": "IS",
        "name": "RETIRED_ImagesInSeries",
        "vm": "1",
    },
    "(0020,1004)": {
        "vr": "IS",
        "name": "RETIRED_AcquisitionsInStudy",
        "vm": "1",
    },
    "(0020,1005)": {
        "vr": "IS",
        "name": "RETIRED_ImagesInStudy",
        "vm": "1",
    },
    "(0020,1020)": {
        "vr": "LO",
        "name": "RETIRED_Reference",
        "vm": "1-n",
    },
    "(0020,1070)": {
        "vr": "IS",
        "name": "RETIRED_OtherStudyNumbers",
        "vm": "1-n",
    },
    "(0020,3100-31FF)": {
        "vr": "CS",
        "name": "RETIRED_SourceImageIDs",
        "vm": "1-n",
    },
    "(0020,3401)": {
        "vr": "CS",
        "name": "RETIRED_ModifyingDeviceID",
        "vm": "1",
    },
    "(0020,3402)": {
        "vr": "CS",
        "name": "RETIRED_ModifiedImageID",
        "vm": "1",
    },
    "(0020,3403)": {
        "vr": "DA",
        "name": "RETIRED_ModifiedImageDate",
        "vm": "1",
    },
    "(0020,3404)": {
        "vr": "LO",
        "name": "RETIRED_ModifyingDeviceManufacturer",
        "vm": "1",
    },
    "(0020,3405)": {
        "vr": "TM",
        "name": "RETIRED_ModifiedImageTime",
        "vm": "1",
    },
    "(0020,3406)": {
        "vr": "LO",
        "name": "RETIRED_ModifiedImageDescription",
        "vm": "1",
    },
    "(0020,5000)": {
        "vr": "AT",
        "name": "RETIRED_OriginalImageIdentification",
        "vm": "1-n",
    },
    "(0020,5002)": {
        "vr": "LO",
        "name": "RETIRED_OriginalImageIdentificationNomenclature",
        "vm": "1-n",
    },
    "(0022,1094)": {
        "vr": "LO",
        "name": "RETIRED_LensConstantDescription",
        "vm": "1",
    },
    "(0022,1153)": {
        "vr": "SQ",
        "name": "RETIRED_OphthalmicAxialLengthAcquisitionMethodCodeSequence",
        "vm": "1",
    },
    "(0022,1265)": {
        "vr": "SQ",
        "name": "RETIRED_OphthalmicAxialLengthQualityMetricTypeCodeSequence",
        "vm": "1",
    },
    "(0022,1273)": {
        "vr": "LO",
        "name": "RETIRED_OphthalmicAxialLengthQualityMetricTypeDescription",
        "vm": "1",
    },
    "(0028,0005)": {
        "vr": "US",
        "name": "RETIRED_ImageDimensions",
        "vm": "1",
    },
    "(0028,0012)": {
        "vr": "US",
        "name": "RETIRED_Planes",
        "vm": "1",
    },
    "(0028,0040)": {
        "vr": "CS",
        "name": "RETIRED_ImageFormat",
        "vm": "1",
    },
    "(0028,0050)": {
        "vr": "LO",
        "name": "RETIRED_ManipulatedImage",
        "vm": "1-n",
    },
    "(0028,005F)": {
        "vr": "LO",
        "name": "RETIRED_CompressionRecognitionCode",
        "vm": "1",
    },
    "(0028,0060)": {
        "vr": "CS",
        "name": "RETIRED_CompressionCode",
        "vm": "1",
    },
    "(0028,0061)": {
        "vr": "SH",
        "name": "RETIRED_CompressionOriginator",
        "vm": "1",
    },
    "(0028,0062)": {
        "vr": "LO",
        "name": "RETIRED_CompressionLabel",
        "vm": "1",
    },
    "(0028,0063)": {
        "vr": "SH",
        "name": "RETIRED_CompressionDescription",
        "vm": "1",
    },
    "(0028,0065)": {
        "vr": "CS",
        "name": "RETIRED_CompressionSequence",
        "vm": "1-n",
    },
    "(0028,0066)": {
        "vr": "AT",
        "name": "RETIRED_CompressionStepPointers",
        "vm": "1-n",
    },
    "(0028,0068)": {
        "vr": "US",
        "name": "RETIRED_RepeatInterval",
        "vm": "1",
    },
    "(0028,0069)": {
        "vr": "US",
        "name": "RETIRED_BitsGrouped",
        "vm": "1",
    },
    "(0028,0070)": {
        "vr": "US",
        "name": "RETIRED_PerimeterTable",
        "vm": "1-n",
    },
    "(0028,0071)": {
        "vr": "xs",
        "name": "RETIRED_PerimeterValue",
        "vm": "1",
    },
    "(0028,0080)": {
        "vr": "US",
        "name": "RETIRED_PredictorRows",
        "vm": "1",
    },
    "(0028,0081)": {
        "vr": "US",
        "name": "RETIRED_PredictorColumns",
        "vm": "1",
    },
    "(0028,0082)": {
        "vr": "US",
        "name": "RETIRED_PredictorConstants",
        "vm": "1-n",
    },
    "(0028,0090)": {
        "vr": "CS",
        "name": "RETIRED_BlockedPixels",
        "vm": "1",
    },
    "(0028,0091)": {
        "vr": "US",
        "name": "RETIRED_BlockRows",
        "vm": "1",
    },
    "(0028,0092)": {
        "vr": "US",
        "name": "RETIRED_BlockColumns",
        "vm": "1",
    },
    "(0028,0093)": {
        "vr": "US",
        "name": "RETIRED_RowOverlap",
        "vm": "1",
    },
    "(0028,0094)": {
        "vr": "US",
        "name": "RETIRED_ColumnOverlap",
        "vm": "1",
    },
    "(0028,0104)": {
        "vr": "xs",
        "name": "RETIRED_SmallestValidPixelValue",
        "vm": "1",
    },
    "(0028,0105)": {
        "vr": "xs",
        "name": "RETIRED_LargestValidPixelValue",
        "vm": "1",
    },
    "(0028,0110)": {
        "vr": "xs",
        "name": "RETIRED_SmallestImagePixelValueInPlane",
        "vm": "1",
    },
    "(0028,0111)": {
        "vr": "xs",
        "name": "RETIRED_LargestImagePixelValueInPlane",
        "vm": "1",
    },
    "(0028,0200)": {
        "vr": "US",
        "name": "RETIRED_ImageLocation",
        "vm": "1",
    },
    "(0028,0400)": {
        "vr": "LO",
        "name": "RETIRED_TransformLabel",
        "vm": "1",
    },
    "(0028,0401)": {
        "vr": "LO",
        "name": "RETIRED_TransformVersionNumber",
        "vm": "1",
    },
    "(0028,0402)": {
        "vr": "US",
        "name": "RETIRED_NumberOfTransformSteps",
        "vm": "1",
    },
    "(0028,0403)": {
        "vr": "LO",
        "name": "RETIRED_SequenceOfCompressedData",
        "vm": "1-n",
    },
    "(0028,0404)": {
        "vr": "AT",
        "name": "RETIRED_DetailsOfCoefficients",
        "vm": "1-n",
    },
    "(0028,0410)": {
        "vr": "US",
        "name": "RETIRED_RowsForNthOrderCoefficients",
        "vm": "1",
    },
    "(0028,0411)": {
        "vr": "US",
        "name": "RETIRED_ColumnsForNthOrderCoefficients",
        "vm": "1",
    },
    "(0028,0412)": {
        "vr": "LO",
        "name": "RETIRED_CoefficientCoding",
        "vm": "1-n",
    },
    "(0028,0413)": {
        "vr": "AT",
        "name": "RETIRED_CoefficientCodingPointers",
        "vm": "1-n",
    },
    "(0028,0700)": {
        "vr": "LO",
        "name": "RETIRED_DCTLabel",
        "vm": "1",
    },
    "(0028,0701)": {
        "vr": "CS",
        "name": "RETIRED_DataBlockDescription",
        "vm": "1-n",
    },
    "(0028,0702)": {
        "vr": "AT",
        "name": "RETIRED_DataBlock",
        "vm": "1-n",
    },
    "(0028,0710)": {
        "vr": "US",
        "name": "RETIRED_NormalizationFactorFormat",
        "vm": "1",
    },
    "(0028,0720)": {
        "vr": "US",
        "name": "RETIRED_ZonalMapNumberFormat",
        "vm": "1",
    },
    "(0028,0721)": {
        "vr": "AT",
        "name": "RETIRED_ZonalMapLocation",
        "vm": "1-n",
    },
    "(0028,0722)": {
        "vr": "US",
        "name": "RETIRED_ZonalMapFormat",
        "vm": "1",
    },
    "(0028,0730)": {
        "vr": "US",
        "name": "RETIRED_AdaptiveMapFormat",
        "vm": "1",
    },
    "(0028,0740)": {
        "vr": "US",
        "name": "RETIRED_CodeNumberFormat",
        "vm": "1",
    },
    "(0028,0800)": {
        "vr": "CS",
        "name": "RETIRED_CodeLabel",
        "vm": "1-n",
    },
    "(0028,0802)": {
        "vr": "US",
        "name": "RETIRED_NumberOfTables",
        "vm": "1",
    },
    "(0028,0803)": {
        "vr": "AT",
        "name": "RETIRED_CodeTableLocation",
        "vm": "1-n",
    },
    "(0028,0804)": {
        "vr": "US",
        "name": "RETIRED_BitsForCodeWord",
        "vm": "1",
    },
    "(0028,0808)": {
        "vr": "AT",
        "name": "RETIRED_ImageDataLocation",
        "vm": "1-n",
    },
    "(0028,1080)": {
        "vr": "CS",
        "name": "RETIRED_GrayScale",
        "vm": "1",
    },
    "(0028,1100)": {
        "vr": "xs",
        "name": "RETIRED_GrayLookupTableDescriptor",
        "vm": "3",
    },
    "(0028,1111)": {
        "vr": "xs",
        "name": "RETIRED_LargeRedPaletteColorLookupTableDescriptor",
        "vm": "4",
    },
    "(0028,1112)": {
        "vr": "xs",
        "name": "RETIRED_LargeGreenPaletteColorLookupTableDescriptor",
        "vm": "4",
    },
    "(0028,1113)": {
        "vr": "xs",
        "name": "RETIRED_LargeBluePaletteColorLookupTableDescriptor",
        "vm": "4",
    },
    "(0028,1200)": {
        "vr": "lt",
        "name": "RETIRED_GrayLookupTableData",
        "vm": "1-n",
    },
    "(0028,1211)": {
        "vr": "OW",
        "name": "RETIRED_LargeRedPaletteColorLookupTableData",
        "vm": "1",
    },
    "(0028,1212)": {
        "vr": "OW",
        "name": "RETIRED_LargeGreenPaletteColorLookupTableData",
        "vm": "1",
    },
    "(0028,1213)": {
        "vr": "OW",
        "name": "RETIRED_LargeBluePaletteColorLookupTableData",
        "vm": "1",
    },
    "(0028,1214)": {
        "vr": "UI",
        "name": "RETIRED_LargePaletteColorLookupTableUID",
        "vm": "1",
    },
    "(0028,4000)": {
        "vr": "LT",
        "name": "RETIRED_ImagePresentationComments",
        "vm": "1",
    },
    "(0028,5000)": {
        "vr": "SQ",
        "name": "RETIRED_BiPlaneAcquisitionSequence",
        "vm": "1",
    },
    "(0028,6030)": {
        "vr": "US",
        "name": "RETIRED_MaskPointers",
        "vm": "1-n",
    },
    "(0028,9099)": {
        "vr": "US",
        "name": "RETIRED_LargestMonochromePixelValue",
        "vm": "1",
    },
    "(0032,000A)": {
        "vr": "CS",
        "name": "RETIRED_StudyStatusID",
        "vm": "1",
    },
    "(0032,000C)": {
        "vr": "CS",
        "name": "RETIRED_StudyPriorityID",
        "vm": "1",
    },
    "(0032,0012)": {
        "vr": "LO",
        "name": "RETIRED_StudyIDIssuer",
        "vm": "1",
    },
    "(0032,0032)": {
        "vr": "DA",
        "name": "RETIRED_StudyVerifiedDate",
        "vm": "1",
    },
    "(0032,0033)": {
        "vr": "TM",
        "name": "RETIRED_StudyVerifiedTime",
        "vm": "1",
    },
    "(0032,0034)": {
        "vr": "DA",
        "name": "RETIRED_StudyReadDate",
        "vm": "1",
    },
    "(0032,0035)": {
        "vr": "TM",
        "name": "RETIRED_StudyReadTime",
        "vm": "1",
    },
    "(0032,1000)": {
        "vr": "DA",
        "name": "RETIRED_ScheduledStudyStartDate",
        "vm": "1",
    },
    "(0032,1001)": {
        "vr": "TM",
        "name": "RETIRED_ScheduledStudyStartTime",
        "vm": "1",
    },
    "(0032,1010)": {
        "vr": "DA",
        "name": "RETIRED_ScheduledStudyStopDate",
        "vm": "1",
    },
    "(0032,1011)": {
        "vr": "TM",
        "name": "RETIRED_ScheduledStudyStopTime",
        "vm": "1",
    },
    "(0032,1020)": {
        "vr": "LO",
        "name": "RETIRED_ScheduledStudyLocation",
        "vm": "1",
    },
    "(0032,1021)": {
        "vr": "AE",
        "name": "RETIRED_ScheduledStudyLocationAETitle",
        "vm": "1-n",
    },
    "(0032,1030)": {
        "vr": "LO",
        "name": "RETIRED_ReasonForStudy",
        "vm": "1",
    },
    "(0032,1040)": {
        "vr": "DA",
        "name": "RETIRED_StudyArrivalDate",
        "vm": "1",
    },
    "(0032,1041)": {
        "vr": "TM",
        "name": "RETIRED_StudyArrivalTime",
        "vm": "1",
    },
    "(0032,1050)": {
        "vr": "DA",
        "name": "RETIRED_StudyCompletionDate",
        "vm": "1",
    },
    "(0032,1051)": {
        "vr": "TM",
        "name": "RETIRED_StudyCompletionTime",
        "vm": "1",
    },
    "(0032,1055)": {
        "vr": "CS",
        "name": "RETIRED_StudyComponentStatusID",
        "vm": "1",
    },
    "(0032,4000)": {
        "vr": "LT",
        "name": "RETIRED_StudyComments",
        "vm": "1",
    },
    "(0038,0011)": {
        "vr": "LO",
        "name": "RETIRED_IssuerOfAdmissionID",
        "vm": "1",
    },
    "(0038,001A)": {
        "vr": "DA",
        "name": "RETIRED_ScheduledAdmissionDate",
        "vm": "1",
    },
    "(0038,001B)": {
        "vr": "TM",
        "name": "RETIRED_ScheduledAdmissionTime",
        "vm": "1",
    },
    "(0038,001C)": {
        "vr": "DA",
        "name": "RETIRED_ScheduledDischargeDate",
        "vm": "1",
    },
    "(0038,001D)": {
        "vr": "TM",
        "name": "RETIRED_ScheduledDischargeTime",
        "vm": "1",
    },
    "(0038,001E)": {
        "vr": "LO",
        "name": "RETIRED_ScheduledPatientInstitutionResidence",
        "vm": "1",
    },
    "(0038,0030)": {
        "vr": "DA",
        "name": "RETIRED_DischargeDate",
        "vm": "1",
    },
    "(0038,0032)": {
        "vr": "TM",
        "name": "RETIRED_DischargeTime",
        "vm": "1",
    },
    "(0038,0040)": {
        "vr": "LO",
        "name": "RETIRED_DischargeDiagnosisDescription",
        "vm": "1",
    },
    "(0038,0044)": {
        "vr": "SQ",
        "name": "RETIRED_DischargeDiagnosisCodeSequence",
        "vm": "1",
    },
    "(0038,0061)": {
        "vr": "LO",
        "name": "RETIRED_IssuerOfServiceEpisodeID",
        "vm": "1",
    },
    "(0040,0307)": {
        "vr": "DS",
        "name": "RETIRED_DistanceSourceToSupport",
        "vm": "1",
    },
    "(0040,0330)": {
        "vr": "SQ",
        "name": "RETIRED_ReferencedProcedureStepSequence",
        "vm": "1",
    },
    "(0040,050A)": {
        "vr": "LO",
        "name": "RETIRED_SpecimenAccessionNumber",
        "vm": "1",
    },
    "(0040,0550)": {
        "vr": "SQ",
        "name": "RETIRED_SpecimenSequence",
        "vm": "1",
    },
    "(0040,0552)": {
        "vr": "SQ",
        "name": "RETIRED_SpecimenDescriptionSequenceTrial",
        "vm": "1",
    },
    "(0040,0553)": {
        "vr": "ST",
        "name": "RETIRED_SpecimenDescriptionTrial",
        "vm": "1",
    },
    "(0040,06FA)": {
        "vr": "LO",
        "name": "RETIRED_SlideIdentifier",
        "vm": "1",
    },
    "(0040,08D8)": {
        "vr": "SQ",
        "name": "RETIRED_PixelSpacingSequence",
        "vm": "1",
    },
    "(0040,08DA)": {
        "vr": "SQ",
        "name": "RETIRED_CoordinateSystemAxisCodeSequence",
        "vm": "1",
    },
    "(0040,09F8)": {
        "vr": "SQ",
        "name": "RETIRED_VitalStainCodeSequenceTrial",
        "vm": "1",
    },
    "(0040,1006)": {
        "vr": "SH",
        "name": "RETIRED_PlacerOrderNumberProcedure",
        "vm": "1",
    },
    "(0040,1007)": {
        "vr": "SH",
        "name": "RETIRED_FillerOrderNumberProcedure",
        "vm": "1",
    },
    "(0040,1060)": {
        "vr": "LO",
        "name": "RETIRED_RequestedProcedureDescriptionTrial",
        "vm": "1",
    },
    "(0040,2001)": {
        "vr": "LO",
        "name": "RETIRED_ReasonForTheImagingServiceRequest",
        "vm": "1",
    },
    "(0040,2006)": {
        "vr": "SH",
        "name": "RETIRED_PlacerOrderNumberImagingServiceRequestRetired",
        "vm": "1",
    },
    "(0040,2007)": {
        "vr": "SH",
        "name": "RETIRED_FillerOrderNumberImagingServiceRequestRetired",
        "vm": "1",
    },
    "(0040,4001)": {
        "vr": "CS",
        "name": "RETIRED_GeneralPurposeScheduledProcedureStepStatus",
        "vm": "1",
    },
    "(0040,4002)": {
        "vr": "CS",
        "name": "RETIRED_GeneralPurposePerformedProcedureStepStatus",
        "vm": "1",
    },
    "(0040,4003)": {
        "vr": "CS",
        "name": "RETIRED_GeneralPurposeScheduledProcedureStepPriority",
        "vm": "1",
    },
    "(0040,4004)": {
        "vr": "SQ",
        "name": "RETIRED_ScheduledProcessingApplicationsCodeSequence",
        "vm": "1",
    },
    "(0040,4006)": {
        "vr": "CS",
        "name": "RETIRED_MultipleCopiesFlag",
        "vm": "1",
    },
    "(0040,4015)": {
        "vr": "SQ",
        "name": "RETIRED_ResultingGeneralPurposePerformedProcedureStepsSequence",
        "vm": "1",
    },
    "(0040,4016)": {
        "vr": "SQ",
        "name": "RETIRED_ReferencedGeneralPurposeScheduledProcedureStepSequence",
        "vm": "1",
    },
    "(0040,4022)": {
        "vr": "SQ",
        "name": "RETIRED_RelevantInformationSequence",
        "vm": "1",
    },
    "(0040,4023)": {
        "vr": "UI",
        "name": "RETIRED_ReferencedGeneralPurposeScheduledProcedureStepTransactionUID",
        "vm": "1",
    },
    "(0040,4031)": {
        "vr": "SQ",
        "name": "RETIRED_RequestedSubsequentWorkitemCodeSequence",
        "vm": "1",
    },
    "(0040,4032)": {
        "vr": "SQ",
        "name": "RETIRED_NonDICOMOutputCodeSequence",
        "vm": "1",
    },
    "(0040,A007)": {
        "vr": "CS",
        "name": "RETIRED_FindingsFlagTrial",
        "vm": "1",
    },
    "(0040,A020)": {
        "vr": "SQ",
        "name": "RETIRED_FindingsSequenceTrial",
        "vm": "1",
    },
    "(0040,A021)": {
        "vr": "UI",
        "name": "RETIRED_FindingsGroupUIDTrial",
        "vm": "1",
    },
    "(0040,A022)": {
        "vr": "UI",
        "name": "RETIRED_ReferencedFindingsGroupUIDTrial",
        "vm": "1",
    },
    "(0040,A023)": {
        "vr": "DA",
        "name": "RETIRED_FindingsGroupRecordingDateTrial",
        "vm": "1",
    },
    "(0040,A024)": {
        "vr": "TM",
        "name": "RETIRED_FindingsGroupRecordingTimeTrial",
        "vm": "1",
    },
    "(0040,A026)": {
        "vr": "SQ",
        "name": "RETIRED_FindingsSourceCategoryCodeSequenceTrial",
        "vm": "1",
    },
    "(0040,A028)": {
        "vr": "SQ",
        "name": "RETIRED_DocumentingOrganizationIdentifierCodeSequenceTrial",
        "vm": "1",
    },
    "(0040,A047)": {
        "vr": "LO",
        "name": "RETIRED_MeasurementPrecisionDescriptionTrial",
        "vm": "1",
    },
    "(0040,A057)": {
        "vr": "CS",
        "name": "RETIRED_UrgencyOrPriorityAlertsTrial",
        "vm": "1-n",
    },
    "(0040,A060)": {
        "vr": "LO",
        "name": "RETIRED_SequencingIndicatorTrial",
        "vm": "1",
    },
    "(0040,A066)": {
        "vr": "SQ",
        "name": "RETIRED_DocumentIdentifierCodeSequenceTrial",
        "vm": "1",
    },
    "(0040,A067)": {
        "vr": "PN",
        "name": "RETIRED_DocumentAuthorTrial",
        "vm": "1",
    },
    "(0040,A068)": {
        "vr": "SQ",
        "name": "RETIRED_DocumentAuthorIdentifierCodeSequenceTrial",
        "vm": "1",
    },
    "(0040,A070)": {
        "vr": "SQ",
        "name": "RETIRED_IdentifierCodeSequenceTrial",
        "vm": "1",
    },
    "(0040,A074)": {
        "vr": "OB",
        "name": "RETIRED_ObjectBinaryIdentifierTrial",
        "vm": "1",
    },
    "(0040,A076)": {
        "vr": "SQ",
        "name": "RETIRED_DocumentingObserverIdentifierCodeSequenceTrial",
        "vm": "1",
    },
    "(0040,A085)": {
        "vr": "SQ",
        "name": "RETIRED_ProcedureIdentifierCodeSequenceTrial",
        "vm": "1",
    },
    "(0040,A089)": {
        "vr": "OB",
        "name": "RETIRED_ObjectDirectoryBinaryIdentifierTrial",
        "vm": "1",
    },
    "(0040,A090)": {
        "vr": "SQ",
        "name": "RETIRED_EquivalentCDADocumentSequence",
        "vm": "1",
    },
    "(0040,A110)": {
        "vr": "DA",
        "name": "RETIRED_DateOfDocumentOrVerbalTransactionTrial",
        "vm": "1",
    },
    "(0040,A112)": {
        "vr": "TM",
        "name": "RETIRED_TimeOfDocumentCreationOrVerbalTransactionTrial",
        "vm": "1",
    },
    "(0040,A125)": {
        "vr": "CS",
        "name": "RETIRED_ReportStatusIDTrial",
        "vm": "2",
    },
    "(0040,A167)": {
        "vr": "SQ",
        "name": "RETIRED_ObservationCategoryCodeSequenceTrial",
        "vm": "1",
    },
    "(0040,A16A)": {
        "vr": "ST",
        "name": "RETIRED_BibliographicCitationTrial",
        "vm": "1",
    },
    "(0040,A172)": {
        "vr": "UI",
        "name": "RETIRED_ReferencedObservationUIDTrial",
        "vm": "1",
    },
    "(0040,A173)": {
        "vr": "CS",
        "name": "RETIRED_ReferencedObservationClassTrial",
        "vm": "1",
    },
    "(0040,A174)": {
        "vr": "CS",
        "name": "RETIRED_ReferencedObjectObservationClassTrial",
        "vm": "1",
    },
    "(0040,A192)": {
        "vr": "DA",
        "name": "RETIRED_ObservationDateTrial",
        "vm": "1",
    },
    "(0040,A193)": {
        "vr": "TM",
        "name": "RETIRED_ObservationTimeTrial",
        "vm": "1",
    },
    "(0040,A194)": {
        "vr": "CS",
        "name": "RETIRED_MeasurementAutomationTrial",
        "vm": "1",
    },
    "(0040,A224)": {
        "vr": "ST",
        "name": "RETIRED_IdentificationDescriptionTrial",
        "vm": "1",
    },
    "(0040,A290)": {
        "vr": "CS",
        "name": "RETIRED_CoordinatesSetGeometricTypeTrial",
        "vm": "1",
    },
    "(0040,A296)": {
        "vr": "SQ",
        "name": "RETIRED_AlgorithmCodeSequenceTrial",
        "vm": "1",
    },
    "(0040,A297)": {
        "vr": "ST",
        "name": "RETIRED_AlgorithmDescriptionTrial",
        "vm": "1",
    },
    "(0040,A29A)": {
        "vr": "SL",
        "name": "RETIRED_PixelCoordinatesSetTrial",
        "vm": "2-2n",
    },
    "(0040,A307)": {
        "vr": "PN",
        "name": "RETIRED_CurrentObserverTrial",
        "vm": "1",
    },
    "(0040,A313)": {
        "vr": "SQ",
        "name": "RETIRED_ReferencedAccessionSequenceTrial",
        "vm": "1",
    },
    "(0040,A33A)": {
        "vr": "ST",
        "name": "RETIRED_ReportStatusCommentTrial",
        "vm": "1",
    },
    "(0040,A340)": {
        "vr": "SQ",
        "name": "RETIRED_ProcedureContextSequenceTrial",
        "vm": "1",
    },
    "(0040,A352)": {
        "vr": "PN",
        "name": "RETIRED_VerbalSourceTrial",
        "vm": "1",
    },
    "(0040,A353)": {
        "vr": "ST",
        "name": "RETIRED_AddressTrial",
        "vm": "1",
    },
    "(0040,A354)": {
        "vr": "LO",
        "name": "RETIRED_TelephoneNumberTrial",
        "vm": "1",
    },
    "(0040,A358)": {
        "vr": "SQ",
        "name": "RETIRED_VerbalSourceIdentifierCodeSequenceTrial",
        "vm": "1",
    },
    "(0040,A380)": {
        "vr": "SQ",
        "name": "RETIRED_ReportDetailSequenceTrial",
        "vm": "1",
    },
    "(0040,A402)": {
        "vr": "UI",
        "name": "RETIRED_ObservationSubjectUIDTrial",
        "vm": "1",
    },
    "(0040,A403)": {
        "vr": "CS",
        "name": "RETIRED_ObservationSubjectClassTrial",
        "vm": "1",
    },
    "(0040,A404)": {
        "vr": "SQ",
        "name": "RETIRED_ObservationSubjectTypeCodeSequenceTrial",
        "vm": "1",
    },
    "(0040,A600)": {
        "vr": "CS",
        "name": "RETIRED_ObservationSubjectContextFlagTrial",
        "vm": "1",
    },
    "(0040,A601)": {
        "vr": "CS",
        "name": "RETIRED_ObserverContextFlagTrial",
        "vm": "1",
    },
    "(0040,A603)": {
        "vr": "CS",
        "name": "RETIRED_ProcedureContextFlagTrial",
        "vm": "1",
    },
    "(0040,A731)": {
        "vr": "SQ",
        "name": "RETIRED_RelationshipSequenceTrial",
        "vm": "1",
    },
    "(0040,A732)": {
        "vr": "SQ",
        "name": "RETIRED_RelationshipTypeCodeSequenceTrial",
        "vm": "1",
    },
    "(0040,A744)": {
        "vr": "SQ",
        "name": "RETIRED_LanguageCodeSequenceTrial",
        "vm": "1",
    },
    "(0040,A992)": {
        "vr": "ST",
        "name": "RETIRED_UniformResourceLocatorTrial",
        "vm": "1",
    },
    "(0040,DB06)": {
        "vr": "DT",
        "name": "RETIRED_TemplateVersion",
        "vm": "1",
    },
    "(0040,DB07)": {
        "vr": "DT",
        "name": "RETIRED_TemplateLocalVersion",
        "vm": "1",
    },
    "(0040,DB0B)": {
        "vr": "CS",
        "name": "RETIRED_TemplateExtensionFlag",
        "vm": "1",
    },
    "(0040,DB0C)": {
        "vr": "UI",
        "name": "RETIRED_TemplateExtensionOrganizationUID",
        "vm": "1",
    },
    "(0040,DB0D)": {
        "vr": "UI",
        "name": "RETIRED_TemplateExtensionCreatorUID",
        "vm": "1",
    },
    "(0054,1400)": {
        "vr": "CS",
        "name": "RETIRED_CountsIncluded",
        "vm": "1-n",
    },
    "(0054,1401)": {
        "vr": "CS",
        "name": "RETIRED_DeadTimeCorrectionFlag",
        "vm": "1",
    },
    "(0070,0040)": {
        "vr": "IS",
        "name": "RETIRED_ImageRotationRetired",
        "vm": "1",
    },
    "(0070,0050)": {
        "vr": "US",
        "name": "RETIRED_DisplayedAreaTopLeftHandCornerTrial",
        "vm": "2",
    },
    "(0070,0051)": {
        "vr": "US",
        "name": "RETIRED_DisplayedAreaBottomRightHandCornerTrial",
        "vm": "2",
    },
    "(0070,0067)": {
        "vr": "US",
        "name": "RETIRED_GraphicLayerRecommendedDisplayRGBValue",
        "vm": "3",
    },
    "(0074,1024)": {
        "vr": "IS",
        "name": "RETIRED_BeamOrderIndexTrial",
        "vm": "1",
    },
    "(0074,1038)": {
        "vr": "DS",
        "name": "RETIRED_DoubleExposureMetersetTrial",
        "vm": "1",
    },
    "(0074,103A)": {
        "vr": "DS",
        "name": "RETIRED_DoubleExposureFieldDeltaTrial",
        "vm": "4",
    },
    "(0074,1220)": {
        "vr": "SQ",
        "name": "RETIRED_RelatedProcedureStepSequence",
        "vm": "1",
    },
    "(0074,1222)": {
        "vr": "LO",
        "name": "RETIRED_ProcedureStepRelationshipType",
        "vm": "1",
    },
    "(0088,0904)": {
        "vr": "LO",
        "name": "RETIRED_TopicTitle",
        "vm": "1",
    },
    "(0088,0906)": {
        "vr": "ST",
        "name": "RETIRED_TopicSubject",
        "vm": "1",
    },
    "(0088,0910)": {
        "vr": "LO",
        "name": "RETIRED_TopicAuthor",
        "vm": "1",
    },
    "(0088,0912)": {
        "vr": "LO",
        "name": "RETIRED_TopicKeywords",
        "vm": "1-32",
    },
    "(1000,0010)": {
        "vr": "US",
        "name": "RETIRED_EscapeTriplet",
        "vm": "3",
    },
    "(1000,0011)": {
        "vr": "US",
        "name": "RETIRED_RunLengthTriplet",
        "vm": "3",
    },
    "(1000,0012)": {
        "vr": "US",
        "name": "RETIRED_HuffmanTableSize",
        "vm": "1",
    },
    "(1000,0013)": {
        "vr": "US",
        "name": "RETIRED_HuffmanTableTriplet",
        "vm": "3",
    },
    "(1000,0014)": {
        "vr": "US",
        "name": "RETIRED_ShiftTableSize",
        "vm": "1",
    },
    "(1000,0015)": {
        "vr": "US",
        "name": "RETIRED_ShiftTableTriplet",
        "vm": "3",
    },
    "(1010,0004)": {
        "vr": "US",
        "name": "RETIRED_ZonalMap",
        "vm": "1-n",
    },
    "(2000,0062)": {
        "vr": "CS",
        "name": "RETIRED_ColorImagePrintingFlag",
        "vm": "1",
    },
    "(2000,0063)": {
        "vr": "CS",
        "name": "RETIRED_CollationFlag",
        "vm": "1",
    },
    "(2000,0065)": {
        "vr": "CS",
        "name": "RETIRED_AnnotationFlag",
        "vm": "1",
    },
    "(2000,0067)": {
        "vr": "CS",
        "name": "RETIRED_ImageOverlayFlag",
        "vm": "1",
    },
    "(2000,0069)": {
        "vr": "CS",
        "name": "RETIRED_PresentationLUTFlag",
        "vm": "1",
    },
    "(2000,006A)": {
        "vr": "CS",
        "name": "RETIRED_ImageBoxPresentationLUTFlag",
        "vm": "1",
    },
    "(2000,0510)": {
        "vr": "SQ",
        "name": "RETIRED_ReferencedStoredPrintSequence",
        "vm": "1",
    },
    "(2020,0130)": {
        "vr": "SQ",
        "name": "RETIRED_ReferencedImageOverlayBoxSequence",
        "vm": "1",
    },
    "(2020,0140)": {
        "vr": "SQ",
        "name": "RETIRED_ReferencedVOILUTBoxSequence",
        "vm": "1",
    },
    "(2040,0010)": {
        "vr": "SQ",
        "name": "RETIRED_ReferencedOverlayPlaneSequence",
        "vm": "1",
    },
    "(2040,0011)": {
        "vr": "US",
        "name": "RETIRED_ReferencedOverlayPlaneGroups",
        "vm": "1-99",
    },
    "(2040,0020)": {
        "vr": "SQ",
        "name": "RETIRED_OverlayPixelDataSequence",
        "vm": "1",
    },
    "(2040,0060)": {
        "vr": "CS",
        "name": "RETIRED_OverlayMagnificationType",
        "vm": "1",
    },
    "(2040,0070)": {
        "vr": "CS",
        "name": "RETIRED_OverlaySmoothingType",
        "vm": "1",
    },
    "(2040,0072)": {
        "vr": "CS",
        "name": "RETIRED_OverlayOrImageMagnification",
        "vm": "1",
    },
    "(2040,0074)": {
        "vr": "US",
        "name": "RETIRED_MagnifyToNumberOfColumns",
        "vm": "1",
    },
    "(2040,0080)": {
        "vr": "CS",
        "name": "RETIRED_OverlayForegroundDensity",
        "vm": "1",
    },
    "(2040,0082)": {
        "vr": "CS",
        "name": "RETIRED_OverlayBackgroundDensity",
        "vm": "1",
    },
    "(2040,0090)": {
        "vr": "CS",
        "name": "RETIRED_OverlayMode",
        "vm": "1",
    },
    "(2040,0100)": {
        "vr": "CS",
        "name": "RETIRED_ThresholdDensity",
        "vm": "1",
    },
    "(2040,0500)": {
        "vr": "SQ",
        "name": "RETIRED_ReferencedImageBoxSequenceRetired",
        "vm": "1",
    },
    "(2100,0010)": {
        "vr": "SH",
        "name": "RETIRED_PrintJobID",
        "vm": "1",
    },
    "(2100,0140)": {
        "vr": "AE",
        "name": "RETIRED_DestinationAE",
        "vm": "1",
    },
    "(2100,0500)": {
        "vr": "SQ",
        "name": "RETIRED_ReferencedPrintJobSequencePullStoredPrint",
        "vm": "1",
    },
    "(2110,0099)": {
        "vr": "SH",
        "name": "RETIRED_PrintQueueID",
        "vm": "1",
    },
    "(2120,0010)": {
        "vr": "CS",
        "name": "RETIRED_QueueStatus",
        "vm": "1",
    },
    "(2120,0050)": {
        "vr": "SQ",
        "name": "RETIRED_PrintJobDescriptionSequence",
        "vm": "1",
    },
    "(2120,0070)": {
        "vr": "SQ",
        "name": "RETIRED_ReferencedPrintJobSequence",
        "vm": "1",
    },
    "(2130,0010)": {
        "vr": "SQ",
        "name": "RETIRED_PrintManagementCapabilitiesSequence",
        "vm": "1",
    },
    "(2130,0015)": {
        "vr": "SQ",
        "name": "RETIRED_PrinterCharacteristicsSequence",
        "vm": "1",
    },
    "(2130,0030)": {
        "vr": "SQ",
        "name": "RETIRED_FilmBoxContentSequence",
        "vm": "1",
    },
    "(2130,0040)": {
        "vr": "SQ",
        "name": "RETIRED_ImageBoxContentSequence",
        "vm": "1",
    },
    "(2130,0050)": {
        "vr": "SQ",
        "name": "RETIRED_AnnotationContentSequence",
        "vm": "1",
    },
    "(2130,0060)": {
        "vr": "SQ",
        "name": "RETIRED_ImageOverlayBoxContentSequence",
        "vm": "1",
    },
    "(2130,0080)": {
        "vr": "SQ",
        "name": "RETIRED_PresentationLUTContentSequence",
        "vm": "1",
    },
    "(2130,00A0)": {
        "vr": "SQ",
        "name": "RETIRED_ProposedStudySequence",
        "vm": "1",
    },
    "(2130,00C0)": {
        "vr": "SQ",
        "name": "RETIRED_OriginalImageSequence",
        "vm": "1",
    },
    "(3006,00C0)": {
        "vr": "SQ",
        "name": "RETIRED_FrameOfReferenceRelationshipSequence",
        "vm": "1",
    },
    "(3006,00C2)": {
        "vr": "UI",
        "name": "RETIRED_RelatedFrameOfReferenceUID",
        "vm": "1",
    },
    "(3006,00C4)": {
        "vr": "CS",
        "name": "RETIRED_FrameOfReferenceTransformationType",
        "vm": "1",
    },
    "(300A,0088)": {
        "vr": "FL",
        "name": "RETIRED_BeamDosePointDepth",
        "vm": "1",
    },
    "(300A,0089)": {
        "vr": "FL",
        "name": "RETIRED_BeamDosePointEquivalentDepth",
        "vm": "1",
    },
    "(300A,008A)": {
        "vr": "FL",
        "name": "RETIRED_BeamDosePointSSD",
        "vm": "1",
    },
    "(4000,0010)": {
        "vr": "LT",
        "name": "RETIRED_Arbitrary",
        "vm": "1",
    },
    "(4000,4000)": {
        "vr": "LT",
        "name": "RETIRED_TextComments",
        "vm": "1",
    },
    "(4008,0040)": {
        "vr": "SH",
        "name": "RETIRED_ResultsID",
        "vm": "1",
    },
    "(4008,0042)": {
        "vr": "LO",
        "name": "RETIRED_ResultsIDIssuer",
        "vm": "1",
    },
    "(4008,0050)": {
        "vr": "SQ",
        "name": "RETIRED_ReferencedInterpretationSequence",
        "vm": "1",
    },
    "(4008,00FF)": {
        "vr": "CS",
        "name": "RETIRED_ReportProductionStatusTrial",
        "vm": "1",
    },
    "(4008,0100)": {
        "vr": "DA",
        "name": "RETIRED_InterpretationRecordedDate",
        "vm": "1",
    },
    "(4008,0101)": {
        "vr": "TM",
        "name": "RETIRED_InterpretationRecordedTime",
        "vm": "1",
    },
    "(4008,0102)": {
        "vr": "PN",
        "name": "RETIRED_InterpretationRecorder",
        "vm": "1",
    },
    "(4008,0103)": {
        "vr": "LO",
        "name": "RETIRED_ReferenceToRecordedSound",
        "vm": "1",
    },
    "(4008,0108)": {
        "vr": "DA",
        "name": "RETIRED_InterpretationTranscriptionDate",
        "vm": "1",
    },
    "(4008,0109)": {
        "vr": "TM",
        "name": "RETIRED_InterpretationTranscriptionTime",
        "vm": "1",
    },
    "(4008,010A)": {
        "vr": "PN",
        "name": "RETIRED_InterpretationTranscriber",
        "vm": "1",
    },
    "(4008,010B)": {
        "vr": "ST",
        "name": "RETIRED_InterpretationText",
        "vm": "1",
    },
    "(4008,010C)": {
        "vr": "PN",
        "name": "RETIRED_InterpretationAuthor",
        "vm": "1",
    },
    "(4008,0111)": {
        "vr": "SQ",
        "name": "RETIRED_InterpretationApproverSequence",
        "vm": "1",
    },
    "(4008,0112)": {
        "vr": "DA",
        "name": "RETIRED_InterpretationApprovalDate",
        "vm": "1",
    },
    "(4008,0113)": {
        "vr": "TM",
        "name": "RETIRED_InterpretationApprovalTime",
        "vm": "1",
    },
    "(4008,0114)": {
        "vr": "PN",
        "name": "RETIRED_PhysicianApprovingInterpretation",
        "vm": "1",
    },
    "(4008,0115)": {
        "vr": "LT",
        "name": "RETIRED_InterpretationDiagnosisDescription",
        "vm": "1",
    },
    "(4008,0117)": {
        "vr": "SQ",
        "name": "RETIRED_InterpretationDiagnosisCodeSequence",
        "vm": "1",
    },
    "(4008,0118)": {
        "vr": "SQ",
        "name": "RETIRED_ResultsDistributionListSequence",
        "vm": "1",
    },
    "(4008,0119)": {
        "vr": "PN",
        "name": "RETIRED_DistributionName",
        "vm": "1",
    },
    "(4008,011A)": {
        "vr": "LO",
        "name": "RETIRED_DistributionAddress",
        "vm": "1",
    },
    "(4008,0200)": {
        "vr": "SH",
        "name": "RETIRED_InterpretationID",
        "vm": "1",
    },
    "(4008,0202)": {
        "vr": "LO",
        "name": "RETIRED_InterpretationIDIssuer",
        "vm": "1",
    },
    "(4008,0210)": {
        "vr": "CS",
        "name": "RETIRED_InterpretationTypeID",
        "vm": "1",
    },
    "(4008,0212)": {
        "vr": "CS",
        "name": "RETIRED_InterpretationStatusID",
        "vm": "1",
    },
    "(4008,0300)": {
        "vr": "ST",
        "name": "RETIRED_Impressions",
        "vm": "1",
    },
    "(4008,4000)": {
        "vr": "ST",
        "name": "RETIRED_ResultsComments",
        "vm": "1",
    },
    "(5000-50FF,0005)": {
        "vr": "US",
        "name": "RETIRED_CurveDimensions",
        "vm": "1",
    },
    "(5000-50FF,0010)": {
        "vr": "US",
        "name": "RETIRED_NumberOfPoints",
        "vm": "1",
    },
    "(5000-50FF,0020)": {
        "vr": "CS",
        "name": "RETIRED_TypeOfData",
        "vm": "1",
    },
    "(5000-50FF,0022)": {
        "vr": "LO",
        "name": "RETIRED_CurveDescription",
        "vm": "1",
    },
    "(5000-50FF,0030)": {
        "vr": "SH",
        "name": "RETIRED_AxisUnits",
        "vm": "1-n",
    },
    "(5000-50FF,0040)": {
        "vr": "SH",
        "name": "RETIRED_AxisLabels",
        "vm": "1-n",
    },
    "(5000-50FF,0103)": {
        "vr": "US",
        "name": "RETIRED_DataValueRepresentation",
        "vm": "1",
    },
    "(5000-50FF,0104)": {
        "vr": "US",
        "name": "RETIRED_MinimumCoordinateValue",
        "vm": "1-n",
    },
    "(5000-50FF,0105)": {
        "vr": "US",
        "name": "RETIRED_MaximumCoordinateValue",
        "vm": "1-n",
    },
    "(5000-50FF,0106)": {
        "vr": "SH",
        "name": "RETIRED_CurveRange",
        "vm": "1-n",
    },
    "(5000-50FF,0110)": {
        "vr": "US",
        "name": "RETIRED_CurveDataDescriptor",
        "vm": "1-n",
    },
    "(5000-50FF,0112)": {
        "vr": "US",
        "name": "RETIRED_CoordinateStartValue",
        "vm": "1-n",
    },
    "(5000-50FF,0114)": {
        "vr": "US",
        "name": "RETIRED_CoordinateStepValue",
        "vm": "1-n",
    },
    "(5000-50FF,1001)": {
        "vr": "CS",
        "name": "RETIRED_CurveActivationLayer",
        "vm": "1",
    },
    "(5000-50FF,2000)": {
        "vr": "US",
        "name": "RETIRED_AudioType",
        "vm": "1",
    },
    "(5000-50FF,2002)": {
        "vr": "US",
        "name": "RETIRED_AudioSampleFormat",
        "vm": "1",
    },
    "(5000-50FF,2004)": {
        "vr": "US",
        "name": "RETIRED_NumberOfChannels",
        "vm": "1",
    },
    "(5000-50FF,2006)": {
        "vr": "UL",
        "name": "RETIRED_NumberOfSamples",
        "vm": "1",
    },
    "(5000-50FF,2008)": {
        "vr": "UL",
        "name": "RETIRED_SampleRate",
        "vm": "1",
    },
    "(5000-50FF,200A)": {
        "vr": "UL",
        "name": "RETIRED_TotalTime",
        "vm": "1",
    },
    "(5000-50FF,200C)": {
        "vr": "ox",
        "name": "RETIRED_AudioSampleData",
        "vm": "1",
    },
    "(5000-50FF,200E)": {
        "vr": "LT",
        "name": "RETIRED_AudioComments",
        "vm": "1",
    },
    "(5000-50FF,2500)": {
        "vr": "LO",
        "name": "RETIRED_CurveLabel",
        "vm": "1",
    },
    "(5000-50FF,2600)": {
        "vr": "SQ",
        "name": "RETIRED_CurveReferencedOverlaySequence",
        "vm": "1",
    },
    "(5000-50FF,2610)": {
        "vr": "US",
        "name": "RETIRED_CurveReferencedOverlayGroup",
        "vm": "1",
    },
    "(5000-50FF,3000)": {
        "vr": "ox",
        "name": "RETIRED_CurveData",
        "vm": "1",
    },
    "(6000-60FF,0012)": {
        "vr": "US",
        "name": "RETIRED_OverlayPlanes",
        "vm": "1",
    },
    "(6000-60FF,0052)": {
        "vr": "US",
        "name": "RETIRED_OverlayPlaneOrigin",
        "vm": "1",
    },
    "(6000-60FF,0060)": {
        "vr": "CS",
        "name": "RETIRED_OverlayCompressionCode",
        "vm": "1",
    },
    "(6000-60FF,0061)": {
        "vr": "SH",
        "name": "RETIRED_OverlayCompressionOriginator",
        "vm": "1",
    },
    "(6000-60FF,0062)": {
        "vr": "SH",
        "name": "RETIRED_OverlayCompressionLabel",
        "vm": "1",
    },
    "(6000-60FF,0063)": {
        "vr": "CS",
        "name": "RETIRED_OverlayCompressionDescription",
        "vm": "1",
    },
    "(6000-60FF,0066)": {
        "vr": "AT",
        "name": "RETIRED_OverlayCompressionStepPointers",
        "vm": "1-n",
    },
    "(6000-60FF,0068)": {
        "vr": "US",
        "name": "RETIRED_OverlayRepeatInterval",
        "vm": "1",
    },
    "(6000-60FF,0069)": {
        "vr": "US",
        "name": "RETIRED_OverlayBitsGrouped",
        "vm": "1",
    },
    "(6000-60FF,0110)": {
        "vr": "CS",
        "name": "RETIRED_OverlayFormat",
        "vm": "1",
    },
    "(6000-60FF,0200)": {
        "vr": "US",
        "name": "RETIRED_OverlayLocation",
        "vm": "1",
    },
    "(6000-60FF,0800)": {
        "vr": "CS",
        "name": "RETIRED_OverlayCodeLabel",
        "vm": "1-n",
    },
    "(6000-60FF,0802)": {
        "vr": "US",
        "name": "RETIRED_OverlayNumberOfTables",
        "vm": "1",
    },
    "(6000-60FF,0803)": {
        "vr": "AT",
        "name": "RETIRED_OverlayCodeTableLocation",
        "vm": "1-n",
    },
    "(6000-60FF,0804)": {
        "vr": "US",
        "name": "RETIRED_OverlayBitsForCodeWord",
        "vm": "1",
    },
    "(6000-60FF,1100)": {
        "vr": "US",
        "name": "RETIRED_OverlayDescriptorGray",
        "vm": "1",
    },
    "(6000-60FF,1101)": {
        "vr": "US",
        "name": "RETIRED_OverlayDescriptorRed",
        "vm": "1",
    },
    "(6000-60FF,1102)": {
        "vr": "US",
        "name": "RETIRED_OverlayDescriptorGreen",
        "vm": "1",
    },
    "(6000-60FF,1103)": {
        "vr": "US",
        "name": "RETIRED_OverlayDescriptorBlue",
        "vm": "1",
    },
    "(6000-60FF,1200)": {
        "vr": "US",
        "name": "RETIRED_OverlaysGray",
        "vm": "1-n",
    },
    "(6000-60FF,1201)": {
        "vr": "US",
        "name": "RETIRED_OverlaysRed",
        "vm": "1-n",
    },
    "(6000-60FF,1202)": {
        "vr": "US",
        "name": "RETIRED_OverlaysGreen",
        "vm": "1-n",
    },
    "(6000-60FF,1203)": {
        "vr": "US",
        "name": "RETIRED_OverlaysBlue",
        "vm": "1-n",
    },
    "(6000-60FF,4000)": {
        "vr": "LT",
        "name": "RETIRED_OverlayComments",
        "vm": "1",
    },
    "(7FE0,0020)": {
        "vr": "OW",
        "name": "RETIRED_CoefficientsSDVN",
        "vm": "1",
    },
    "(7FE0,0030)": {
        "vr": "OW",
        "name": "RETIRED_CoefficientsSDHN",
        "vm": "1",
    },
    "(7FE0,0040)": {
        "vr": "OW",
        "name": "RETIRED_CoefficientsSDDN",
        "vm": "1",
    },
    "(7F00-7FFF,0010)": {
        "vr": "ox",
        "name": "RETIRED_VariablePixelData",
        "vm": "1",
    },
    "(7F00-7FFF,0011)": {
        "vr": "US",
        "name": "RETIRED_VariableNextDataGroup",
        "vm": "1",
    },
    "(7F00-7FFF,0020)": {
        "vr": "OW",
        "name": "RETIRED_VariableCoefficientsSDVN",
        "vm": "1",
    },
    "(7F00-7FFF,0030)": {
        "vr": "OW",
        "name": "RETIRED_VariableCoefficientsSDHN",
        "vm": "1",
    },
    "(7F00-7FFF,0040)": {
        "vr": "OW",
        "name": "RETIRED_VariableCoefficientsSDDN",
        "vm": "1",
    }
};
export default Foo;
//# sourceMappingURL=dictionary.js.map