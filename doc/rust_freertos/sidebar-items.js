initSidebarItems({"macro":[["configEXPECTED_IDLE_TIME_BEFORE_SLEEP",""],["configMAX_PRIORITIES",""],["configMAX_TASK_NAME_LEN",""],["configMINIMAL_STACK_SIZE",""],["configQUEUE_REGISTRY_SIZE",""],["configTICK_RATE_HZ",""],["configTIMER_TASK_PRIORITY",""],["configTIMER_TASK_STACK_DEPTH",""],["configTOTAL_HEAP_SIZE",""],["get_current_number_of_tasks",""],["get_current_task_delay_aborted",""],["get_current_task_handle",""],["get_current_task_handle_wrapped",""],["get_current_task_priority",""],["get_deleted_tasks_waiting_clean_up",""],["get_handle_from_option",""],["get_next_task_unblock_time",""],["get_num_of_overflows",""],["get_pended_ticks",""],["get_scheduler_running",""],["get_scheduler_suspended",""],["get_task_number",""],["get_task_switch_in_time",""],["get_tcb_from_handle",""],["get_tcb_from_handle_mut",""],["get_tick_count",""],["get_top_ready_priority",""],["get_total_run_time",""],["get_yield_pending",""],["mtCOVERAGE_TEST_DELAY",""],["mtCOVERAGE_TEST_MARKER",""],["pdMS_TO_TICKS",""],["portASSERT_IF_INTERRUPT_PRIORITY_INVALID",""],["portASSERT_IF_IN_ISR",""],["portCLEAN_UP_TCB",""],["portCLEAR_INTERRUPT_MASK",""],["portCLEAR_INTERRUPT_MASK_FROM_ISR",""],["portCONFIGURE_TIMER_FOR_RUN_TIME_STATS",""],["portDISABLE_INTERRUPTS",""],["portENABLE_INTERRUPTS",""],["portEND_SWITCHING_ISR",""],["portENTER_CRITICAL",""],["portEXIT_CRITICAL",""],["portGET_RUN_TIME_COUNTER_VALUE",""],["portNOP",""],["portPRE_TASK_DELETE_HOOK",""],["portRESET_READY_PRIORITY",""],["portSETUP_TCB",""],["portSET_INTERRUPT_MASK",""],["portSET_INTERRUPT_MASK_FROM_ISR",""],["portSUPPRESS_TICKS_AND_SLEEP",""],["portTASK_USES_FLOATING_POINT",""],["portTICK_PERIOS_MS",""],["portYIELD",""],["portYIELD_FROM_ISR",""],["portYIELD_WITHIN_API",""],["queueYIELD_IF_USING_PREEMPTION",""],["record_ready_priority",""],["set_current_number_of_tasks",""],["set_current_task_handle",""],["set_deleted_tasks_waiting_clean_up",""],["set_next_task_unblock_time",""],["set_num_of_overflows",""],["set_pended_ticks",""],["set_scheduler_running",""],["set_scheduler_suspended",""],["set_task_number",""],["set_task_switch_in_time",""],["set_tick_count",""],["set_top_ready_priority",""],["set_total_run_time",""],["set_yield_pending",""],["switch_delayed_lists",""],["taskCHECK_FOR_STACK_OVERFLOW",""],["taskDISABLE_INTERRUPTS","Macro to disable all maskable interrupts. * Implemented by: Fan Jinhao. * C implementation: task.h"],["taskENABLE_INTERRUPTS","Macro to enable microcontroller interrupts."],["taskENTER_CRITICAL","Macro to mark the start of a critical code region.  Preemptive context switches cannot occur when in a critical region."],["taskENTER_CRITICAL_FROM_ISR",""],["taskEXIT_CRITICAL","Macro to mark the end of a critical code region.  Preemptive context switches cannot occur when in a critical region."],["taskEXIT_CRITICAL_FROM_ISR",""],["taskRECORD_READY_PRIORITY",""],["taskRESET_READY_PRIORITY",""],["taskYIELD","Macro for forcing a context switch."],["taskYIELD_IF_USING_PREEMPTION",""],["traceBLOCKING_ON_QUEUE_RECEIVE",""],["traceBLOCKING_ON_QUEUE_SEND",""],["traceCREATE_COUNTING_SEMAPHORE",""],["traceCREATE_COUNTING_SEMAPHORE_FAILED",""],["traceCREATE_MUTEX",""],["traceCREATE_MUTEX_FAILED",""],["traceEND",""],["traceEVENT_GROUP_CLEAR_BITS",""],["traceEVENT_GROUP_CLEAR_BITS_FROM_ISR",""],["traceEVENT_GROUP_CREATE",""],["traceEVENT_GROUP_CREATE_FAILED",""],["traceEVENT_GROUP_DELETE",""],["traceEVENT_GROUP_SET_BITS",""],["traceEVENT_GROUP_SET_BITS_FROM_ISR",""],["traceEVENT_GROUP_SYNC_BLOCK",""],["traceEVENT_GROUP_SYNC_END",""],["traceEVENT_GROUP_WAIT_BITS_BLOCK",""],["traceEVENT_GROUP_WAIT_BITS_END",""],["traceFREE",""],["traceGIVE_MUTEX_RECURSIVE",""],["traceGIVE_MUTEX_RECURSIVE_FAILED",""],["traceINCREASE_TICK_COUNT",""],["traceLOW_POWER_IDLE_BEGIN",""],["traceLOW_POWER_IDLE_END",""],["traceMALLOC",""],["traceMOVED_TASK_TO_READY_STATE",""],["tracePEND_FUNC_CALL",""],["tracePEND_FUNC_CALL_FROM_ISR",""],["tracePOST_MOVED_TASK_TO_READY_STATE",""],["traceQUEUE_CREATE",""],["traceQUEUE_CREATE_FAILED",""],["traceQUEUE_DELETE",""],["traceQUEUE_PEEK",""],["traceQUEUE_PEEK_FROM_ISR",""],["traceQUEUE_PEEK_FROM_ISR_FAILED",""],["traceQUEUE_RECEIVE",""],["traceQUEUE_RECEIVE_FAILED",""],["traceQUEUE_RECEIVE_FROM_ISR",""],["traceQUEUE_RECEIVE_FROM_ISR_FAILED",""],["traceQUEUE_REGISTRY_ADD",""],["traceQUEUE_SEND",""],["traceQUEUE_SEND_FAILED",""],["traceQUEUE_SEND_FROM_ISR",""],["traceQUEUE_SEND_FROM_ISR_FAILED",""],["traceSTART",""],["traceTAKE_MUTEX_RECURSIVE",""],["traceTAKE_MUTEX_RECURSIVE_FAILED",""],["traceTASK_CREATE",""],["traceTASK_CREATE_FAILED",""],["traceTASK_DELAY",""],["traceTASK_DELAY_UNTIL",""],["traceTASK_DELETE",""],["traceTASK_INCREMENT_TICK",""],["traceTASK_NOTIFY",""],["traceTASK_NOTIFY_FROM_ISR",""],["traceTASK_NOTIFY_GIVE_FROM_ISR",""],["traceTASK_NOTIFY_TAKE",""],["traceTASK_NOTIFY_TAKE_BLOCK",""],["traceTASK_NOTIFY_WAIT",""],["traceTASK_NOTIFY_WAIT_BLOCK",""],["traceTASK_PRIORITY_DISINHERIT",""],["traceTASK_PRIORITY_INHERIT",""],["traceTASK_PRIORITY_SET",""],["traceTASK_RESUME",""],["traceTASK_RESUME_FROM_ISR",""],["traceTASK_SUSPEND",""],["traceTASK_SWITCHED_IN",""],["traceTASK_SWITCHED_OUT",""],["traceTIMER_COMMAND_RECEIVED",""],["traceTIMER_COMMAND_SEND",""],["traceTIMER_CREATE",""],["traceTIMER_CREATE_FAILED",""],["traceTIMER_EXPIRED",""]],"mod":[["config",""],["ffi",""],["kernel",""],["list",""],["port",""],["projdefs",""],["queue",""],["queue_api",""],["semaphore",""],["task_control",""],["task_global",""],["task_timemanager",""]]});