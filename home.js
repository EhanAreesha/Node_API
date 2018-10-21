var showHome = function (req, res) {
    res.set({

        'content-type': 'application/json'
    }).send(JSON.stringify([
        {
            url: '/api/onEms/getLoginInformation/:username/:password',
            operation: "Get",
            description: 'Get Login Data'
        },
        {
            url: '/api/onEms/setmenu',
            operation: "POST",
            description: 'Post cmnMenu'
        },
        {
            url: '/api/onEms/setModule',
            operation: "POST",
            description: 'Post cmnMenu'
        }
        ,
        {
            url: '/api/onEms/savePremissionRecord',
            operation: "POST",
            description: 'Post savePremissionRecord'
        },
        {
            url: '/api/onEms/setMenuPermission',
            operation: "POST",
            description: 'Post set Menu Permission'
        },
        {
            url: '/api/onEms/updateModulePermission',
            operation: "POST",
            description: 'Update Module Permission'
        },
        {
            url: '/api/onEms/getmenu',
            operation: "GET",
            description: 'GET All Menu'
        },
        {
            url: '/api/onEms/getmenu/:id',
            operation: "GET",
            description: 'GET Menu By Id'
        },
        {
            url: '/api/onEms/getReceiveVoucher/:instituteId/:p2/:p3/:LoggedUserID/:pageNumber/:pageSize/:IsPaging/:SearchProperty',
            operation: "GET",
            description: 'GET getPaymentVoucher'
        },
        {
            url: '/api/onEms/getNetReceive/:InstituteID/:MediumID/:ClassID/:DepartmentID/:SectionID/:ShiftID/:UserID',
            operation: "GET",
            description: 'GET Net Receive'
        },

        {
            url: '/api/onEms/getmenutype',
            operation: "GET",
            description: 'GET All Menutype'
        },
        {
            url: '/api/onEms/getmodule/:moduleID',
            operation: "GET",
            description: 'GET All Module'
        },
        {
            url: '/api/onEms/setClass',
            operation: "POST",
            description: 'POST cmnClass'
        },
        {
            url: '/api/onEms/getAllClasses',
            operation: "GET",
            description: 'GET All Class'
        }
        ,
        {
            url: '/api/onEms/getStatus',
            operation: "GET",
            description: 'GET Status'
        }
        ,
        {
            url: '/api/onEms/getLoginUser',
            operation: "GET",
            description: 'GET Status'
        },

        {
            url: '/api/onEms/getClassByID/:id',
            operation: "GET",
            description: 'GET Class By ID'
        },
        {
            url: '/api/onEms/getInstitute',
            operation: "GET",
            description: 'GET All Institute'
        },

        {
            url: '/api/onEms/getAllInstitute',
            operation: "GET",
            description: 'GET All Institute'
        },
        {
            url: '/api/onEms/getClassByInsID/:insid/:mediumId',
            operation: "GET",
            description: 'GET getClass by institute & medium id'
        },
        {
            url: '/api/onEms/getSectionByID/:insId/:ClId',
            operation: "GET",
            description: 'GET section  by institute id and Class id'
        },
        {
            url: '/api/onEms/getShift/:Insid',
            operation: "GET",
            description: 'GET cmnShift by Institute id'
        },
        {
            url: '/api/onEms/setClassAndSection',
            operation: "POST",
            description: 'Post class'
        },
        {
            url: '/api/onEms/getUserByUserTypeId/:uId:insId',
            operation: "get",
            description: 'get User by user type id and institute id'
        },

        {
            url: '/api/onEms/getrelation',
            operation: "GET",
            description: 'GET All Relation'
        },
        {
            url: '/api/onEms/getreligion',
            operation: "GET",
            description: 'GET All Religion'
        },
        {
            url: '/api/onEms/getbloodgroups',
            operation: "GET",
            description: 'GET All Religion'
        },
        {
            url: '/api/onEms/getallcountry',
            operation: "GET",
            description: 'GET All Country'
        },
        {
            url: '/api/onEms/getallcity',
            operation: "GET",
            description: 'GET All City'
        },
        {
            url: '/api/onEms/getallstate',
            operation: "GET",
            description: 'GET All City'
        },
        {
            url: '/api/onEms/getallboard',
            operation: "GET",
            description: 'GET All Board'
        },
        {
            url: '/api/onEms/getallexam',
            operation: "GET",
            description: 'GET All Exam'
        },
        {
            url: '/api/onEms/getallgrade',
            operation: "GET",
            description: 'GET All Grades'
        },
        {
            url: '/api/onEms/getallsession',
            operation: "GET",
            description: 'GET All Session'
        },
        {
            url: '/api/onEms/getallgender',
            operation: "GET",
            description: 'GET All Gender'
        },
        {
            url: '/api/onEms/setUserGuardian',
            operation: "POST",
            description: 'Post All User Guardian'
        },
        {
            url: '/api/onEms/setUserStudent',
            operation: "POST",
            description: 'Post All User Student'
        },
        {
            url: '/api/onEms/getUser',
            operation: "GET",
            description: 'GET All User Guardian'
        },
        {
            url: '/api/onEms/getLastInputUser',
            operation: "GET",
            description: 'GET Last User Iformation'
        },
        {
            url: '/api/onEms/getUser/:id',
            operation: "GET",
            description: 'GET User By ID'
        },
        {
            url: '/api/onEms/getUserMasterDetails/:userID',
            operation: "GET",
            description: 'GET User Master Details By ID'
        },
        {
            url: '/api/onEms/deleteUser/:userID',
            operation: "DELETE",
            description: 'Delete User'
        },
        {
            url: '/api/onEms/setBulkAddress',
            operation: "POST",
            description: 'POST BULK ADDRESS'
        },
        {
            url: '/api/onEms/setShift',
            operation: "POST",
            description: 'POST cmnShift'
        },
        {
            url: '/api/onEms/getShift',
            operation: "GET",
            description: 'POST cmnShift'
        },
        {
            url: '/api/onEms/getShiftById/:id',
            operation: "GET",
            description: 'POST cmnShift'
        },
        {
            url: '/api/onEms/setAdress',
            operation: "POST",
            description: 'POST cmnAdress'
        },
        {
            url: '/api/onEms/getAdress',
            operation: "GET",
            description: 'GET cmnAdress'
        },
        {
            url: '/api/onEms/getCityById/:id',
            operation: "GET",
            description: 'GET cmnAdress'
        },
        {
            url: '/api/onEms/setMail',
            operation: "GET",
            description: 'GET cmnMail'
        },
        {
            url: '/api/onEms/getMail',
            operation: "GET",
            description: 'GET cmnMail'
        },
        {
            url: '/api/onEms/getMailById/:id',
            operation: "GET",
            description: 'GET cmnMail'
        },
        {
            url: '/api/onEms/setRelation',
            operation: "POST",
            description: 'Post cmnRelation'
        },
        {
            url: '/api/onEms/getRelation',
            operation: "GET",
            description: 'Get cmnRelation'
        },
        {
            url: '/api/onEms/getRelationByID/:id',
            operation: "GET",
            description: 'GET Relation By ID'
        },
        {
            url: '/api/onEms/setReligion',
            operation: "POST",
            description: 'Post cmnReligion'
        },
        {
            url: '/api/onEms/getreligion',
            operation: "GET",
            description: 'GET All Religion'
        },
        {
            url: '/api/onEms/getReligionByID/:id',
            operation: "GET",
            description: 'GET Religion By ID'
        },
        {
            url: '/api/onEms/setmedium',
            operation: "POST",
            description: 'Post cmnMedium'
        },
        {
            url: '/api/onEms/getMedium',
            operation: "GET",
            description: 'Get cmnMedium'
        },
        {
            url: '/api/onEms/getMediumByID/:id',
            operation: "GET",
            description: 'GET Medium By ID'
        },
        {
            url: '/api/onEms/setBranch',
            operation: "POST",
            description: 'Post cmnBranch'
        },
        {
            url: '/api/onEms/getBranch',
            operation: "GET",
            description: 'Get Ins branch'
        },
        {
            url: '/api/onEms/getBranchByID/:insid/:BranchId',
            operation: "GET",
            description: 'GET Branch By instituteID and branch id'
        },
        {
            url: '/api/onEms/getBranchByInsID/:insid',
            operation: "GET",
            description: 'GET Branch By instituteID '
        },
        {
            url: '/api/onEms/getBranchByBranchID/:id',
            operation: "GET",
            description: 'GET Branch By branch id '
        },
        {
            url: '/api/onEms/setExperienceList',
            operation: "POST",
            description: 'Post cmnExperienceList'
        },
        {
            url: '/api/onEms/getExperienceList',
            operation: "GET",
            description: 'Get cmnExperienceList'
        },
        {
            url: '/api/onEms/getExperienceListByID/:id',
            operation: "GET",
            description: 'GET ExperienceList By ID'
        },
        {
            url: '/api/onEms/setUserDesignation',
            operation: "POST",
            description: 'Post InsUserDesignation'
        },
        {
            url: '/api/onEms/getUserDesignation',
            operation: "GET",
            description: 'Get InsUserDesignation'
        },
        {
            url: '/api/onEms/getUserDesignationByID/:id',
            operation: "GET",
            description: 'GET UserDesignation By ID'
        },
        {
            url: '/api/onEms/getCmnGrade',
            operation: "GET",
            description: 'GET getCmnGrade'
        },
        {
            url: '/api/onEms/postCmnGrade',
            operation: "POST",
            description: 'POST postCmnGrade'
        },
        {
            url: '/api/onEms/getCmnGradeById/:id',
            operation: "GET",
            description: 'GET getCmnGradeById'
        },
        {
            url: '/api/onEms/getCmnSection',
            operation: "GET",
            description: 'GET getCmnSection'
        },
        {
            url: '/api/onEms/postCmnSection',
            operation: "POST",
            description: 'GET postCmnSection'
        },
        {
            url: '/api/onEms/getCmnSectionById/:id',
            operation: "GET",
            description: 'GET getCmnSectionById'
        },
        {
            url: '/api/onEms/gethrmDeviceByParmsforStudent/:ShiftID/:MediumID/:ClassID/:SectionID/:Date/:IsPresent/:IsAbsent/:InstituteID/:UserTypeID',
            operation: "GET",
            description: 'GET gethrmDeviceByParmsforStudent'
        },
        {
            url: '/api/onEms/getHrmStudentAttendanceforManual/:ShiftID/:MediumID/:ClassID/:SectionID/:Date/:IsPresent/:IsAbsent/:InstituteID/:UserTypeID',
            operation: "GET",
            description: 'GET gethrmDeviceByParmsforStudentManual'
        },
        {
            url: '/api/onEms/gethrmDeviceByParmsforTeacher/:BrunchID/:DepartmentID/:Date/:InstituteID/:UserTypeID',
            operation: "GET",
            description: 'GET gethrmDeviceByParmsforTeacher'
        },
        {
            url: '/api/onEms/getHrmTeacherAttendanceManual/:BrunchID/:DepartmentID/:Date/:InstituteID/:UserTypeID',
            operation: "GET",
            description: 'GET getHrmTeacherAttendanceManual'
        },
        {
            url: '/api/onEms/getHrmTotalStudentAttendance/:ShiftID/:MediumID/:ClassID/:SectionID/:Date/:instituteid/:UserTypeID',
            operation: "GET",
            description: 'GET getHrmTotalStudentAttendance'
        },
        {
            url: '/api/onEms/getHrmTotalTeacherAttendance/:BrunchID/:DepartmentID/:Date/:instituteid/:UserTypeID',
            operation: "GET",
            description: 'GET getHrmTotalTeacherAttendance'
        },
        {
            url: '/api/onEms/sendMailer',
            operation: "POST",
            description: 'POST Mail'
        },
        {
            url: '/api/onEms/getCmnDepertment',
            operation: "GET",
            description: 'GET getCmnDepertment'
        },
        {
            url: '/api/onEms/getMailSetup',
            operation: "GET",
            description: 'GET getMailSetup'
        },
        {
            url: '/api/onEms/getAllStudentByInsID/:Insid',
            operation: "GET",
            description: 'GET getAllStudent By InstituteID'
        },
        {
            url: '/api/onEms/getCmnSubject',
            operation: "GET",
            description: 'GET getCmnSubject'
        },
        {
            url: '/api/onEms/getSubjectByParms/:InstituteID/:DepartmentID/:MediumID/:ClassID',
            operation: "GET",
            description: 'GET getSubjectByParams'
        },
        {
            url: '/api/onEms/postSubject',
            operation: "POST",
            description: 'POST postSubject'
        },
        {
            url: '/api/onEms/getCmnUserResistrationByUserID/:id',
            operation: "GET",
            description: 'GET getCmnUserResistrationByUserID'
        },
        {
            url: '/api/onEms/postCmnUserResistration',
            operation: "POST",
            description: 'POST postCmnUserResistration'
        },
        {
            url: '/api/onEms/getUserExprienceList',
            operation: "GET",
            description: 'GET User Exprience'
        },
        {
            url: '/api/onEms/getInsSubject/:InstituteID/:Did/:Mid/:Cid',
            operation: "GET",
            description: 'GET Ins Subject by Medium id and class id'
        },
        {
            url: '/api/onEms/getHrmSubWiseAtdDetail/:Insid/:Mid/:Shid/:Cid/:Secid/:Subid/:deptid',
            operation: "GET",
            description: 'GET getHrmSubWiseAtdDetail by 7 ids'
        },
        {
            url: '/api/onEms/setHrmSubWiseAtd',
            operation: "POST",
            description: 'POST getHrmSubWiseAtdDetail'
        },
        {
            url: '/api/onEms/getMonth',
            operation: "GET",
            description: 'Get All Month'
        },
        {
            url: '/api/onEms/getHrmSubWiseAtdDetail/:Insid/:Mid/:Shid/:Cid/:Secid/:Subid/:deptid',
            operation: "GET",
            description: 'GET getHrmSubWiseAtdDetail by 7 ids'
        },
        {
            url: '/api/onEms/getStudentMonthlyDeviceAttendance/:shid/:Mid/:cid/:secid/:monid/:RFid',
            operation: "GET",
            description: 'GET getStudentMonthlyDeviceAttendance by 6 ids'
        },
        {
            url: '/api/onEms/getHrmSubWiseAtdByStudentID/:shid/:Mid/:cid/:secid/:uid/:date',
            operation: "GET",
            description: 'GET getHrmSubWiseAtdByStudentID by 5 ids'
        },
        {
            url: '/api/onEms/uploads',
            operation: "POST",
            description: 'POST FILE HERE'
        },
        {
            url: '/api/onEms/setinsExame',
            operation: "POST",
            description: 'POST insExame'
        },
        {
            url: '/api/onEms/getinsExameID/:id',
            operation: "GET",
            description: 'GET getinsExameID'
        },
        {
            url: '/api/onEms/setinsInstitute',
            operation: "POST",
            description: 'POST setinsInstitute'
        },
        {
            url: '/api/onEms/getInstituteByID/:id',
            operation: "GET",
            description: 'GET getInstituteByID'
        },
        {
            url: '/api/onEms/getInstituteAvailableSMS/:insId',
            operation: "GET",
            description: 'GET getInstituteAvailableSMS',
            model: 'insInstitute'
        },
        {
            url: '/api/onEms/getAllInstitute',
            operation: "GET",
            description: 'GET getAllInstitute'
        },
        {
            url: '/api/onEms/getInsShift/:instituteId',
            operation: "Get",
            description: 'Get Institute Shift'
        },
        {
            url: '/api/onEms/getInsMedium/:instituteId',
            operation: "Get",
            description: 'Get Institute Medium'
        },
        {
            url: '/api/onEms/getInsClass/:instituteId',
            operation: "Get",
            description: 'Get Institute Class'
        },
        {
            url: '/api/onEms/getInsSection/:instituteId/:classId',
            operation: "Get",
            description: 'Get Institute Section'
        },
        {
            url: '/api/onEms/getInsDepertment/:instituteId',
            operation: "Get",
            description: 'Get Institute Depertment'
        },
        {
            url: '/api/onEms/getStudentForFeeCollection/:Shid/:deptid/:Mid/:Cid/:Secid/:Stdid',
            operation: "Get",
            description: 'Get student for fee collection by 6 ids'
        },
        {
            url: '/api/onEms/getcmnDay',
            operation: "GET",
            description: 'Get All Day'
        },
        {
            url: '/api/onEms/getinsweekend',
            operation: "GET",
            description: 'Get All Weekend'
        },
        {
            url: '/api/onEms/setDay',
            operation: "POST",
            description: 'POST Weekend'
        },
        {
            url: '/api/onEms/getAllWeekendById/:id',
            operation: "GET",
            description: 'GET A Weekend By Id'
        },
        {
            url: '/api/onEms/getFeesType',
            operation: "GET",
            description: 'GET Fees Type'
        },
        {
            url: '/api/onEms/setFees',
            operation: "POST",
            description: 'Set Fees'
        },
        {
            url: '/api/onEms/getALLFees',
            operation: "GET",
            description: 'GET ALL Fees'
        },
        {
            url: '/api/onEms/getAllFeesByID/:id',
            operation: "GET",
            description: 'Getting All Fees by ID'
        },
        {
            url: '/api/onEms/deleteFeeByID/:id',
            operation: "GET",
            description: 'Delete and GET Fee'
        },

        //for Fine

        {
            url: '/api/onEms/getFineType',
            operation: "GET",
            description: 'GET Fine Type'
        },
        {
            url: '/api/onEms/setFine',
            operation: "POST",
            description: 'Set Fine'
        },
        {
            url: '/api/onEms/getALLFine',
            operation: "GET",
            description: 'GET ALL Fine'
        },
        {
            url: '/api/onEms/getAllFineByID/:id',
            operation: "GET",
            description: 'Getting All Fine by ID'
        },

        {
            url: '/api/onEms/deleteFineByID/:id',
            operation: "GET",
            description: 'Delete and Getting All Fine'
        },
        {
            url: '/api/onEms/getDue/:MonthID/:InstituteID',
            operation: "GET",
            description: 'GET Due'
        },


        //for FeeSetup
        {
            url: '/api/onEms/loadFeesType',
            operation: "GET",
            description: 'GET LoadFeeType'
        },
        {
            url: '/api/onEms/loadFees/:InstituteID/:ShiftID/:DepartmentID/:SectionID/:MediumID/:ClassID/:FeesTypeID',
            operation: "GET",
            description: 'GET Load grid for feeSetup'
        },
        {
            url: '/api/onEms/setFeeSetup',
            operation: "POST",
            description: 'POST setFeeSetup'
        },

        //For Scholarship 
        {
            url: '/api/onEms/setInsScholarship',
            operation: "POST",
            description: 'POST Scholarship'
        },
        {
            url: '/api/onEms/getAllScholarship/:Insid/:Shid/:Deptid/:Medid/:Clsid/:StudentID',
            operation: "GET",
            description: 'GET All Scholarship by 5 ids'
        },
        {
            url: '/api/onEms/deleteScholarshipByID/:ScholarshipID',
            operation: "get",
            description: 'DELETE All Scholarship by  id'
        }
        //zahid_for scholarship
        ,
        {
            url: '/api/onEms/getVacation',
            operation: "GET",
            description: 'GET getVacation'
        },
        {
            url: '/api/onEms/getVacationBy',
            operation: "GET",
            description: 'GET getVacationBy'
        },
        {
            url: '/api/onEms/setVacation',
            operation: "POST",
            description: 'POST setVacation'
        },
        {
            url: '/api/onEms/getVacationId/:id',
            operation: "GET",
            description: 'GET getVacationId'
        },
        {
            url: '/api/onEms/getMonthlyFee/:shiftID/:mediumID/:classID/:depertmentID',
            operation: "GET",
            description: 'GET Monthly Fee'
        },
        {
            url: '/api/onEms/getMonthWiseFees/:instituteID/:shiftID/:depertmentID/:mediumID/:classID/:monthID',
            operation: "GET",
            description: 'GET Monthly Fee'
        },
        {
            url: '/api/onEms/getScholarship/:InstituteID/:StudentID/:MonthID',
            operation: "GET",
            description: 'GET Monthly Fee'
        },
        {
            url: '/api/onEms/getFineDetails/:shiftID/:mediumID/:classID/:depertmentID',
            operation: "GET",
            description: 'GET Monthly Fee'
        },
        {
            url: '/api/onEms/getLateAndAbsent/:shiftID/:mediumID/:classID/:depertmentID',
            operation: "GET",
            description: 'GET Monthly Fee'
        },
        {
            url: '/api/onEms/getFeesHeadByFeesTypeID/:instituteID/:FeesTypeID',
            operation: "GET",
            description: 'GET FeesHeadByFeesTypeID'
        },
        {
            url: '/api/onEms/getFeeByFeesId/:instituteID/:FeesHeadID/:FeesTypeID',
            operation: "GET",
            description: 'GET FeesHeadByFeesTypeID'
        },
        {
            url: '/api/onEms/getStudentMonthlyFeesInfo/:instituteID',
            operation: "GET",
            description: 'GET Student Monthly Fees Information'
        },
        {
            url: '/api/onEms/getStudentAccFeesCollectionFee/:instituteID/:CollectionID',
            operation: "GET",
            description: 'GET Student Monthly Collection Fees'
        },
        {
            url: '/api/onEms/getStudentAccFeesCollectionFine/:InstituteID/:CollectionID',
            operation: "GET",
            description: 'GET Student Monthly Collection Fine'
        },
        {

            url: '/api/onEms/getInsEvents',
            operation: "GET",
            description: 'GET getEvent'
        },
        {
            url: '/api/onEms/setinsEvent',
            operation: "POST",
            description: 'POST setEvent'
        },
        {
            url: '/api/onEms/getEventById/:id',
            operation: "GET",
            description: 'GET getEventId'
        },
        {
            url: '/api/onEms/getEvent',
            operation: "GET",
            description: 'GET getEvents'
        },
        {
            url: '/api/onEms/getInsCurrentEvents/:MonthID',
            operation: "GET",
            description: 'GET getEvents'
        },
        {
            url: '/api/onEms/getStudent/:instituteId/:ClassID/:SectionID/:DepartmentID/:MediumID/:ShiftID/:UserID',
            operation: "GET",
            description: 'GET getStudent'
        },
        {
            url: '/api/onEms/getDailyFeesCollectionReport/:date/:insID',
            operation: "GET",
            description: 'GET get daily fees collecion by date and institute id'
        },
        {
            url: '/api/onEms/getTotalCollectionAndTotalDue/:InstituteID/:MonthID',
            operation: "GET",
            description: 'getTotalCollectionAndTotalDue'
        },
        {
            url: '/api/onEms/getPaymentMethod',
            operation: "GET",
            description: 'GET getPaymentMethod'
        },
        {
            url: '/api/onEms/getCurrency',
            operation: "GET",
            description: 'GET getCurrency'
        },
        {
            url: '/api/onEms/setStudentBasicInfo',
            operation: "POST",
            description: 'POST StudentBasicInfo'
        },
        {
            url: '/api/onEms/SetExcelData',
            operation: "POST",
            description: 'POST SetExcelData'
        },
        {
            url: '/api/onEms/setChartOfAccounts',
            operation: "POST",
            description: 'POST Chart Of Accounts'
        },
        {
            url: '/api/onEms/api/onEms/getChartOfAccountsTypeID/:Insid',
            operation: "GET",
            description: 'Get Chart Of Accounts Type by Institute ID'
        },
        {
            url: '/api/onEms/getChartOfAccountsByCOATypeID/:Insid/:CoaTypeId',
            operation: "GET",
            description: 'Get Chart Of Accounts By Institute id and COAType ID'
        },
        {
            url: '/api/onEms/getMonthlyfeesReport/:MonthID/:InstituteID',
            operation: "GET",
            description: 'GET getMonthlyFeeReportByParams'
        },
        {
            url: '/api/onEms/getPeriodByParms/:MediumID/:ClassID/:DepartmentID/:ShiftID/:InstituteID/:SectionID',
            operation: "GET",
            description: 'GET getperiod'
        },
        {
            url: '/api/onEms/getRoutine/:ExamID/:DepartmentID/:MediumID/:ShiftID/:SectionID/:ClassID/:InstituteID',
            operation: "GET",
            description: 'GET Routine'
        },
        {
            url: '/api/onEms/setExameRoutine',
            operation: "POST",
            description: 'POST ExameRoutine'
        },
        {
            url: '/api/onEms/getExameRounine/:InstituteID',
            operation: "GET",
            description: 'GET Routine'
        },
        {
            url: '/api/onEms/getExameRoutineDetail/:InstituteID/:ExamRoutineID',
            operation: "GET",
            description: 'GET ExameRoutine'
        },
        {
            url: '/api/onEms/deleteExamRoutineByID/:ExamRoutineID',
            operation: "Delect",
            description: 'GET Delect ExameRoutine'
        },


        {
            url: '/api/onEms/getStudentToUpdate/:UserID',
            operation: "GET",
            description: 'GET Student to Upade'
        },
        {
            url: '/api/onEms/getClsClassRoutineById/:ShiftID/:MediumID/:ClassID/:SectionID/:DepartmentID/:InstituteID',
            operation: "GET",
            description: 'GET ClassRoutineById'
        },
        {
            url: '/api/onEms/getTotalStudentAndTotalAttendence/:InstituteID/:UserTypeID/:CurrentDate',
            operation: "GET",
            description: 'GET getTotalStudentAndTotalAttendence'
        },
        {
            url: '/api/onEms/setClsClassRoutineMasterDetail',
            operation: "POST",
            description: 'POST setClsClassRoutineMasterDetail'
        },
        {
            url: '/api/onEms/getChartOfAccountByID/:Insid/:CoaID',
            operation: "GET",
            description: 'GET Chart OF Account By Institute id and Chart of Acc ID'
        },
        {
            url: '/api/onEms/getChartOfAccountByInstituteID/:Insid',
            operation: "GET",
            description: 'GET Chart OF Account By Institute id '
        },
        {
            url: '/api/onEms/deleteChartOfAccounts',
            operation: "Delete",
            description: 'Delete Chart OF Account '
        },
        {
            url: '/api/onEms/setUserAuthentication',
            operation: "POST",
            description: 'POST User Authentication'
        },

        {
            url: '/api/onEms/getAllBanks',
            operation: "GET",
            description: 'GET getAllBanks'
        },
        {
            url: '/api/onEms/getAllBankAccountType',
            operation: "GET",
            description: 'GET getAllBankAccountType'
        },
        {
            url: '/api/onEms/getAllBankAccount',
            operation: "GET",
            description: 'GET getAllBankAccount'
        },
        {
            url: '/api/onEms/setBankAccount',
            operation: "POST",
            description: 'POST setBankAccount'
        },
        {
            url: '/api/onEms/getBankAccountByID',
            operation: "GET",
            description: 'GET getBankAccountByID'
        },
        {
            url: '/api/onEms/deleteBankAccountByID',
            operation: "Delete",
            description: 'Delete deleteBankAccountByID'
        },
        {
            url: '/api/onEms/getinsGrade/:InstituteID',
            operation: "GET",
            description: 'GET Getgrade'
        },
        {
            url: '/api/onEms/setinsGrade',
            operation: "POST",
            description: 'POST SetinsGrade'
        },
        {
            url: '/api/onEms/getExamPassMark/:InstituteID',
            operation: "GET",
            description: 'GET pass marks'
        },
        {
            url: '/api/onEms/setExamePassMarks',
            operation: "POST",
            description: 'POST SetinsGrade'
        },

        {
            url: '/api/onEms/getExamePassmarksDetail/:InstituteID/:PassMarkID',
            operation: "GET",
            description: 'GET pass marks'
        },
        {
            url: '/api/onEms/setExamMark',
            operation: "POST",
            description: 'POST SetMarks'
        },
        {
            url: '/api/onEms/getExamMark/:InstituteID/:ExamID/:ClassID/:SectionID/:DepartmentID/:ShiftID/:MeduimID/:SubjectID',
            operation: "GET",
            description: 'GET Exam marks'
        },
        {
            url: '/api/onEms/getUserAuthentication/:Insid/:AuthID',
            operation: "GET",
            description: 'GET UserAuthentication By Institute ID and Authentication ID'
        },
        {
            url: '/api/onEms/deleteUserAuthentication',
            operation: "Delete",
            description: 'Delete deleteUserAuthentication'
        },
        {
            url: '/api/onEms/getExistingParams',
            operation: "GET",
            description: 'GET User Authentication check validation'
        },
        {
            url: '/api/onEms/getYearlyFeesSummary/:InstituteID/:YearID/:UserID',
            operation: "GET",
            description: 'GET getYearlyFeesSummary'
        },
        {
            url: '/api/onEms/deleteInsBranch',
            operation: "Delete",
            description: 'Delete  InsBranch'
        },
        {
            url: '/api/onEms/deleteInsNotification',
            operation: "Delete",
            description: 'Delete  InsNotification'
        },
        {
            url: '/api/onEms/deleteInsMail',
            operation: "Delete",
            description: 'Delete   InsMail'
        },
        {
            url: '/api/onEms/deleteDesignation',
            operation: "Delete",
            description: 'Delete   deleteDesignation'
        },
        {
            url: '/api/onEms/deleteInstitute',
            operation: "POST",
            description: 'Delete Institute'
        },
        {
            url: '/api/onEms/getInstituteMediumDdl/:instituteId',
            operation: "GET",
            description: 'GET InsMediumDDL'
        },
        {
            url: '/api/onEms/getInsYearlyFees/:InstituteID/:ShiftID/:MediumID/:ClassID/:DepartmentID/:MonthID',
            operation: "GET",
            description: 'GET YearlyFeesByMonthID for yearly fee gen'
        },
        {
            url: '/api/onEms/getInsYearlyFeesMasterID/:InstituteID/:ShiftID/:MediumID/:ClassID/:DepartmentID/:MonthID',
            operation: "GET",
            description: 'GET YearlyFeesByMonthID for yearly fee gen'
        },
        {
            url: '/api/onEms/getCmnMenuByUser/:id',
            operation: "GET",
            description: 'GET get CmnMenu By UserID '
        },
        {
            url: '/api/onEms/getInstituteBrunchDdl/:instituteId',
            operation: "GET",
            description: 'GET get Brunch by InstituteId '
        },
        {
            url: '/api/onEms/getmodulePermission/:InstituteID',
            operation: "GET",
            description: 'GET get all module permission '
        },
        {
            url: '/api/onEms/getmenuPermission/:InstituteID/:ModuleID/:UserTypeID',
            operation: "GET",
            description: 'GET get all menu permission '
        },
        {
            url: '/api/onEms/MediumWiseClassDDL/:InstituteID/:MediumID',
            operation: "GET",
            description: 'GET MediumWiseClassDDL'
        },
        {
            url: '/api/onEms/ClassWiseDepartmentDDL/:InstituteID/:ClassID/:MediumID',
            operation: "GET",
            description: 'GET MediumWiseClassDDL'
        },
        {
            url: '/api/onEms/getClassWiseDepartment/:InstituteID/:DepartmentID',
            operation: "GET",
            description: 'GET ClassWiseDepartment'
        },
        {
            url: '/api/onEms/spGetMediumWiseClass/:InstituteID/:MediumID',
            operation: "GET",
            description: 'GET MediumWiseClass'
        },
        {
            url: '/api/onEms/setMidWiseClass',
            operation: "POST",
            description: 'POST MidWiseClass'
        },
        {
            url: '/api/onEms/setClassWiseDepartment',
            operation: "POST",
            description: 'POST Class Wise Department'
        },
        {
            url: '/api/onEms/getHolidayByInsId/:InsID',
            operation: "GET",
            description: 'GET Hrm Holidays By InstituteID'
        },
        {
            url: '/api/onEms/setHrmHolidayName',
            operation: "POST",
            description: 'POST Hrm Holidays Name'
        },
        {
            url: '/api/onEms/setHrmHoliday',
            operation: "POST",
            description: 'POST Hrm Holidays'
        },
        {
            url: '/api/onEms/getCmnYear',
            operation: "GET",
            description: 'GET getCmnYear'
        },
        {
            url: '/api/onEms/getHrmHolidayList/:InsID',
            operation: "GET",
            description: 'GET getHrmHolidayList'
        },
        {
            url: '/api/onEms/spGetClsClassRoutine/:ShiftID/:MediumID/:ClassID/:SectionID/:DepartmentID/:InstituteID',
            operation: "GET",
            description: 'GET Class Routine'
        },
        {
            url: '/api/onEms/getSubjectWiseMarks',
            operation: "GET",
            description: 'GET Subject Wise Marks'
        },
        {
            url: '/api/onEms/getAccLedgerVouch/:InsID',
            operation: "GET",
            description: 'GET getAccLedgerVouch'
        },
        {
            url: '/api/onEms/setMarks',
            operation: "POST",
            description: 'POST exam marks'
        },
        {
            url: '/api/onEms/studentWiseMarks/:UserID/:InstituteID/:ClassID/:SectionID/:DepartmentID/:MediumID/:ShiftID/:SubjectID/:ExamID',
            operation: "GET",
            description: 'GET Student Wise Marks Entry'
        },
        {
            url: '/api/onEms/StudentMarks',
            operation: "POST",
            description: 'POST exam marks'
        },
        {
            url: '/api/onEms/spGetInsGradeForReport/:InstituteID',
            operation: "GET",
            description: 'GET Grades'
        },
        {
            url: '/api/onEms/getTrailBalanceReport/:FromDate/:ToDate/:InstituteID/:BranchID/:FiscalYearID',
            operation: "GET",
            description: 'GET Trail BAlance report '
        },
        {
            url: '/api/onEms/getBalanceSheet/:FromDate/:ToDate/:InstituteID/:BranchID/:FiscalYearID',
            operation: "GET",
            description: 'GET Balance Sheet '
        },
        {
            url: '/api/onEms/getAttendenceReportForTeacher/:Branch/:Department/:MonthID/:InstituteID/:RFID',
            operation: "GET",
            description: 'GET Balance Sheet '
        },
        {
            url: '/api/onEms/getIncomeStatementReport/:FromDate/:ToDate/:InstituteID/:BranchID/:FiscalYearID',
            operation: "GET",
            description: 'GET Income Statement  report '
        },
        {
            url: '/api/onEms/getvoucherReport/:FromDate/:ToDate/:InstituteID/:BranchID/:FiscalYearID',
            operation: "GET",
            description: 'GET voucher  report '
        },
        {
            url: '/api/onEms/getDesignationByInstituteID/:InstituteID',
            operation: "GET",
            description: 'GET voucher  report '
        },
        {
            url: '/api/onEms/SetInsAdmitCard',
            operation: 'POST',
            description: 'Set Admit Card'
        },
        {
            url: '/api/onEms/getCOAAllForUiGrid/:Insid/:CoaID/:CoaTypeId/:LoggedUser/:PageNo/:RowCountPerPage/:IsPaging/:SearchProperty',
            operation: "GET",
            description: 'GET COA '
        },
        {
            url: '/api/onEms/spGetAccJournalDetailsForPrint/:JournalID/:InstituteID',
            operation: "GET",
            description: 'GET JournalDetails '
        },
        {
            url: '/api/onEms/GetAccChartOfAccountParentDDL/:InstituteID',
            operation: "GET",
            description: 'GET ChartOfAccountParentDDL '
        },
        {
            url: '/api/onEms/GetAccChartOfAccountByCOAMultiSelect/:InstituteID/:COAID',
            operation: "GET",
            description: 'GET GetAccChartOfAccountByCOAMultiSelect '
        },
        {
            url: '/api/onEms/GetAccChartOfAccountByCOAMultiSelect/:InstituteID/:COAID',
            operation: "GET",
            description: 'GET GetAccChartOfAccountByCOAMultiSelect '
        }
        ,
        {
            url: '/api/onEms/getOpeningTrailBalance/:FromDate/:ToDate/:InstituteID/:BranchID/:FiscalYearID',
            operation: "GET",
            description: 'GET Trail BAlance report '
        },
        {
            url: '/api/onEms/GetpartyLedgerAccounceReport/:UserID/:FromDate/:ToDate/:InstituteID/:FiscalYearID/:COAID/:BranchID',
            operation: "GET",
            description: 'GET Party Ledger  report '
        },
        {
            url: '/api/onEms/GetAccYearlyFeesForReceivebleGenerate/:InstituteID/:MediumID/:ClassID/:DepartmentID',
            operation: "GET",
            description: 'GET yearly fees for Receiveable generation '
        },
        {
            url: '/api/onEms/getAllChartOfAccountsByInstitute/:InstituteID/:COAID',
            operation: "GET",
            description: 'GET COA BY INSTITUTE '
        },
        {
            url: '/api/onEms/GetAccChartOfAccounts/:InstituteID',
            operation: "GET",
            description: 'GET COA BY AccChartOfAccounts '
        },
        {
            url: '/api/onEms/GetHeadType',
            operation: "GET",
            description: 'GET HeadType '
        },

        {
            url: '/api/onEms/GetEmployee/:InstituteID/:UserID',
            operation: "GET",
            description: 'GET Employee '
        },

        {
            url:'/api/onEms/GetAllSalaryHead/:SalaryHeadID',
            operation: "GET",
            description: 'GET Employee '
        },

        {
            url: '/api/onEms/GetOtherSalaryDetail/:OtherSalaryID',
            operation: "GET",
            description: 'GET Other Salary Detail '
        },
        {
            url: '/api/onEms/getEmpDetail/:InstituteID/:DesignationID/:BrunchID',
            operation: "GET",
            description: 'GET get Employee Detail'
        },
        {
            url: '/api/onEms/getDailyattendanceTopSheet',
            operation: "GET",
            description: 'GET Daily Attendance TopSheet'
        },
        {
            url: '/api/onEms/getEmpSalaryList/:InstituteID/:BranchID/:monthID/:yearID',
            operation: "GET",
            description: 'GET Salary Head'
        },

        {
            url: '/api/onEms/getEmpWizeDegignation/:InstituteID/:UserID',
            operation: "GET",
            description: 'GET Emp Wize  '
        },
        {
            url: '/api/onEms/getrptStudentInfoDetail/:InstituteID/:BranchID/:MediumID/:ClassID/:DepartmentID/:SectionID/:ShiftID',
            operation: "GET",
            description: 'GET Information'
        },

        {
            url: '/api/onEms/getrptStudentInfoSummary/:InstituteID/:BranchID/:MediumID/:ClassID/:DepartmentID/:SectionID/:ShiftID',
            operation: "GET",
            description: 'GET Summary'
        },
        {
            url: '/api/onEms/getDailyattendanceTopSheet/:InstituteID/:MediumID/:ClassID/:DepartmentID/:DateTime',
            operation: "GET",
            description: 'GET Daily Attendance Top Sheet'
        },


    ]));
}

module.exports = {
    showHome
}



