function fData(type) {
	
	var log = "";
	log += "2021-04-01 00:00:00	1	12345	54321	10001	0	Type0	0	Type0_Log0	null	100	Param1	76	Param2	7673	Param3	null	Param4	null	Param5	null	Param6	null	Param7" + "\n";
	log += "2021-04-01 05:02:24	2	12345	54321	10001	0	Type0	2	Type0_Log2	null	101	Param1	93	Param2	8410	Param3	null	Param4	null	Param5	null	Param6	null	Param7" + "\n";
	log += "2021-04-01 10:04:48	3	12345	54321	10001	3	Type3	0	Type3_Log0	null	101	Param1	42	Param2	2735	Param3	null	Param4	null	Param5	null	Param6	null	Param7" + "\n";
	log += "2021-04-01 15:07:12	4	12345	54321	10001	2	Type2	2	Type2_Log2	null	102	Param1	32	Param2	9566	Param3	null	Param4	null	Param5	null	Param6	null	Param7" + "\n";
	log += "2021-04-01 20:09:36	5	12345	54321	10001	2	Type2	1	Type2_Log1	null	100	Param1	45	Param2	7176	Param3	null	Param4	null	Param5	null	Param6	null	Param7" + "\n";
	log += "2021-04-02 01:12:00	6	12345	54321	10002	0	Type0	0	Type0_Log0	null	100	Param1	52	Param2	7193	Param3	null	Param4	null	Param5	null	Param6	null	Param7" + "\n";
	log += "2021-04-02 06:14:24	7	12345	54321	10002	0	Type0	2	Type0_Log2	null	102	Param1	95	Param2	9998	Param3	null	Param4	null	Param5	null	Param6	null	Param7" + "\n";
	log += "2021-04-02 11:16:48	8	12345	54321	10002	4	Type4	7	Type4_Log7	null	102	Param1	65	Param2	7877	Param3	null	Param4	null	Param5	null	Param6	null	Param7" + "\n";
	log += "2021-04-02 16:19:12	9	12345	54321	10001	0	Type0	0	Type0_Log0	null	100	Param1	86	Param2	9525	Param3	null	Param4	null	Param5	null	Param6	null	Param7" + "\n";
	log += "2021-04-02 21:21:36	10	12345	54321	10001	0	Type0	2	Type0_Log2	null	100	Param1	56	Param2	6195	Param3	null	Param4	null	Param5	null	Param6	null	Param7" + "\n";
	log += "2021-04-03 02:24:00	11	12345	54321	10001	1	Type1	1	Type1_Log1	null	100	Param1	62	Param2	2781	Param3	null	Param4	null	Param5	null	Param6	null	Param7" + "\n";
	log += "2021-04-03 07:26:24	12	12345	54321	10001	1	Type1	2	Type1_Log2	null	102	Param1	52	Param2	8791	Param3	null	Param4	null	Param5	null	Param6	null	Param7" + "\n";
	log += "2021-04-03 12:28:48	13	12345	54321	10001	1	Type1	4	Type1_Log4	null	100	Param1	25	Param2	1583	Param3	null	Param4	null	Param5	null	Param6	null	Param7" + "\n";
	log += "2021-04-03 17:31:12	14	12345	54321	10001	2	Type2	3	Type2_Log3	null	102	Param1	49	Param2	5837	Param3	null	Param4	null	Param5	null	Param6	null	Param7" + "\n";
	log += "2021-04-03 22:33:36	15	12345	54321	10001	3	Type3	0	Type3_Log0	null	100	Param1	13	Param2	6856	Param3	null	Param4	null	Param5	null	Param6	null	Param7" + "\n";
	log += "2021-04-04 03:36:00	16	12345	54321	10001	4	Type4	6	Type4_Log6	null	100	Param1	61	Param2	6847	Param3	null	Param4	null	Param5	null	Param6	null	Param7" + "\n";
	log += "2021-04-04 08:38:24	17	12345	54321	10001	4	Type4	1	Type4_Log1	null	102	Param1	42	Param2	3591	Param3	null	Param4	null	Param5	null	Param6	null	Param7" + "\n";
	log += "2021-04-04 13:40:48	18	12345	54321	10001	0	Type0	5	Type0_Log5	null	101	Param1	24	Param2	4492	Param3	null	Param4	null	Param5	null	Param6	null	Param7" + "\n";
	log += "2021-04-04 18:43:12	19	12345	54321	10001	0	Type0	5	Type0_Log5	null	100	Param1	57	Param2	2676	Param3	null	Param4	null	Param5	null	Param6	null	Param7" + "\n";
	log += "2021-04-04 23:45:36	20	12345	54321	10001	0	Type0	5	Type0_Log5	null	100	Param1	30	Param2	1159	Param3	null	Param4	null	Param5	null	Param6	null	Param7" + "\n";
	log += "2021-04-05 04:48:00	21	12345	54321	10001	0	Type0	3	Type0_Log3	null	102	Param1	73	Param2	5781	Param3	null	Param4	null	Param5	null	Param6	null	Param7" + "\n";
	log += "2021-04-05 09:50:24	22	12345	54321	10001	1	Type1	2	Type1_Log2	null	102	Param1	68	Param2	4287	Param3	null	Param4	null	Param5	null	Param6	null	Param7" + "\n";
	log += "2021-04-05 14:52:48	23	12345	54321	10001	1	Type1	1	Type1_Log1	null	100	Param1	2	Param2	1699	Param3	null	Param4	null	Param5	null	Param6	null	Param7" + "\n";
	log += "2021-04-05 19:55:12	24	12345	54321	10003	0	Type0	0	Type0_Log0	null	101	Param1	74	Param2	4498	Param3	null	Param4	null	Param5	null	Param6	null	Param7" + "\n";
	log += "2021-04-06 00:57:36	25	12345	54321	10003	0	Type0	2	Type0_Log2	null	102	Param1	22	Param2	2447	Param3	null	Param4	null	Param5	null	Param6	null	Param7" + "\n";
	log += "2021-04-06 06:00:00	26	12345	54321	10003	1	Type1	8	Type1_Log8	null	100	Param1	12	Param2	9699	Param3	null	Param4	null	Param5	null	Param6	null	Param7" + "\n";
	log += "2021-04-06 11:02:24	27	12345	54321	10003	4	Type4	7	Type4_Log7	null	101	Param1	72	Param2	3247	Param3	null	Param4	null	Param5	null	Param6	null	Param7" + "\n";
	log += "2021-04-06 16:04:48	28	12345	54321	10001	0	Type0	0	Type0_Log0	null	100	Param1	60	Param2	7868	Param3	null	Param4	null	Param5	null	Param6	null	Param7" + "\n";
	log += "2021-04-06 21:07:12	29	12345	54321	10001	0	Type0	2	Type0_Log2	null	102	Param1	30	Param2	1261	Param3	null	Param4	null	Param5	null	Param6	null	Param7" + "\n";
	log += "2021-04-07 02:09:36	30	12345	54321	10001	3	Type3	0	Type3_Log0	null	102	Param1	59	Param2	640	Param3	null	Param4	null	Param5	null	Param6	null	Param7";
	
	var chat = "";
	chat += "2022-06-17 00:00:00	101	12345	null	null	아무개	2022-07-01 00:00:00	안녕하세요.	2022-06-15 20:09:36	null	null	null	0" + "\n";
	chat += "2022-06-17 05:09:36	101	12345	null	null	아무개	2022-07-01 00:00:00	감사해요.	2022-06-16 01:19:12	null	null	null	1" + "\n";
	chat += "2022-06-17 10:19:12	101	12345	null	null	아무개	2022-07-01 00:00:00	잘 있어요.	2022-06-16 06:28:48	null	null	null	2" + "\n";
	chat += "2022-06-17 15:28:48	101	12345	null	null	아무개	2022-07-01 00:00:00	다시 만나요.	2022-06-16 11:38:24	null	null	null	0" + "\n";
	chat += "2022-06-17 20:38:24	101	12345	null	null	아무개	2022-07-01 00:00:00	ㅋㅋㅋㅋㅋㅋ	2022-06-16 16:48:00	null	null	null	0" + "\n";
	chat += "2022-06-17 01:48:00	101	12345	null	null	아무개	2022-07-01 00:00:00	ㅎㅎㅎㅎㅎㅎ	2022-06-16 21:57:36	null	null	null	1" + "\n";
	chat += "2022-06-17 06:57:36	101	12345	null	null	아무개	2022-07-01 00:00:00	아름답고 고운 말을 사용합시다.	2022-06-16 03:07:12	null	null	null	2" + "\n";

	
	vData = eval(type);
	return vData;
}